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
    function calculateAmount(uint256 _paymentAmount)
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
}