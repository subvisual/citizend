// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {ISale} from "../token/Sale.sol";

/**
 * An ERC20 token meant for testing purposes (free minting & burning)
 */
contract MockSale is ISale {
    //
    // ISale
    //
    mapping(address => uint256) public override(ISale) allocation;
    mapping(address => uint256) public override(ISale) refundAmount;

    address public paymentToken;

    function paymentTokenToToken(uint256 _x)
        external
        pure
        override(ISale)
        returns (uint256)
    {
        return _x;
    }

    function tokenToPaymentToken(uint256 _x)
        external
        pure
        override(ISale)
        returns (uint256)
    {
        return _x;
    }

    function buy(uint256) external pure {
        revert("not implemented");
    }

    function refund(address) external pure {
        return;
    }

    function uncappedAllocation(address to)
        external
        view
        override(ISale)
        returns (uint256)
    {
        return allocation[to];
    }

    function setIndividualCap(uint256 cap) external pure {
        revert("not implemented");
    }

    //
    // Test functions
    //

    function test_addAllocation(address to, uint256 amount) external {
        allocation[to] += amount;
    }

    function test_addRefund(address to, uint256 amount) external {
        refundAmount[to] += amount;
    }
}
