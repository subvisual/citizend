// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IController} from "./IController.sol";
import {ProjectHelpers} from "../libraries/ProjectHelpers.sol";

import "hardhat/console.sol";

contract Controller is IController {
    using ProjectHelpers for Project;

    uint256 lastProjectId;
    uint256 lastBatchId;

    mapping(uint256 => Project) public projects;

    mapping(uint256 => Batch) public batches;

    /// Batch => user => votes
    mapping(uint256 => mapping(address => uint256)) public userVoteCount;

    /// Batch => projectId => votes
    mapping(uint256 => mapping(uint256 => uint256)) public projectVoteCount;

    event RegisterProject(uint256 projectId);

    /// @inheritdoc IController
    function getProject(uint256 id) external view returns (Project memory) {
        return projects[id];
    }

    /// @inheritdoc IController
    function getBatch(uint256 id) external view returns (Batch memory) {
        return batches[id];
    }

    function approveProjectByOwner(uint256 id) external {
        revert("not implemented");
    }

    function registerProject(
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) external {
        require(
            projects[lastProjectId].status == ProjectStatus.Uninitialized,
            "project already exists"
        );

        emit RegisterProject(lastProjectId);

        projects[lastProjectId] = Project({
            id: lastProjectId,
            token: _token,
            saleSupply: _saleSupply,
            rate: _rate,
            status: ProjectStatus.Created
        });

        lastProjectId++;
    }

    function createBatch(
        uint256[] calldata projectIds,
        Period calldata votingPeriod
    ) external {
        revert("not implemented");
    }
}
