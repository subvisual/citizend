// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IProject} from "../discovery/interfaces/IProject.sol";
import {IPool} from "../discovery/interfaces/IPool.sol";
import {TestPool} from "../discovery/pools/TestPool.sol";

import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MockProject is IProject {
    /// @inheritdoc IProject
    address public override(IProject) stakersPool;

    /// @inheritdoc IProject
    address public override(IProject) peoplesPool;

    // Merkle root for contributions validation
    bytes32 public merkleRoot;

    error InvalidLeaf();

    /// Approval function from an eligible project manager
    function approveByManager() external pure {
        revert("not implemented");
    }

    /// One of the criteria for listing: has the project been approved by a project manager?
    function approvedByManager() external pure returns (bool) {
        return true;
    }

    /// Approval function from the legal team
    function approveByLegal() external pure {
        revert("not implemented");
    }

    /// One of the criteria for listing: has the project been approved by the legal team?
    function approvedByLegal() external pure returns (bool) {
        return true;
    }

    /// One of the criteria for listing: does the project contract hold the sale
    /// supply already?
    function hasTokens() external pure returns (bool) {
        return true;
    }

    /// True if project fulfills all criteria to be included in an upcoming batch
    function isReadyForListing() external pure returns (bool) {
        return true;
    }

    function invest(
        uint256 _peoplesAmount,
        uint256 _stakersAmount,
        bytes32[] calldata _merkleProof
    ) external {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        bool isValidLeaf = MerkleProof.verify(_merkleProof, merkleRoot, leaf);
        if (!isValidLeaf) revert InvalidLeaf();

        if (stakersPool != address(0)) {
            IPool(stakersPool).invest(msg.sender, _stakersAmount);
        }

        if (peoplesPool != address(0)) {
            IPool(peoplesPool).invest(msg.sender, _peoplesAmount);
        }
    }

    function investmentTokenToToken(
        uint256 _amount
    ) external pure override(IProject) returns (uint256) {
        return _amount;
    }

    function tokenToInvestmentToken(
        uint256 _amount
    ) external pure override(IProject) returns (uint256) {
        return _amount;
    }

    function test_createStakersPool(
        uint256 _supply,
        address _investmentToken
    ) external {
        stakersPool = address(new TestPool(_supply, _investmentToken));
    }

    function test_createPeoplesPool(
        uint256 _supply,
        address _investmentToken
    ) external {
        peoplesPool = address(new TestPool(_supply, _investmentToken));
    }
}
