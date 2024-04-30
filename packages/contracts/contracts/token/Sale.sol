// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import {ISale} from "./ISale.sol";
import {RisingTide} from "../RisingTide/RisingTide.sol";
import {Math} from "../libraries/Math.sol";

/// Users interact with this contract to deposit $USDC in exchange for $CTND.
/// The contract should hold all $CTND tokens meant to be distributed in the public sale
contract Sale is ISale, RisingTide, ERC165, AccessControl, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Math for uint256;

    struct Account {
        uint256 uncappedAllocation;
        bool refunded;
    }

    //
    // Constants
    //

    bytes32 public constant CAP_VALIDATOR_ROLE =
        keccak256("CAP_VALIDATOR_ROLE");

    // multiplier used for rate conversions
    uint256 constant MUL = 1 ether;

    //
    // Events
    //

    /// Emitted for every public purchase
    event Purchase(
        address indexed from,
        uint256 paymentTokenAmount,
        uint256 tokenAmount
    );

    /// Emitted for every claim
    event Claim(address indexed to, uint256 tokenAmount);

    /// Emitted for every refund given
    event Refund(address indexed to, uint256 paymentTokenAmount);

    /// Emitted every time someone withdraws their funds
    event Withdraw(address indexed to, uint256 paymentTokenAmount);

    //
    // State
    //

    /// See {ISale.token}
    address public override(ISale) token;

    /// See {ISale.paymentToken}
    address public immutable override(ISale) paymentToken;

    /// Fixed price of token, expressed in paymentToken amount
    uint256 public immutable rate;

    /// Minimum amount per contribution, expressed in paymentToken amount
    uint256 public minContribution;

    /// Maximum amount per contribution, expressed in paymentToken amount
    uint256 public maxContribution;

    /// Timestamp at which sale starts
    uint256 public start;

    /// Timestamp at which sale ends
    uint256 public end;

    /// Timestamp at which registration period starts
    uint256 public startRegistration;

    /// Timestamp at which registration period ends
    uint256 public endRegistration;

    /// Total tokens available for sale
    uint256 public immutable totalTokensForSale;

    /// Minimum amount to be raised
    uint256 public minTarget;

    /// Maximum amount to be raised
    uint256 public maxTarget;

    /// Token allocations committed by each buyer
    mapping(address => Account) accounts;

    /// incrementing index => investor address
    mapping(uint256 => address) investorByIndex;

    /// total unique investors
    uint256 _investorCount;

    /// How many tokens have been allocated, before cap calculation
    uint256 public totalUncappedAllocations;

    /// Did the admins already withdraw all aUSD from sales
    bool public withdrawn;

    // Merkle root for contributions validation
    bytes32 public merkleRoot;

    error MaxTargetReached();
    error InvalidLeaf();

    /// @param _paymentToken Token accepted as payment
    /// @param _rate token:paymentToken exchange rate, multiplied by 10e18
    /// @param _start Start timestamp
    /// @param _end End timestamp
    /// @param _totalTokensForSale Total amount of tokens for sale
    /// @param _minTarget Minimum target for the sale
    /// @param _maxTarget Maximum target for the sale
    /// @param _startRegistration Registration period start timestamp
    /// @param _endRegistration Registration period end timestamp
    constructor(
        address _paymentToken,
        uint256 _rate,
        uint256 _start,
        uint256 _end,
        uint256 _totalTokensForSale,
        uint256 _minTarget,
        uint256 _maxTarget,
        uint256 _startRegistration,
        uint256 _endRegistration
    ) {
        require(_paymentToken != address(0), "can't be zero");
        require(_rate > 0, "can't be zero");
        require(_start > 0, "can't be zero");
        require(_end > _start, "end must be after start");
        require(_totalTokensForSale > 0, "total cannot be 0");
        require(_minTarget > 0, "_minTarget cannot be 0");
        require(
            _maxTarget > _minTarget,
            "_maxTarget cannot be lower than _minTarget"
        );
        require(
            _endRegistration > _startRegistration,
            "_endRegistration cannot be lower than _startRegistration"
        );

        paymentToken = _paymentToken;
        rate = _rate;
        start = _start;
        end = _end;
        totalTokensForSale = _totalTokensForSale;
        minTarget = _minTarget;
        maxTarget = _maxTarget;
        startRegistration = _startRegistration;
        endRegistration = _endRegistration;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(CAP_VALIDATOR_ROLE, msg.sender);
    }

    modifier beforeSale() {
        require(block.timestamp <= start, "sale active");
        _;
    }

    /// Ensures we're running during the set sale period
    modifier inSale() {
        require(
            block.timestamp >= start && block.timestamp <= end,
            "sale not active"
        );
        _;
    }

    modifier afterSale() {
        require(block.timestamp > end, "sale not over");
        _;
    }

    /// Ensures the individual cap is already calculated
    modifier capCalculated() {
        require(risingTide_isValidCap(), "cap not yet set");
        _;
    }

    //
    // ISale
    //

    /// @inheritdoc ISale
    function withdraw()
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
        capCalculated
        nonReentrant
    {
        require(block.timestamp > end, "sale not ended yet");
        require(!withdrawn, "already withdrawn");

        withdrawn = true;

        uint256 allocatedAmount = allocated();
        uint256 paymentTokenAmount = tokenToPaymentToken(allocatedAmount);

        emit Withdraw(msg.sender, paymentTokenAmount);

        IERC20(paymentToken).transfer(msg.sender, paymentTokenAmount);
    }

    /// @inheritdoc ISale
    function paymentTokenToToken(
        uint256 _paymentAmount
    ) public view override(ISale) returns (uint256) {
        return (_paymentAmount * MUL) / rate;
    }

    /// @inheritdoc ISale
    function tokenToPaymentToken(
        uint256 _tokenAmount
    ) public view override(ISale) returns (uint256) {
        return (_tokenAmount * rate) / MUL;
    }

    /// @inheritdoc ISale
    function buy(
        uint256 _amount,
        bytes32[] calldata _merkleProof
    ) external override(ISale) inSale nonReentrant {
        if (_investorCount >= minTarget / minContribution)
            revert MaxTargetReached();

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        bool isValidLeaf = MerkleProof.verify(_merkleProof, merkleRoot, leaf);
        if (!isValidLeaf) revert InvalidLeaf();

        require(_amount >= minContribution, "can't be below minimum");

        uint256 paymentAmount = tokenToPaymentToken(_amount);
        require(paymentAmount > 0, "can't be zero");

        uint256 currentAllocation = accounts[msg.sender].uncappedAllocation;

        if (currentAllocation == 0) {
            investorByIndex[_investorCount] = msg.sender;
            _investorCount++;
        }

        accounts[msg.sender].uncappedAllocation += _amount;
        totalUncappedAllocations += _amount;

        emit Purchase(msg.sender, paymentAmount, _amount);

        IERC20(paymentToken).safeTransferFrom(
            msg.sender,
            address(this),
            paymentAmount
        );
    }

    /// @inheritdoc ISale
    function refund(
        address to
    ) public override(ISale) capCalculated nonReentrant {
        Account storage account = accounts[to];
        require(!account.refunded, "already refunded");

        uint256 amount = refundAmount(to);
        require(amount > 0, "No tokens to refund");

        accounts[to].refunded = true;
        IERC20(paymentToken).transfer(to, amount);

        emit Refund(to, amount);
    }

    /// @inheritdoc ISale
    function refundAmount(
        address to
    ) public view override(ISale) returns (uint256) {
        if (!risingTide_isValidCap()) {
            return 0;
        }

        Account memory account = accounts[to];
        if (account.refunded) {
            return 0;
        }

        uint256 uncapped = account.uncappedAllocation;
        uint256 capped = allocation(to);

        return tokenToPaymentToken(uncapped - capped);
    }

    function uncappedAllocation(
        address _to
    ) public view override(ISale) returns (uint256) {
        return accounts[_to].uncappedAllocation;
    }

    /// @inheritdoc ISale
    function allocation(
        address _to
    ) public view override(ISale) returns (uint256) {
        if (totalUncappedAllocations < minTarget) {
            return 0;
        }

        return _applyCap(uncappedAllocation(_to));
    }

    //
    // RisingTide
    //

    /// @inheritdoc RisingTide
    function investorCount()
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return _investorCount;
    }

    /// @inheritdoc RisingTide
    function investorAmountAt(
        uint256 i
    ) public view override(RisingTide) returns (uint256) {
        address addr = investorByIndex[i];
        Account storage account = accounts[addr];

        return account.uncappedAllocation;
    }

    /// @inheritdoc RisingTide
    function risingTide_totalAllocatedUncapped()
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return totalUncappedAllocations;
    }

    /// @inheritdoc RisingTide
    function risingTide_totalCap()
        public
        view
        override(RisingTide)
        returns (uint256)
    {
        return totalTokensForSale;
    }

    //
    // Admin API
    //

    function setToken(
        address _token
    ) external onlyRole(DEFAULT_ADMIN_ROLE) beforeSale nonReentrant {
        require(_token != address(0), "can't be zero");
        token = _token;
    }

    function setMerkleRoot(
        bytes32 _merkleRoot
    ) external onlyRole(DEFAULT_ADMIN_ROLE) beforeSale nonReentrant {
        merkleRoot = _merkleRoot;
    }

    function setStart(
        uint256 _start
    ) external onlyRole(DEFAULT_ADMIN_ROLE) beforeSale nonReentrant {
        start = _start;
    }

    function setEnd(
        uint256 _end
    ) external onlyRole(DEFAULT_ADMIN_ROLE) beforeSale nonReentrant {
        end = _end;
    }

    function setMinTarget(
        uint256 _minTarget
    ) external onlyRole(DEFAULT_ADMIN_ROLE) beforeSale nonReentrant {
        minTarget = _minTarget;
    }

    function setMaxTarget(
        uint256 _maxTarget
    ) external onlyRole(DEFAULT_ADMIN_ROLE) beforeSale nonReentrant {
        maxTarget = _maxTarget;
    }

    /// Sets the individual cap
    /// @dev Can only be called once
    ///
    /// @param _cap new individual cap
    function setIndividualCap(
        uint256 _cap
    ) external onlyRole(CAP_VALIDATOR_ROLE) afterSale nonReentrant {
        _risingTide_setCap(_cap);
    }

    /// Sets the minimum contribution
    /// @param _minContribution new minimum contribution
    function setMinContribution(
        uint256 _minContribution
    ) external onlyRole(DEFAULT_ADMIN_ROLE) nonReentrant {
        minContribution = _minContribution;
    }

    //
    // ERC165
    //

    /// @inheritdoc ERC165
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC165, AccessControl) returns (bool) {
        return
            interfaceId == type(ISale).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    //
    // Other public APIs
    //

    /// @return the amount of tokens already allocated
    function allocated() public view returns (uint256) {
        return Math.min(totalUncappedAllocations, totalTokensForSale);
    }

    //
    // Internal API
    //

    /**
     * Applies the individual cap to the given amount
     *
     * @param _amount amount to apply cap to
     * @return capped amount
     */
    function _applyCap(uint256 _amount) internal view returns (uint256) {
        if (!risingTide_isValidCap()) {
            return 0;
        }

        if (_amount >= individualCap) {
            return individualCap;
        }

        return _amount;
    }
}
