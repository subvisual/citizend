// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface IVesting {
    /// @return The cliff period, in months, for public sale vesting
    function publicSaleCliffMonths() external view returns (uint256);

    /// @return The vesting duration, in months
    function publicSaleVestingMonths() external view returns (uint256);

    /// @return The token being vested
    function token() external view returns (address);

    /// @return The addresses that are registered as sale contracts
    function saleAddresses() external view returns (address[]);

    /// @return The start time for the vesting
    function startTime() external view returns (uint256);

    /// @return The total cap for the private sale
    function privateSaleCap() external view returns (uint256);

    /**
     * Adds an address to the list of sale contracts. Can only be called by the
     * admin.
     *
     * @param _saleAddress The address of the sale contract
     */
    function addSale(address _saleAddress) public;

    /// @return How many tokens vested in total for a given address, including already claimed amount
    function totalVested(address to) external view returns (uint256);

    /// @return Amount already claimed by a given address
    function claimed(address to) external view returns (uint256);

    function addSale(address _saleAddress) external;

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
     * If the address is already registered, it does nothing. If the address
     * has been registered in a private sale, it reverts the transaction
     *
     * @param to Beneficiary
     **/
    function createPublicSaleVest(address to) external;

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
