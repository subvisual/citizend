// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

interface IBatch {
    function vote(
        address projectAddress,
        uint256 peoplePoolStake,
        uint256 stakersPoolStake
    ) external;
}
