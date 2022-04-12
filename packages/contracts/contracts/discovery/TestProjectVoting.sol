// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {ProjectVoting} from "./ProjectVoting.sol";

contract TestProjectVoting is ProjectVoting {
    Period public votingPeriod;
    address[] public projects;
    uint256 public numSlots;

    constructor(
        Period memory _votingPeriod,
        address[] memory _projects,
        uint256 _numSlots
    ) {
        votingPeriod = _votingPeriod;
        projects = _projects;
        numSlots = _numSlots;
    }

    function projectVoting_projects()
        public
        view
        virtual
        override(ProjectVoting)
        returns (address[] memory)
    {
        return projects;
    }

    function projectVoting_votingPeriod()
        public
        view
        virtual
        override(ProjectVoting)
        returns (Period memory)
    {
        return votingPeriod;
    }

    function projectVoting_singleSlotDuration()
        public
        view
        virtual
        override(ProjectVoting)
        returns (uint256)
    {
        return (votingPeriod.end - votingPeriod.start) / numSlots;
    }

    function projectVoting_initialBonus()
        public
        view
        virtual
        override(ProjectVoting)
        returns (int256)
    {
        return 0.05 * 10**18;
    }

    function projectVoting_finalBonus()
        public
        view
        virtual
        override(ProjectVoting)
        returns (int256)
    {
        return 0;
    }

    function setNumSlots(uint256 _numSlots) external {
        numSlots = _numSlots;
    }

    function vote(address projectAddress) external {
        _vote(projectAddress);
    }

    function getWinners() external view returns (address[] memory) {
        return _getWinners();
    }

    function calculateWeightedVote(uint256 currentTime)
        external
        view
        returns (uint256)
    {
        return _calculateWeightedVote(currentTime);
    }
}
