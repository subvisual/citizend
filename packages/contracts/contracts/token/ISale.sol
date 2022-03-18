// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface ISale {
    /// The $CTND token
    function token() external view returns (address);

    /// The $aUSD token
    function paymentToken() external view returns (address);

    /// The vesting contact. See {IVesting}
    function vesting() external view returns (address);

    /// Set the vesting contract. Only callbable once by an admin role
    function setVesting(address _vesting) external;

    /// How many $CTND will be received for the given payment amount
    function paymentTokenToToken(uint256 _paymentAmount)
        external
        view
        returns (uint256);

    /// How many $aUSD will be received for the given $CTND amount
    function tokenToPaymentToken(uint256 _tokenAmount)
        external
        view
        returns (uint256);

    /**
     * Buy some $CTND, in exchange for a fixed amount of $aUSD
     *
     * @dev aUSD allowance must be previously set by spender
     *
     * @dev Should fail if not enough $CTND tokens are left in the contract
     *
     * TODO probably should allow a partial purchase?
     */
    function buy(uint256 _paymentAmount) external;

    function privateBuy(
        address _buyer,
        uint256 _paymentAmount,
        uint16 _cliffMonths
    ) external;

    /**
     * Refunds currently refundable amount for the given address
     *
     * @param to Address to refund to
     */
    function refund(address to) external;

    /**
     * Returns the amount of tokens that are available for refund do to the
     * rising tide mechanism
     *
     * @param to The address to query
     * @return The currently claimable amount
     */
    function refundable(address to) external view returns (uint256);

    /**
     * Sets the individual cap for investors, which will then be used when
     * claiming or refunding. Only callable by the cap validator role.
     *
     * @param cap The cap per investor to be set
     */
    function setIndividualCap(uint256 cap) external;

    /**
     * Returns the amount of tokens that have been allocated in this sale for
     * a given address (including the individual cap)
     *
     * @param _who The address to query
     */
    function getAllocations(address _who) external view returns (uint256);

    /**
     * Returns the amount of tokens that have been allocated in this sale for
     * a given address (excluding the individual cap)
     *
     * @param _who The address to query
     */
    function getUncappedAllocations(address _who)
        external
        view
        returns (uint256);
}
