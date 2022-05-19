// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IProject} from "../discovery/interfaces/IProject.sol";
import {IPool} from "../discovery/interfaces/IPool.sol";
import {TestPool} from "../discovery/pools/TestPool.sol";

import "hardhat/console.sol";

contract MockProject is IProject {
    /// @inheritdoc IProject
    address public override(IProject) stakersPool;

    /// @inheritdoc IProject
    address public override(IProject) peoplesPool;

    /// Approval function from an eligible project manager
    function approveByManager() external pure {
        revert("not implemented");
    }

    /// One of the criteria for listing: has the project been approved by a project manager?
    function approvedByManager() external pure returns (bool) {
        return true;
    }

    /// Approval function from the legal team
    function approveByLegal() external pure {
        revert("not implemented");
    }

    /// One of the criteria for listing: has the project been approved by the legal team?
    function approvedByLegal() external pure returns (bool) {
        return true;
    }

    /// One of the criteria for listing: does the project contract hold the sale
    /// supply already?
    function hasTokens() external pure returns (bool) {
        return true;
    }

    /// True if project fulfills all criteria to be included in an upcoming batch
    function isReadyForListing() external pure returns (bool) {
        return true;
    }

    function invest(uint256 _peoplesAmount, uint256 _stakersAmount) external {
        if (stakersPool != address(0)) {
            IPool(stakersPool).invest(msg.sender, _stakersAmount);
        }

        if (peoplesPool != address(0)) {
            IPool(peoplesPool).invest(msg.sender, _peoplesAmount);
        }
    }

    function investmentTokenToToken(uint256 _amount)
        external
        pure
        override(IProject)
        returns (uint256)
    {
        return _amount;
    }

    function tokenToInvestmentToken(uint256 _amount)
        external
        pure
        override(IProject)
        returns (uint256)
    {
        return _amount;
    }

    function test_createStakersPool(
        uint256 _supply,
        address _investmentToken,
        uint256 _cliffMonths,
        uint256 _vestingMonths
    ) external {
        stakersPool = address(
            new TestPool(
                _supply,
                _investmentToken,
                _cliffMonths,
                _vestingMonths
            )
        );
    }

    function test_createPeoplesPool(
        uint256 _supply,
        address _investmentToken,
        uint256 _cliffMonths,
        uint256 _vestingMonths
    ) external {
        peoplesPool = address(
            new TestPool(
                _supply,
                _investmentToken,
                _cliffMonths,
                _vestingMonths
            )
        );
    }
}
