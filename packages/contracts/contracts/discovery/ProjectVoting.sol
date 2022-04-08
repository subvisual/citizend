// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {ICommon} from "./ICommon.sol";
import {Math} from "../libraries/Math.sol";

abstract contract ProjectVoting is ICommon {
    /// number of votes for each project
    uint32[] public votes;

    /// Ordered list of slot winners
    /// @dev only valid up to the last time there was a vote. Use getWinners() instead.
    address[] winners;

    /// index in the votes array to project address
    mapping(uint256 => address) public votesIndexToProject;

    /// project address to index  in the votes array
    mapping(address => uint256) public projectToVotesIndex;

    /// user => votes
    mapping(address => uint256) public userVoteCount;

    /// project address => votes
    mapping(address => uint256) public projectVoteCount;

    /// project => (user => voted)
    mapping(address => mapping(address => bool)) public userVotesPerProject;

    /// Project address to status
    /// @dev only valid up to the last time there was a vote. Use getProject(address) instead.
    mapping(address => ProjectStatus) projectStatuses;

    function projectVoting_projects()
        public
        view
        virtual
        returns (address[] memory);

    function projectVoting_votingPeriod()
        public
        view
        virtual
        returns (Period memory);

    function projectVoting_singleSlotDuration()
        public
        view
        virtual
        returns (uint256);

    enum ProjectStatus {
        InProgress,
        Won,
        Lost
    }

    struct Vote {
        uint256 originalIndex;
        uint32 count;
    }

    function _vote(address projectAddress) internal {
        require(
            !userVotesPerProject[projectAddress][msg.sender],
            "already voted in this project"
        );
        _defineWinners();
        require(
            projectStatuses[projectAddress] == ProjectStatus.InProgress,
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
            projectStatuses[computedWinners[i]] = ProjectStatus.Won;
        }

        if (block.timestamp >= projectVoting_votingPeriod().end) {
            for (uint256 i = 0; i < projectVoting_projects().length; i++) {
                if (
                    projectStatuses[projectVoting_projects()[i]] ==
                    ProjectStatus.InProgress
                ) {
                    projectStatuses[projectVoting_projects()[i]] = ProjectStatus
                        .Lost;
                }
            }
        }
    }

    function _getWinners() internal view returns (address[] memory) {
        if (block.timestamp < projectVoting_votingPeriod().start) {
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
            result[i] = votesIndexToProject[
                sortedVotes[i - numberOfExistingWinners].originalIndex
            ];
        }

        return result;
    }

    function _numberOfSlotsToCalculate() internal view returns (uint256) {
        uint256 endTimestamp = Math.min(
            projectVoting_votingPeriod().end,
            block.timestamp
        );
        return
            (endTimestamp - projectVoting_votingPeriod().start) /
            projectVoting_singleSlotDuration();
    }

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
