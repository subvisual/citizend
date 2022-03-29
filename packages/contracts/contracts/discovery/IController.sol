// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

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

    /// Definition of a time period
    struct Period {
        uint256 start;
        uint256 end;
    }

    struct Batch {
        uint256 projectCount;
        uint256 slotCount;
        Period votingPeriod;
    }

    /// @param id ID of the project to read
    /// @return Project data structure
    function getProject(uint256 id) external view returns (Project memory);

    /// @param id ID of the batch to read
    /// @return Batch data structure
    function getBatch(uint256 id) external view returns (Batch memory);

    /// Whitelists a project, allowing it to be included on the next batch
    ///
    /// @dev Should only be callable by the owner
    function approveProjectByOwner(uint256 id) external;

    /// Creates a new batch with
    ///
    /// @dev Must guarantee projects are in a valid state (whitelisted & not already belonging to a batch)
    ///
    /// @dev Batches are created in order, and with no overlap.
    ///   i.e.: when creating batch #3, its start date must be after the end date of batch #2
    function createBatch(
        uint256[] calldata projectIds,
        Period calldata votingPeriod
    ) external;

    /// Registers a new Project
    function registerProject(
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) external;

    /// How many votes have been cast by a user on a given batch
    function userVoteCount(uint256 batch, address user)
        external
        returns (uint256);

    /// How many votes have been cast for a project on a given batch
    function projectVoteCount(uint256 batch, uint256 projectId)
        external
        returns (uint256);
}
