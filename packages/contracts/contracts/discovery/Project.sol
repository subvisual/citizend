// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IController} from "./IController.sol";
import {IProject} from "./IProject.sol";
import {StakersPool} from "./pools/StakersPool";
import {PeoplesPool} from "./pools/PeoplesPool";

contract Project is IProject {
    // deployed by each individual project owner, when registering
    // must be deployed via the Controller
    // will have a similar role as the CTND Vesting contract

    address public immutable controller;
    address public immutable token;

    string public description;
    uint256 public immutable saleSupply;
    uint256 public immutable rate;

    /// @inheritdoc IProject
    address override(IProject) stakersPool;

    /// @inheritdoc IProject
    address override(IProject) peoplesPool;

    constructor(
        string memory _description,
        address _token,
        uint256 _saleSupply,
        uint256 _rate
    ) {
        controller = msg.sender;

        description = _description;
        token = _token;
        saleSupply = _saleSupply;
        rate = _rate;

        stakersPool = new StakersPool();
        peoplesPool = new PeoplesPool();
    }

    function hasTokens() private pure returns (bool) {
        return true;
    }

    function isApproved() private pure returns (bool) {
        return true;
    }

    function isReadyForListing() external pure returns (bool) {
        return hasTokens() && isApproved();
    }

    modifier onlyBatch() {
        IController(controller).isProjectInBatch(address(this), msg.sender);
        _;
    }

    function invest(uint256 _peoplesAmount, uint256 _stakersAmount) external {
        revert("not yet implemented");
    }
}
