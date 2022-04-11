// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {Pool} from "./Pool.sol";
import {IController} from "./IController.sol";

contract StakersPool is Pool {
    address public staking;

    constructor(uint256 _supply, address _controller) Pool(_supply) {
        staking = IController(_controller).staking();
    }

    //
    // IPool
    //

    /// @inheritdoc Pool
    function buy(uint256 _amount) external override(Pool) {
        // TODO check if user has CTND staked
        // TODO the project should transfer tokens in here before calling the function, so check if balance is correct

        revert("not yet implemented");
    }
}
