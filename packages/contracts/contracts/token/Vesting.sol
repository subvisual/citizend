// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface IVesting {
    /// @return The timestamp at which cliff/vesting accounting starts
    function cliffStart() external view returns (uint256);

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
     * @dev This can currently be called by anyone (may change)
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
     */
    function createPrivateSaleVest(
        address to,
        uint256 amount,
        uint16 cliffMonths
    ) external;
}

/**
 * @dev Remove `abstract` when fully implemented
 */
contract Vesting is IVesting {
    mapping (address => uint256) public _vested;

    function cliffStart() external view returns (uint256) {
        revert();
    }

    function publicSaleCliffMonths() external view returns (uint256) {
        revert();
    }

    function publicSaleVestingMonths() external view returns (uint256) {
        revert();
    }

    function token() external view returns (address) {
        revert();
    }

    function totalVested(address to) external view returns (uint256) {
        return uint256(0);
    }

    function claimed(address to) external view returns (uint256) {
        revert();
    }

    function claimable(address to) external view returns (uint256) {
        revert();
    }

    function claim(address to) external {
        revert();
    }

    function createPublicSaleVest(address to, uint256 amount) external {
        revert();
    }

    function createPrivateSaleVest(
        address to,
        uint256 amount,
        uint16 cliffMonths
    ) external {
        revert();
    }
}
