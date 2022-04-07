// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IBatch} from "./interfaces/IBatch.sol";
import {ICommon} from "./interfaces/ICommon.sol";

import {Math} from "../libraries/Math.sol";

import "hardhat/console.sol";

contract Batch is IBatch, ICommon {
    enum ProjectStatus {
        InProgress,
        Won,
        Lost
    }

    struct Project {
        address projectAddress;
        ProjectStatus status;
    }

    struct Vote {
        uint256 originalIndex;
        uint32 count;
    }

    /// List of addresses for the project in the batch
    address[] public projectAddresses;

    /// number of available slots
    uint256 public slotCount;

    /// Period for which the batch is open for voting
    Period public votingPeriod;

    /// Address for the controller contract
    address public controller;

    /// Ordered list of slot winners
    /// @dev only valid up to the last time there was a vote. Use getWinners() instead.
    address[] winners;

    /// Project address to extra information, such as status
    /// @dev only valid up to the last time there was a vote. Use getProject(address) instead.
    mapping(address => Project) projects;

    /// user => votes
    mapping(address => uint256) public userVoteCount;

    /// project address => votes
    mapping(address => uint256) public projectVoteCount;

    /// number of votes for each project
    uint32[] public votes;

    /// index in the votes array to project address
    mapping(uint256 => address) public votesIndexToProject;

    /// project address to index  in the votes array
    mapping(address => uint256) public projectToVotesIndex;

    /// project => (user => voted)
    mapping(address => mapping(address => bool)) public userVotesPerProject;

    /// duration in seconds of each slot
    uint256 public singleSlotDuration;

    modifier votingPeriodIsSet() {
        require(votingPeriod.start != 0, "voting period not set");
        require(votingPeriod.end != 0, "voting period not set");
        _;
    }

    modifier inVotingPeriod() {
        require(
            votingPeriod.end >= block.timestamp &&
                votingPeriod.start <= block.timestamp,
            "outside of voting period"
        );
        _;
    }

    constructor(address[] memory _projectAddresses, uint256 _slotCount) {
        controller = msg.sender;
        projectAddresses = _projectAddresses;
        slotCount = _slotCount;

        for (uint256 i = 0; i < projectAddresses.length; i++) {
            projects[projectAddresses[i]] = Project(
                projectAddresses[i],
                ProjectStatus.InProgress
            );
        }
    }

    function setVotingPeriod(uint256 start, uint256 end) public {
        require(start >= block.timestamp, "start must be in the future");
        require(start < end, "start must be before end");
        require(
            msg.sender == controller,
            "only controller can set voting period"
        );
        votingPeriod = Period(start, end);
        singleSlotDuration =
            (votingPeriod.end - votingPeriod.start) /
            slotCount;
    }

    function vote(
        address projectAddress,
        uint256 peoplePoolStake,
        uint256 stakersPoolStake
    ) external votingPeriodIsSet inVotingPeriod {
        _vote(projectAddress);
        _investPeoplePool(peoplePoolStake);
        _investStakersPool(stakersPoolStake);
    }

    function getCurrentWinners()
        external
        view
        votingPeriodIsSet
        returns (address[] memory)
    {
        return _getWinners();
    }

    function getProject(address projectAddress)
        external
        view
        votingPeriodIsSet
        returns (Project memory)
    {
        address[] memory computedWinners = _getWinners();

        for (uint256 i = 0; i < computedWinners.length; i++) {
            if (computedWinners[i] == projectAddress) {
                return Project(projectAddress, ProjectStatus.Won);
            }
        }

        if (votingPeriod.end < block.timestamp) {
            return Project(projectAddress, ProjectStatus.Lost);
        }

        return projects[projectAddress];
    }

    function _vote(address projectAddress) internal {
        require(
            !userVotesPerProject[projectAddress][msg.sender],
            "already voted in this project"
        );
        _defineWinners();
        require(
            projects[projectAddress].status == ProjectStatus.InProgress,
            "project is not in progress"
        );
        userVotesPerProject[projectAddress][msg.sender] = true;
        userVoteCount[msg.sender]++;
        projectVoteCount[projectAddress]++;

        if (
            votes.length == 0 ||
            (projectToVotesIndex[projectAddress] == 0 &&
                votesIndexToProject[0] != projectAddress)
        ) {
            votes.push(1);
            votesIndexToProject[votes.length - 1] = projectAddress;
            projectToVotesIndex[projectAddress] = votes.length - 1;
        } else {
            votes[projectToVotesIndex[projectAddress]]++;
        }
    }

    function _defineWinners() internal {
        address[] memory computedWinners = _getWinners();

        if (computedWinners.length == winners.length) {
            return;
        }

        for (uint256 i = 0; i < computedWinners.length; i++) {
            winners.push(computedWinners[i]);
            projects[computedWinners[i]].status = ProjectStatus.Won;
        }

        if (block.timestamp >= votingPeriod.end) {
            for (uint256 i = 0; i < projectAddresses.length; i++) {
                if (
                    projects[projectAddresses[i]].status ==
                    ProjectStatus.InProgress
                ) {
                    projects[projectAddresses[i]].status = ProjectStatus.Lost;
                }
            }
        }
    }

    function _getWinners() internal view returns (address[] memory) {
        if (block.timestamp < votingPeriod.start) {
            return winners;
        }

        uint256 numberOfVotes = votes.length;
        uint256 numberOfExistingWinners = winners.length;
        uint256 numberOfSlotsToCalculate = _numberOfSlotsToCalculate();
        uint256 numberOfWinners = Math.min(
            numberOfVotes,
            numberOfSlotsToCalculate
        );

        if (numberOfWinners == numberOfExistingWinners) {
            return winners;
        }

        Vote[] memory sortedVotes = new Vote[](numberOfVotes);
        address[] memory result = new address[](numberOfWinners);

        // copy votes to sortedVotes to get the original indexes
        for (uint256 i = 0; i < numberOfVotes; i++) {
            sortedVotes[i] = Vote(i, votes[i]);
        }

        // remove from sortedVotes the votes that are already in winners
        for (uint256 i = 0; i < numberOfExistingWinners; i++) {
            uint256 index = projectToVotesIndex[winners[i]];
            delete sortedVotes[index];
        }

        // sort the remaining votes (the ones that are in winners will be at the end)
        sortedVotes = _sortVotes(sortedVotes);

        // add existing winners to the beginning of the result, keeping order
        for (uint256 i = 0; i < numberOfExistingWinners; i++) {
            result[i] = winners[i];
        }

        // add the remaining votes to the result. Ensuring we start from where
        // the last loop left off and end at the number of total winners to be
        // calculated
        for (uint256 i = numberOfExistingWinners; i < numberOfWinners; i++) {
            result[i] = projects[
                votesIndexToProject[
                    sortedVotes[i - numberOfExistingWinners].originalIndex
                ]
            ].projectAddress;
        }

        return result;
    }

    function _numberOfSlotsToCalculate() internal view returns (uint256) {
        uint256 endTimestamp = Math.min(votingPeriod.end, block.timestamp);
        return (endTimestamp - votingPeriod.start) / singleSlotDuration;
    }

    function _investStakersPool(uint256 stakersPoolStake) internal {}

    function _investPeoplePool(uint256 peoplePoolStake) internal {}

    function _sortVotes(Vote[] memory _votes)
        internal
        view
        returns (Vote[] memory)
    {
        _quickSort(_votes, int256(0), int256(votes.length - 1));
        return _votes;
    }

    function _quickSort(
        Vote[] memory _votes,
        int256 left,
        int256 right
    ) internal view {
        int256 i = left;
        int256 j = right;
        if (i == j) return;

        uint256 pivot = _votes[uint256(left + (right - left) / 2)].count;

        while (i <= j) {
            while (_votes[uint256(i)].count > pivot) i++;
            while (pivot > _votes[uint256(j)].count) j--;
            if (i <= j) {
                (_votes[uint256(i)], _votes[uint256(j)]) = (
                    _votes[uint256(j)],
                    _votes[uint256(i)]
                );
                i++;
                j--;
            }
        }
        if (left < j) _quickSort(_votes, left, j);
        if (i < right) _quickSort(_votes, i, right);
    }
}
