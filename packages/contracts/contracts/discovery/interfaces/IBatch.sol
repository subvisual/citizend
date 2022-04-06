// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

interface IBatch {
    /// How many votes have been cast by a user on this batch
    function userVoteCount(address user) external returns (uint256);

    /// How many votes have been cast for a project on this batch
    function projectVoteCount(address project) external returns (uint256);

    function vote(
        address projectAddress,
        uint256 peoplePoolStake,
        uint256 stakersPoolStake
    ) external;
}
