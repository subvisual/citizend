// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {ISale} from "./ISale.sol";
import {IVesting} from "./IVesting.sol";
import {DateTime} from "../libraries/DateTime.sol";

contract Vesting is IVesting, AccessControl {
    using DateTime for uint256;
    using SafeERC20 for IERC20;

    //
    // Structs
    //

    struct PrivateVesting {
        uint256 amount;
        uint256 claimedAmount;
        uint256 cliffMonths;
        uint256 vestingMonths;
    }

    //
    // State
    //

    /// @inheritdoc IVesting
    mapping(address => uint256) public override(IVesting) claimed;

    mapping(address => PrivateVesting) public privateVestings;

    address public immutable token;
    uint256 public immutable startTime;
    uint256 public immutable publicSaleVestingMonths;
    uint256 public immutable publicSaleCliffMonths;
    uint256 public immutable privateSaleCap;
    uint256 public totalPrivateSales;
    address[] public sales;

    uint256 public constant PRIVATE_SALE_VESTING_MONTHS = 36;
    uint256 public constant PRIVATE_SALE_MAX_CLIFF_MONTHS = 6;

    event VestingClaimed(address indexed to, uint256 amount);

    /// @param _publicSaleVestingMonths Number of months of vesting for the public sale
    /// @param _token Address for the CTND token contract
    /// @param _sales Addresses for the initial sales contracts
    /// @param _startTime Start time of the vesting
    /// @param _privateSaleCap Total cap for the private sale
    constructor(
        uint256 _publicSaleVestingMonths,
        address _token,
        address[] memory _sales,
        uint256 _startTime,
        uint256 _privateSaleCap
    ) {
        publicSaleVestingMonths = _publicSaleVestingMonths;
        publicSaleCliffMonths = 0;
        token = _token;
        sales = _sales;
        startTime = _startTime;
        privateSaleCap = _privateSaleCap;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    //
    // IVesting
    //
    /// @inheritdoc IVesting
    function totalVested(address to)
        public
        view
        override(IVesting)
        returns (uint256)
    {
        return totalVestedPublic(to) + totalVestedPrivate(to);
    }

    /// @inheritdoc IVesting
    function claimable(address to)
        public
        view
        override(IVesting)
        returns (uint256)
    {
        return claimablePublic(to) + claimablePrivate(to);
    }

    /// @inheritdoc IVesting
    function claim(address to) external override(IVesting) {
        uint256 claimableAmount = claimable(to);
        require(claimableAmount > 0, "No claimable amount");

        claimed[to] += claimableAmount;

        IERC20(token).transfer(to, claimableAmount);

        emit VestingClaimed(to, claimableAmount);
    }

    /// @inheritdoc IVesting
    // TODO silently ignore errors
    function refund(address to) external override(IVesting) {
        for (uint256 i = 0; i < sales.length; i++) {
            address saleAddress = sales[i];
            ISale(saleAddress).refund(to);
        }
    }

    //
    // Admin API
    //

    /**
     * Adds an address to the list of sale contracts. Can only be called by the
     * admin.
     *
     * @param _saleAddress The address of the sale contract
     */
    function addSale(address _saleAddress) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_saleAddress != address(0), "cannot be 0x0");

        // TODO emit an event

        sales.push(_saleAddress);
    }

    /// @inheritdoc IVesting
    // TODO review this role
    function createPrivateSaleVest(
        address to,
        uint256 amount,
        uint16 cliffMonths
    ) external override(IVesting) onlyRole(DEFAULT_ADMIN_ROLE) {
        require(
            cliffMonths <= PRIVATE_SALE_MAX_CLIFF_MONTHS,
            "Cliff months too big"
        );
        require(
            totalPrivateSales + amount <= privateSaleCap,
            "Private sale cap reached"
        );
        PrivateVesting storage vesting = privateVestings[to];
        require(
            vesting.amount == 0 || vesting.cliffMonths == cliffMonths,
            "vesting already exists with different cliff"
        );

        vesting.cliffMonths = cliffMonths;
        vesting.vestingMonths = PRIVATE_SALE_VESTING_MONTHS;
        vesting.amount += amount;

        totalPrivateSales += amount;
    }

    //
    // Other Public API
    //

    function totalVestedPublic(address to) public view returns (uint256) {
        uint256 totalAllocated = 0;

        for (uint256 i = 0; i < sales.length; i++) {
            totalAllocated += ISale(sales[i]).allocation(to);
        }

        return totalAllocated;
    }

    function totalVestedPrivate(address to) public view returns (uint256) {
        return privateVestings[to].amount;
    }

    function claimablePublic(address to) public view returns (uint256) {
        uint256 localClaimed = claimed[to];
        uint256 total = totalVestedPublic(to);
        uint256 elapsed = _numberOfPeriodsElapsed();
        uint256 cliff = publicSaleCliffMonths;
        uint256 vesting = publicSaleVestingMonths;

        if (total == 0) {
            return 0;
        }

        if (cliff >= elapsed) {
            return 0;
        }

        if (elapsed >= vesting + cliff) {
            return total - localClaimed;
        }

        uint256 perMonth = total / vesting;
        return (perMonth * (elapsed - cliff)) - localClaimed;
    }

    function claimablePrivate(address to) public view returns (uint256) {
        // TODO
        return 0;
    }

    //
    // Internal API
    //

    /**
     * Calculates the number of periods elapsed since the cliff start.
     *
     * Each period is the beginning of each month and will be passed in as a
     * parameter to the contract
     *
     * @return The number of periods elapsed since the cliff start
     */
    function _numberOfPeriodsElapsed() internal view returns (uint256) {
        if (block.timestamp < startTime) {
            return 0;
        } else {
            uint256 beginningOfMonth = DateTime.timestampFromDate(
                block.timestamp.getYear(),
                block.timestamp.getMonth(),
                1
            );
            uint256 beginningOfMonthStartTime = DateTime.timestampFromDate(
                startTime.getYear(),
                startTime.getMonth(),
                1
            );
            return
                DateTime.diffMonths(
                    beginningOfMonthStartTime,
                    beginningOfMonth
                ) + 1;
        }
    }
}
