// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IVesting} from "./Vesting.sol";

interface ISale {
    /// The $CTND token
    function token() external view returns (address);

    /// The $aUSD token
    function paymentToken() external view returns (address);

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

/**
 * Citizend token sale contract
 *
 * Users interact with this contract to deposit $aUSD in exchange for $CTND.
 * The contract should hold all $CTND tokens meant to be distributed in the public sale
 *
 * The $CTND are vested on this same contract, according to the logic inherited from {Vesting}
 *
 * @dev Remove `abstract` when fully implemented
 */
abstract contract Sale is ISale {
}
