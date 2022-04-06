// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IController} from "./IController.sol";
import {IProject} from "./IProject.sol";
import {Project} from "./Project.sol";
import {IBatch} from "./IBatch.sol";
import {Batch} from "./Batch.sol";

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract Controller is IController, AccessControl {


    /// Events
    event ProjectRegistered(address project);
    event BatchCreated(address batch);


    /// State
    mapping(address => bool) public projects;
    mapping(address => address) public projectsToBatches;

    address public staking;

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @inheritdoc IController
    function getBatchForProject(address _project) external view returns (address) {
        return projectsToBatches[_project];
    }

    function approveProjectByOwner(uint256 id) external {
        revert("not implemented");
    }

    function registerProject(
        string calldata _description,
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) external {
        IProject project = new Project(
            _description,
            _token,
            _saleSupply,
            _rate
        );

        emit ProjectRegistered(address(project));

        projects[address(project)] = true;
    }

    function createBatch(address[] calldata _projects, uint256 _slotCount)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(_projects.length > 0, "can't create batch without projects");
        require(_slotCount > 0, "batch has to have at least one slot");

        IBatch batch = new Batch(_projects, _slotCount);

        for (uint256 i = 0; i < _projects.length; i++) {
            IProject project = Project(_projects[i]);

            require(
                project.isReadyForListing(),
                "project is not ready to be included in batch"
            );
            require(
                projectsToBatches[address(project)] == address(0),
                "project already in a batch"
            );

            projectsToBatches[address(project)] = address(batch);
        }

        emit BatchCreated(address(batch));
    }

    function isProjectInBatch(address _project, address _batch)
        external
        view
        returns (bool)
    {
        return projectsToBatches[_project] == _batch;
    }
}
