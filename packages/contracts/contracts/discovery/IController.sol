// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IBatch} from "./IBatch.sol";

/// The main entry point for most admin interactions with the discovery system:
///   * Creating batches
///   * Whitelisting companies
interface IController {
    /// @param _project address of the project
    /// @return Batch address
    function getBatchForProject(address _project)
        external
        view
        returns (address);

    /// Whitelists a project, allowing it to be included on the next batch
    function approveProjectByOwner(uint256 id) external;

    /// Creates a new batch with
    ///
    /// @dev Must guarantee projects are in a valid state (whitelisted & not already belonging to a batch)
    ///
    /// @dev Batches are created in order, and with no overlap.
    ///   i.e.: when creating batch #3, its start date must be after the end date of batch #2
    function createBatch(address[] calldata projects, uint256 _slotCount)
        external;

    /// Registers a new Project
    function registerProject(
        string calldata _description,
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) external;

    function isProjectInBatch(address _project, address _batch)
        external
        returns (bool);
}
