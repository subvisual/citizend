// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {Pool} from "./Pool.sol";

contract PeoplesPool is Pool {
    constructor(uint256 _saleSupply) Pool(_saleSupply) {}
}
