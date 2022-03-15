// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {RisingTide} from "./RisingTide.sol";

contract TestRisingTideWithStaticAmounts is RisingTide {
    uint256 immutable _maxTotalInvestment;

    uint256 private totalInvestors;
    uint256 private amountPerInvestor;
    uint256 private _totalInvested;

    constructor(
        uint256 _totalInvestors,
        uint256 _amountPerInvestor,
        uint256 __maxTotalInvestment
    ) {
        totalInvestors = _totalInvestors;
        amountPerInvestor = _amountPerInvestor;
        _maxTotalInvestment = __maxTotalInvestment;
    }

    function maxTotalInvestment()
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return _maxTotalInvestment;
    }

    function investorCount()
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return totalInvestors;
    }

    function investorAmountAt(uint256)
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return amountPerInvestor;
    }

    function totalInvested()
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return amountPerInvestor * totalInvestors;
    }

    function setCap(uint256 _cap) external {
        _risingTide_setCap(_cap);
    }
}
