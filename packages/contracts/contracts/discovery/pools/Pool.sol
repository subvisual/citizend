// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IPool} from "../interfaces/IPool.sol";

/**
 * TODO users should be able to `buy` into the pool, as long as they meet the conditions
 * (stakerspool is for CTND stakers, peoplespool is for those who have already voted for the project)
 *
 * TODO `buy` is for the Project to called from the project only
 * TODO other than these requirements, the rest should be very similar to the CTND Sale contract
 */
abstract contract Pool is IPool {
    address project;

    constructor() {
        project = msg.sender;
    }

    modifier onlyProject() {
        require(msg.sender == project, "not project");
        _;
    }

    //
    // IPool
    //

    /// @inheritdoc IPool
    function buy(uint256 _amount) external override(IPool) onlyProject {
        revert("not yet implemented");
    }

    /// @inheritdoc IPool
    function refund(address _to) external override(IPool) {
        revert("not yet implemented");
    }

    /// @inheritdoc IPool
    function refundAmount(address _to)
        external
        view
        override(IPool)
        returns (uint256 amount)
    {
        revert("not yet implemented");
    }

    /// @inheritdoc IPool
    function uncappedAllocation(address _to)
        external
        view
        override(IPool)
        returns (uint256 amount)
    {
        revert("not yet implemented");
    }

    /// @inheritdoc IPool
    function allocation(address _to)
        external
        view
        override(IPool)
        returns (uint256 amount)
    {
        revert("not yet implemented");
    }
}
