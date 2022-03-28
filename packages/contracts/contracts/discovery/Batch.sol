// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IBatch} from "./IBatch.sol";
import {ICommon} from "./ICommon.sol";

contract Batch is IBatch, ICommon {
    uint256 batchId;
    /// Ids of the projects
    uint256[] projectIds;
    /// number of approved projects in this batch
    uint256 projectCount;
    /// number of available slots
    uint256 slotCount;
    Period votingPeriod;

    /// user => votes
    mapping(address => uint256) public userVoteCount;

    /// projectId => votes
    mapping(uint256 => uint256) public projectVoteCount;

    constructor(
        uint256 _batchId,
        uint256[] memory _projectIds,
        uint256 _slotCount,
        Period memory _votingPeriod
    ) {
        batchId = _batchId;
        projectIds = _projectIds;
        projectCount = _projectIds.length;
        slotCount = _slotCount;
        votingPeriod = _votingPeriod;
    }
}
