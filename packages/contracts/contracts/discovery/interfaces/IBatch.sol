// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {ICommon} from "./ICommon.sol";

interface IBatch is ICommon {
    /// How many votes have been cast by a user on this batch
    function userVoteCount(address user) external returns (uint256);

    /// How many votes have been cast for a project on this batch
    function projectVoteCount(uint256 projectId) external returns (uint256);

    /// The period during which voting is allowed
    function votingPeriod() external view returns (ICommon.Period memory);

    /// How long after voting are investments still allowed
    function investmentDurationAfterVoting() external view returns (uint256);

    /// Vote for a project, sending along an investment in one or both pools
    function vote(
        address _project,
        uint256 _peoplesPoolStake,
        uint256 _stakersPoolStake
    ) external;

    function getWinners() external view returns (address[] memory winners);

    /// Checks whether a project is included in this batch
    /// @param _project Project to query for
    /// @return true if project is in this batch
    function includesProject(address _project) external view returns (bool);
}
