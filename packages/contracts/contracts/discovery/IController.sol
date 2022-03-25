// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {ICommon} from "./ICommon.sol";

/// The main entry point for most admin interactions with the discovery system:
///   * Creating batches
///   * Whitelisting companies
interface IController {
    enum ProjectStatus {
        Uninitialized,
        Created,
        Whitelisted,
        InBatch
    }

    /// Information on an individual project
    struct Project {
        uint256 id;
        /// ERC20 being sold on behalf of the project
        address token;
        /// How many tokens are being sold
        uint256 saleSupply;
        /// Exchange rate, multiplied by 10e18
        uint256 rate;
        /// ProjectStatus
        ProjectStatus status;
    }

    /// @param id ID of the project to read
    /// @return Project data structure
    function getProject(uint256 id) external view returns (Project memory);

    /// @param id ID of the batch to read
    /// @return Batch address
    function getBatch(uint256 id) external view returns (address);

    /// Whitelists a project, allowing it to be included on the next batch
    ///
    /// @dev Should only be callable by the owner
    function approveProjectByOwner(uint256 id) external;

    /// Registers a new Project
    function registerProject(
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) external;

    /// Creates a new batch
    ///
    /// @dev Must guarantee projects are in a valid state (whitelisted & not already belonging to a batch)
    ///
    /// @dev Batches are created in order, and with no overlap.
    ///   i.e.: when creating batch #3, its start date must be after the end date of batch #2
    function createBatch(
        uint256[] memory projectIds,
        ICommon.Period memory votingPeriod,
        uint256 slotcount
    ) external;
}
