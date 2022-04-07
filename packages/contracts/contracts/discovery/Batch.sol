// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IBatch} from "./interfaces/IBatch.sol";
import {ICommon} from "./interfaces/ICommon.sol";

contract Batch is IBatch, ICommon {
    /// address of the projects
    address[] projects;
    /// number of available slots
    uint256 slotCount;
    Period votingPeriod;

    /// user => votes
    mapping(address => uint256) public userVoteCount;

    /// projectId => votes
    mapping(uint256 => uint256) public projectVoteCount;

    constructor(address[] memory _projects, uint256 _slotCount) {
        require(_projects.length > 0, "_projects.length cannot be 0");
        require(_slotCount > 0, "_slotCount cannot be 0");

        projects = _projects;
        slotCount = _slotCount;
    }
}
