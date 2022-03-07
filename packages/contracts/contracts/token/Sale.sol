// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {Vesting} from "./Vesting.sol";

interface ISale {
    /// The $CTND token
    function token() external view returns (address);

    /// The $aUSD token
    function paymentToken() external view returns (address);

    /**
     * Buy some $CTND, in exchange for a fixed amount of $aUSD
     *
     * @dev aUSD allowance must be previously set by spender
     */
    function buy(amount _paymentAmount) external;
}

/**
 * Citizend token sale contract
 *
 * Users interact with this contract to deposit $aUSD in exchange for $CTND.
 *
 * The $CTND are vested on this same contract, according to the logic inherited from {Vesting}
 */
contract Sale is Vesting, ISale {

}
