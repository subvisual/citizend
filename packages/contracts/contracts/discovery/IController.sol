// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

library ProjectHelpers {
    uint256 public constant MUL = 10**18;

    function paymentToTokenAmount(
        IController.Project project,
        uint256 _paymentAmount
    ) internal view returns (uint256) {
        return (_paymentAmount * MUL) / project.rate;
    }

    function tokenToPaymentAmount(
        IController.Project project,
        uint256 _tokenAmount
    ) internal view returns (uint256) {
        return (_tokenAmount * project.rate) / MUL;
    }
}

/// The main entry point for most admin interactions with the discovery system:
///   * Creating batches
///   * Whitelisting companies
interface IController {
    /// Information on an individual project
    struct Project {
        uint256 id;
        /// ERC20 being sold on behalf of the project
        address token;
        /// How many tokens are being sold
        uint256 saleSupply;
        /// Exchange rate, multiplied by 10e18
        uint256 rate;
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
    function projects(uint256 id) external view returns (Project memory);

    function batches(uint256 id) external view returns (Batch memory);

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
    function createBatch(uint256[] projectIds, Period votingPeriod) external;

    /// How many votes have been cast by a user on a given batch
    function userVoteCount(uint256 batch, address user);

    /// How many votes have been cast for a project on a given batch
    function projectVoteCount(uint256 batch, address user);
}

contract Controller is IController {
    using ProjectHelpers for Project;

    /// @inheritdoc IController
    mapping(uint256 => Project) public projects;

    mapping(uint256 => Batch) public batches;

    /// Batch => user => votes
    mapping(uint256 => mapping(address => uint256)) userVoteCount;

    /// Batch => projectId => votes
    mapping(uint256 => mapping(uint256 => uint256)) projectVoteCount;
}
