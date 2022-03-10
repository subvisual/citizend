// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import "hardhat/console.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../libraries/DateTime.sol";

interface IVesting {
    /// @return The current balance of the vesting contract.
    function balance() external view returns (uint256);

    /// @return The balance of the vesting contract that has not been vested yet.
    function remainingBalance() external view returns (uint256);

    /// @return The cliff period, in months, for public sale vesting
    function publicSaleCliffMonths() external view returns (uint256);

    /// @return The vesting duration, in months
    function publicSaleVestingMonths() external view returns (uint256);

    /// @return The token being vested
    function token() external view returns (address);

    /// @return How many tokens vested in total for a given address, including already claimed amount
    function totalVested(address to) external view returns (uint256);

    /// @return Amount already claimed by a given address
    function claimed(address to) external view returns (uint256);

    /**
     * Calculates claimable amount of tokens for an address.
     * This should take into account:
     *   - total vested amount
     *   - already claimed amount
     *   - number of months elapsed since the end of the account's cliff period
     *   - total number of months this account is vesting for
     * Vesting should be lienear once cliff ends, but in monthly ticks, instead of a continuous release
     *
     * @param to The address to query
     * @return The currently claimable amount
     */
    function claimable(address to) external view returns (uint256);

    /**
     * Claims currently claimable amount for the given address
     *
     * @param to Address to claim from
     */
    function claim(address to) external;

    /**
     * Creates a new vesting with public sale parameters
     * If the address is already registered, simply add the funds to his existing vesting
     *
     * @dev Should only be callable by the sale contract
     *
     * @dev In order to not mess up calculations, this should revert if address
     * already has private sale vesting
     *
     * @param to Beneficiary
     * @param amount Amount to vest
     **/
    function createPublicSaleVest(address to, uint256 amount) external;

    /**
     * Creates a new vesting with private sale parameters
     * If the address is already registered, simply add the funds to his existing vesting
     *
     * @dev In order to not mess up calculations, this should revert if address
     * already has public a sale vesting
     *
     * @dev Should only be callable by an authorized account
     **/
    function createPrivateSaleVest(
        address to,
        uint256 amount,
        uint16 cliffMonths
    ) external;
}

/**
 * @dev Remove `abstract` when fully implemented
 **/
contract Vesting is IVesting, AccessControl {
    enum AccountType {
        Empty,
        PublicSale,
        PrivateSale
    }

    struct Account {
        uint256 totalAmount;
        uint256 leftToClaim;
        uint256 cliffMonths;
        uint256 vestingMonths;
        AccountType accountType;
    }

    mapping(address => Account) public accounts;

    address public immutable token;
    uint256 public immutable startTime;
    address public immutable saleContract;
    uint256 public immutable publicSaleVestingMonths;
    uint256 public immutable publicSaleCliffMonths;
    uint256 public reservedAmount;

    uint256 public constant PRIVATE_SALE_VESTING_MONTHS = 36;
    uint256 public constant PRIVATE_SALE_MAX_CLIFF_MONTHS = 6;

    bytes32 public constant PRIVATE_SELLER = keccak256("private_seller");

    event VestingCreated(
        address indexed to,
        uint256 amount,
        AccountType accountType
    );
    event VestingClaimed(address indexed to, uint256 amount);

    modifier onlySaleContract() {
        require(msg.sender == saleContract);
        _;
    }

    constructor(
        uint256 _publicSaleVestingMonths,
        address _token,
        address _saleContract,
        uint256 _startTime
    ) {
        publicSaleVestingMonths = _publicSaleVestingMonths;
        publicSaleCliffMonths = 0;
        token = _token;
        saleContract = _saleContract;
        startTime = _startTime;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// See {IVesting.balance}
    function balance() public view returns (uint256) {
        return IERC20(token).balanceOf(address(this));
    }

    /// See {IVesting.remainingBalance}
    function remainingBalance() public view returns (uint256) {
        return balance() - reservedAmount;
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
        return account.totalAmount - account.leftToClaim;
    }

    /// See {IVesting.claimable}
    function claimable(address to) public view returns (uint256) {
        Account storage account = accounts[to];
        uint256 periodsElapsed = _numberOfPeriodsElapsed();

        if (account.cliffMonths >= periodsElapsed) {
            return 0;
        }

        if (periodsElapsed >= account.vestingMonths + account.cliffMonths) {
            return account.leftToClaim;
        }

        uint256 vestingPerMonth = account.totalAmount / account.vestingMonths;
        return
            (vestingPerMonth * (periodsElapsed - account.cliffMonths)) -
            (account.totalAmount - account.leftToClaim);
    }

    /// See {IVesting.claim}
    function claim(address to) external {
        uint256 claimableAmount = claimable(to);
        require(claimableAmount > 0, "No claimable amount");
        Account storage account = accounts[to];

        account.leftToClaim -= claimableAmount;
        reservedAmount -= claimableAmount;
        IERC20(token).transfer(to, claimableAmount);

        emit VestingClaimed(to, claimableAmount);
    }

    /// See {IVesting.createPublicSaleVest}
    function createPublicSaleVest(address to, uint256 amount)
        external
        onlySaleContract
    {
        require(amount <= remainingBalance(), "Insufficient balance");
        Account storage account = accounts[to];
        require(
            account.accountType != AccountType.PrivateSale,
            "Account already has private vesting"
        );
        account.totalAmount += amount;
        account.leftToClaim += amount;
        account.cliffMonths = 0;
        account.vestingMonths = publicSaleVestingMonths;
        account.accountType = AccountType.PublicSale;

        reservedAmount += amount;

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
        require(amount <= remainingBalance(), "Insufficient balance");
        Account storage account = accounts[to];
        require(
            account.accountType != AccountType.PublicSale,
            "Account already has public vesting"
        );

        account.totalAmount += amount;
        account.leftToClaim += amount;
        account.cliffMonths = cliffMonths;
        account.vestingMonths = PRIVATE_SALE_VESTING_MONTHS;
        account.accountType = AccountType.PrivateSale;

        reservedAmount += amount;

        emit VestingCreated(to, amount, account.accountType);
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
                DateTime.getYear(block.timestamp),
                DateTime.getMonth(block.timestamp),
                1
            );
            uint256 beginningOfMonthStartTime = DateTime.timestampFromDate(
                DateTime.getYear(startTime),
                DateTime.getMonth(startTime),
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
