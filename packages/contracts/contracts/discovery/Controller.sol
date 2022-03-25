// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {IController} from "./IController.sol";
import {ICommon} from "./ICommon.sol";
import {IBatch} from "./IBatch.sol";
import {Batch} from "./Batch.sol";
import {ProjectHelpers} from "../libraries/ProjectHelpers.sol";

contract Controller is IController, ICommon, AccessControl {
    using ProjectHelpers for Project;

    uint256 lastProjectId;
    uint256 lastBatchId;

    /// projectID => Project
    mapping(uint256 => Project) public projects;

    /// batchID => Batch address
    mapping(uint256 => address) public batches;

    event RegisterProject(uint256 projectId);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @inheritdoc IController
    function getProject(uint256 id) external view returns (Project memory) {
        return projects[id];
    }

    /// @inheritdoc IController
    function getBatch(uint256 id) external view returns (address) {
        return batches[id];
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

    function approveProjectByOwner(uint256 id)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(
            projects[id].status == ProjectStatus.Created,
            "invalid state for project"
        );

        projects[id].status = ProjectStatus.Whitelisted;
    }

    /// deploy new Batch contract
    /// Batch contract handles the voting and checks with KYC and tokens availability
    function createBatch(
        uint256[] memory projectIds,
        Period memory votingPeriod,
        uint256 slotCount
    ) external {
        require(projectIds.length > 0, "can't create batch without projects");
        require(
            votingPeriod.end > votingPeriod.start,
            "end has to be higher than start"
        );
        require(votingPeriod.start > 0, "start can't be zero");

        for (uint256 i = 0; i < projectIds.length; i++) {
            uint256 projectId = projectIds[i];

            Project memory project = projects[projectId];

            require(
                project.status == ProjectStatus.Whitelisted,
                "project is not whitelisted"
            );

            project.status = ProjectStatus.InBatch;
        }

        IBatch batch = new Batch(
            lastBatchId,
            projectIds,
            slotCount,
            votingPeriod
        );

        batches[lastBatchId] = address(batch);

        lastBatchId++;
    }
}
