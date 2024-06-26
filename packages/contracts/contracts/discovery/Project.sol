// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import {IController} from "./interfaces/IController.sol";
import {IProject} from "./interfaces/IProject.sol";
import {IPool} from "../discovery/interfaces/IPool.sol";

import {StakersPool} from "./pools/StakersPool.sol";
import {PeoplesPool} from "./pools/PeoplesPool.sol";

contract Project is IProject, ERC165 {
    // deployed by each individual project owner, when registering
    // must be deployed via the Controller
    // will have a similar role as the CTND Vesting contract

    //
    // Constants
    //

    uint256 public constant MUL = 10 ** 18;

    //
    // State
    //

    // The IController instance in control of this project
    address public immutable controller;

    // The token to be listed for sale
    address public immutable token;

    // Total supply of {token} up for sale
    uint256 public immutable saleSupply;

    // fixed price of token, expressed in paymentToken amount
    uint256 public immutable rate;

    /// @inheritdoc IProject
    address public override(IProject) stakersPool;

    /// @inheritdoc IProject
    address public override(IProject) peoplesPool;

    // Project description, given at registration
    string public description;

    // has the project been approved by a Citizend manager
    bool public override(IProject) approvedByManager;

    // has the project been approved by the legal team
    bool public override(IProject) approvedByLegal;

    // Merkle root for contributions validation
    bytes32 public merkleRoot;

    error InvalidLeaf();

    constructor(
        string memory _description,
        address _token,
        uint256 _saleSupply,
        uint256 _rate,
        address _investmentToken,
        bytes32 _merkleRoot
    ) {
        controller = msg.sender;

        description = _description;
        token = _token;
        saleSupply = _saleSupply;
        rate = _rate;
        merkleRoot = _merkleRoot;

        uint256 stakersPoolSupply = saleSupply / 2;
        uint256 peoplesPoolSupply = saleSupply - stakersPoolSupply;

        stakersPool = address(
            new StakersPool(stakersPoolSupply, _investmentToken)
        );
        peoplesPool = address(
            new PeoplesPool(peoplesPoolSupply, _investmentToken)
        );
    }

    //
    // Modifiers
    //

    modifier onlyManager(address _account) {
        require(
            IController(controller).hasProjectManagerRole(msg.sender),
            "not a project manager"
        );
        _;
    }

    modifier onlyLegal(address _account) {
        require(
            IController(controller).hasLegalManagerRole(msg.sender),
            "not a legal manager"
        );
        _;
    }

    //
    // IProject
    //

    /// @inheritdoc IProject
    function invest(
        uint256 _peoplesAmount,
        uint256 _stakersAmount,
        bytes32[] calldata _merkleProof
    ) public override(IProject) {
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

    /// @inheritdoc IProject
    function approveByManager()
        public
        override(IProject)
        onlyManager(msg.sender)
    {
        require(!approvedByManager, "already approved by manager");

        approvedByManager = true;
    }

    /// @inheritdoc IProject
    function approveByLegal() public override(IProject) onlyLegal(msg.sender) {
        require(!approvedByLegal, "already approved by legal");

        approvedByLegal = true;
    }

    /// @inheritdoc IProject
    function hasTokens() public view override(IProject) returns (bool) {
        uint256 balance = IERC20(token).balanceOf(address(this));

        return balance >= saleSupply;
    }

    /// @inheritdoc IProject
    function isReadyForListing()
        external
        view
        override(IProject)
        returns (bool)
    {
        return hasTokens() && approvedByManager && approvedByLegal;
    }

    /// @inheritdoc IProject
    function investmentTokenToToken(
        uint256 _amount
    ) public view override(IProject) returns (uint256) {
        return (_amount * MUL) / rate;
    }

    /// @inheritdoc IProject
    function tokenToInvestmentToken(
        uint256 _amount
    ) public view override(IProject) returns (uint256) {
        return (_amount * rate) / MUL;
    }

    //
    // ERC165
    //

    /// @inheritdoc ERC165
    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC165) returns (bool) {
        return
            interfaceId == type(IProject).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
