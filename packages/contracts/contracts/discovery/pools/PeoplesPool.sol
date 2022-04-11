// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {Pool} from "./Pool.sol";

contract PeoplesPool is Pool {
    constructor(uint256 _supply) Pool(_supply) {}

    /// @inheritdoc Pool
    function buy(uint256 _amount) external override(Pool) {
        // TODO check if user has voted for the project
        // TODO the project should transfer tokens in here before calling the function, so check if balance is correct

        revert("not yet implemented");
    }
}
