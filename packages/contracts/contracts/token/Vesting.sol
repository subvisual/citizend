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

    enum AccountType {
        Empty,
        PublicSale,
        PrivateSale
    }

    struct Account {
        uint256 totalAmount;
        uint256 claimedAmount;
        uint256 refundableAmount;
        uint256 cliffMonths;
        uint256 vestingMonths;
        AccountType accountType;
    }

    mapping(address => Account) public accounts;

    address public immutable token;
    address public immutable aUSD;
    uint256 public immutable startTime;
    address public immutable saleContract;
    uint256 public immutable publicSaleVestingMonths;
    uint256 public immutable publicSaleCliffMonths;
    uint256 public immutable privateSaleCap;
    uint256 public individualCap;
    uint256 public totalPrivateSales;

    uint256 public constant PRIVATE_SALE_VESTING_MONTHS = 36;
    uint256 public constant PRIVATE_SALE_MAX_CLIFF_MONTHS = 6;

    bytes32 public constant PRIVATE_SELLER = keccak256("private_seller");
    bytes32 public constant CAP_VALIDATOR = keccak256("cap_validator");

    event VestingCreated(
        address indexed to,
        uint256 amount,
        AccountType accountType
    );
    event VestingClaimed(address indexed to, uint256 amount);
    event Refunded(address indexed to, uint256 amount);

    modifier onlySaleContract() {
        require(msg.sender == saleContract);
        _;
    }

    /// @param _publicSaleVestingMonths Number of months of vesting for the public sale
    /// @param _token Address for the CTND token contract
    /// @param _aUSD Address for the payment token contract
    /// @param _saleContract Address for the sale contract
    /// @param _startTime Start time of the vesting
    /// @param _privateSaleCap Total cap for the private sale
    constructor(
        uint256 _publicSaleVestingMonths,
        address _token,
        address _aUSD,
        address _saleContract,
        uint256 _startTime,
        uint256 _privateSaleCap
    ) {
        publicSaleVestingMonths = _publicSaleVestingMonths;
        publicSaleCliffMonths = 0;
        token = _token;
        aUSD = _aUSD;
        saleContract = _saleContract;
        startTime = _startTime;
        privateSaleCap = _privateSaleCap;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// See {IVesting.totalVested}
    function totalVested(address to) external view returns (uint256) {
        Account storage account = accounts[to];
        uint256 periodsElapsed = _numberOfPeriodsElapsed();

        if (periodsElapsed >= publicSaleVestingMonths) {
            return account.totalAmount;
        } else {
            uint256 vestingPerMonth = account.totalAmount /
                publicSaleVestingMonths;
            return vestingPerMonth * periodsElapsed;
        }
    }

    /// See {IVesting.claimed}
    function claimed(address to) external view returns (uint256) {
        Account storage account = accounts[to];
        return account.claimedAmount;
    }

    /// See {IVesting.claimable}
    function claimable(address to) public view returns (uint256) {
        Account storage account = accounts[to];
        uint256 periodsElapsed = _numberOfPeriodsElapsed();

        if (individualCap == 0) {
            return 0;
        }

        if (account.cliffMonths >= periodsElapsed) {
            return 0;
        }

        if (periodsElapsed >= account.vestingMonths + account.cliffMonths) {
            return _applyCap(account.totalAmount) - account.claimedAmount;
        }

        uint256 vestingPerMonth = _applyCap(account.totalAmount) /
            account.vestingMonths;
        return
            (vestingPerMonth * (periodsElapsed - account.cliffMonths)) -
            account.claimedAmount;
    }

    /// See {IVesting.claim}
    function claim(address to) external {
        uint256 claimableAmount = claimable(to);
        require(claimableAmount > 0, "No claimable amount");

        Account storage account = accounts[to];

        account.claimedAmount += claimableAmount;
        IERC20(token).transfer(to, claimableAmount);

        emit VestingClaimed(to, claimableAmount);
    }

    /// See {IVesting.createPublicSaleVest}
    function createPublicSaleVest(address to, uint256 amount)
        external
        onlySaleContract
    {
        Account storage account = accounts[to];
        require(
            account.accountType != AccountType.PrivateSale,
            "Account already has private vesting"
        );
        account.totalAmount += amount;
        account.cliffMonths = 0;
        account.vestingMonths = publicSaleVestingMonths;
        account.accountType = AccountType.PublicSale;

        emit VestingCreated(to, amount, account.accountType);
    }

    /// See {IVesting.createPrivateSaleVest}
    function createPrivateSaleVest(
        address to,
        uint256 amount,
        uint16 cliffMonths
    ) external onlyRole(PRIVATE_SELLER) {
        require(
            cliffMonths <= PRIVATE_SALE_MAX_CLIFF_MONTHS,
            "Cliff months too big"
        );
        require(
            totalPrivateSales + amount <= privateSaleCap,
            "Private sale cap reached"
        );
        Account storage account = accounts[to];
        require(
            account.accountType != AccountType.PublicSale,
            "Account already has public vesting"
        );

        account.totalAmount += amount;
        account.cliffMonths = cliffMonths;
        account.vestingMonths = PRIVATE_SALE_VESTING_MONTHS;
        account.accountType = AccountType.PrivateSale;

        totalPrivateSales += amount;

        emit VestingCreated(to, amount, account.accountType);
    }

    /// See {IVesting.setIndividualCap}
    function setIndividualCap(uint256 _cap) external onlyRole(CAP_VALIDATOR) {
        require(_cap > 0, "Cap must be greater than 0");
        individualCap = _cap;
    }

    /// See {IVesting.refundable}
    function refundable(address to) public view returns (uint256) {
        Account storage account = accounts[to];

        if (individualCap == 0) {
            return 0;
        }

        if (account.totalAmount <= individualCap) {
            return 0;
        } else {
            return account.totalAmount - individualCap;
        }
    }

    /// See {IVesting.refund}
    function refund(address to) external {
        uint256 refundableAmount = refundable(to);
        require(refundableAmount > 0, "No tokens to refund");

        IERC20(aUSD).transfer(
            to,
            ISale(saleContract).tokenToPaymentToken(refundableAmount)
        );

        emit Refunded(to, refundableAmount);
    }

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

    function _applyCap(uint256 amount) internal view returns (uint256) {
        if (individualCap == 0) {
            return 0;
        }

        if (amount > individualCap) {
            return individualCap;
        }

        return amount;
    }
}
