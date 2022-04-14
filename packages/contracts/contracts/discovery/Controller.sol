// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IController} from "./interfaces/IController.sol";
import {IProject} from "./interfaces/IProject.sol";
import {IBatch} from "./interfaces/IBatch.sol";
import {Project} from "./Project.sol";
import {Batch} from "./Batch.sol";

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract Controller is IController, AccessControl {
    //
    // Events
    //

    event ProjectRegistered(address project);
    event BatchCreated(address batch);

    //
    // Constants
    //
    bytes32 public constant PROJECT_MANAGER_ROLE =
        keccak256("PROJECT_MANAGER_ROLE");
    bytes32 public constant BATCH_MANAGER_ROLE =
        keccak256("BATCH_MANAGER_ROLE");
    bytes32 public constant LEGAL_MANAGER_ROLE =
        keccak256("LEGAL_MANAGER_ROLE");

    //
    // State
    //

    // all project contracts registered
    mapping(address => bool) public projects;

    // project => batch
    mapping(address => address) public projectsToBatches;

    // CTND staking contract
    address public staking;

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PROJECT_MANAGER_ROLE, msg.sender);
        _grantRole(BATCH_MANAGER_ROLE, msg.sender);
        _grantRole(LEGAL_MANAGER_ROLE, msg.sender);
    }

    //
    // IController
    //

    /// @inheritdoc IController
    function registerProject(
        string calldata _description,
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) external override(IController) {
        IProject project = new Project(
            _description,
            _token,
            _saleSupply,
            _rate
        );

        emit ProjectRegistered(address(project));

        projects[address(project)] = true;
    }

    /// @inheritdoc IController
    function createBatch(address[] calldata _projects, uint256 _slotCount)
        external
        override(IController)
        onlyRole(BATCH_MANAGER_ROLE)
    {
        IBatch batch = new Batch(_projects, _slotCount, staking);

        uint256 len = _projects.length;
        for (uint256 i = 0; i < len; i++) {
            address project = _projects[i];
            require(projects[project], "not a known project");
            require(IProject(project).isReadyForListing(), "project not ready");
            require(
                projectsToBatches[project] == address(0),
                "already in a batch"
            );

            projectsToBatches[project] = address(batch);
        }

        emit BatchCreated(address(batch));
    }

    /// @inheritdoc IController
    function isProjectInBatch(address _project, address _batch)
        external
        view
        override(IController)
        returns (bool)
    {
        return projectsToBatches[_project] == _batch;
    }

    //
    // Role queries
    //

    // Checks if a given account has the PROJECT_MANAGER_ROLE role
    function hasProjectManagerRole(address _account)
        external
        view
        returns (bool)
    {
        return hasRole(PROJECT_MANAGER_ROLE, _account);
    }

    // Checks if a given account has the BATCH_MANAGER_ROLE role
    function hasBatchManagerRole(address _account)
        external
        view
        returns (bool)
    {
        return hasRole(BATCH_MANAGER_ROLE, _account);
    }

    // Checks if a given account has the LEGAL_MANAGER_ROLE role
    function hasLegalManagerRole(address _account)
        external
        view
        returns (bool)
    {
        return hasRole(BATCH_MANAGER_ROLE, _account);
    }

    //
    // Queries
    //

    /// @inheritdoc IController
    function getBatchForProject(address _project)
        external
        view
        returns (address)
    {
        return projectsToBatches[_project];
    }
}
