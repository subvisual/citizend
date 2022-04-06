// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IController} from "./IController.sol";
import {IProject} from "./IProject.sol";

contract Project is IProject {
    // deployed by each individual project owner, when registering
    // must be deployed via the Controller
    // will have a similar role as the CTND Vesting contract

    address public controller;
    address public token;

    string public description;
    uint256 public immutable saleSupply;
    uint256 public immutable rate;

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
}
