// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {Pool} from "./Pool.sol";

contract TestPool is Pool {
    constructor(
        uint256 _saleSupply,
        address _investmentToken,
        uint256 _cliffMonths,
        uint256 _vestingMonths
    ) Pool(_saleSupply, _investmentToken, _cliffMonths, _vestingMonths) {}

    function mock_setVestingStart(uint256 _vestingStart) public {
        vestingStart = _vestingStart;
    }
}
