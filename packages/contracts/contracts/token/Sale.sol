// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import {ISale} from "./ISale.sol";
import {RisingTide} from "../RisingTide/RisingTide.sol";
import {FractalRegistry} from "../fractal_registry/FractalRegistry.sol";

import "hardhat/console.sol";

/// Citizend token sale contract
///
/// Users interact with this contract to deposit $aUSD in exchange for $CTND.
/// The contract should hold all $CTND tokens meant to be distributed in the public sale
contract Sale is ISale, RisingTide, ERC165, AccessControl, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct Account {
        uint256 uncappedAllocation;
        bool refunded;
    }

    //
    // Constants
    //

    uint256 public constant MUL = 10**18;
    bytes32 public constant CAP_VALIDATOR_ROLE =
        keccak256("CAP_VALIDATOR_ROLE");

    //
    // Events
    //

    /// Emitted for every public purchase
    event Purchase(
        address indexed from,
        uint256 paymentTokenAmount,
        uint256 tokenAmount
    );

    /// Emitted for every refund given
    event Refund(address indexed to, uint256 paymentTokenAmount);

    //
    // State
    //

    /// See {ISale.paymentToken}
    address public immutable override(ISale) paymentToken;

    /// Fixed price of token, expressed in paymentToken amount
    uint256 public immutable rate;

    /// Timestamp at which sale starts
    uint256 public immutable start;

    /// Timestamp at which sale ends
    uint256 public immutable end;

    uint256 public immutable totalTokensForSale;

    /// Token allocations committed by each buyer
    mapping(address => Account) accounts;

    /// incrementing index => investor address
    mapping(uint256 => address) investorByIndex;

    /// total unique investors
    uint256 public _investorCount;

    /// How many tokens have been allocated, before cap calculation
    uint256 public totalUncappedAllocations;

    /// Fractal Registry address
    address public immutable registry;

    /// Fractal Id associated with the address to be used in this sale
    mapping(bytes32 => address) public fractalIdToAddress;

    /// @param _paymentToken Token accepted as payment
    /// @param _rate token:paymentToken exchange rate, multiplied by 10e18
    /// @param _start Start timestamp
    /// @param _end End timestamp
    constructor(
        address _paymentToken,
        uint256 _rate,
        uint256 _start,
        uint256 _end,
        uint256 _totalTokensForSale,
        address _registry
    ) {
        require(_rate > 0, "can't be zero");
        require(_paymentToken != address(0), "can't be zero");
        require(_start > 0, "can't be zero");
        require(_end > _start, "end must be after start");
        require(_totalTokensForSale > 0, "total cannot be 0");

        paymentToken = _paymentToken;
        rate = _rate;
        start = _start;
        end = _end;
        totalTokensForSale = _totalTokensForSale;
        registry = _registry;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(CAP_VALIDATOR_ROLE, msg.sender);
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

    function withdraw()
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
        capCalculated
        nonReentrant
    {
        require(block.timestamp > end, "sale not ended yet");

        uint256 total = IERC20(paymentToken).balanceOf(address(this));
        IERC20(paymentToken).transfer(msg.sender, total);
    }

    /// @inheritdoc ISale
    function paymentTokenToToken(uint256 _paymentAmount)
        public
        view
        override(ISale)
        returns (uint256)
    {
        return (_paymentAmount * MUL) / rate;
    }

    /// @inheritdoc ISale
    function tokenToPaymentToken(uint256 _tokenAmount)
        public
        view
        override(ISale)
        returns (uint256)
    {
        return (_tokenAmount * rate) / MUL;
    }

    /// @inheritdoc ISale
    function buy(uint256 _paymentAmount)
        external
        override(ISale)
        inSale
        nonReentrant
    {
        require(_paymentAmount > 0, "can't be zero");
        bytes32 fractalId = FractalRegistry(registry).getFractalId(msg.sender);
        require(fractalId != 0, "not registered");
        require(
            fractalIdToAddress[fractalId] == address(0) ||
                fractalIdToAddress[fractalId] == msg.sender,
            "id registered to another address"
        );

        uint256 tokenAmount = paymentTokenToToken(_paymentAmount);
        uint256 currentAllocation = accounts[msg.sender].uncappedAllocation;

        if (currentAllocation == 0) {
            investorByIndex[_investorCount] = msg.sender;
            _investorCount++;
        }

        accounts[msg.sender].uncappedAllocation += tokenAmount;
        totalUncappedAllocations += tokenAmount;
        fractalIdToAddress[fractalId] = msg.sender;

        emit Purchase(msg.sender, _paymentAmount, tokenAmount);

        IERC20(paymentToken).safeTransferFrom(
            msg.sender,
            address(this),
            _paymentAmount
        );
    }

    /// @inheritdoc ISale
    function refund(address to)
        external
        override(ISale)
        capCalculated
        nonReentrant
    {
        Account storage account = accounts[to];
        require(!account.refunded, "already refunded");

        uint256 amount = refundAmount(to);
        require(amount > 0, "No tokens to refund");

        accounts[to].refunded = true;
        IERC20(paymentToken).transfer(to, amount);

        emit Refund(to, amount);
    }

    /// @inheritdoc ISale
    function refundAmount(address to)
        public
        view
        override(ISale)
        returns (uint256)
    {
        if (individualCap == 0) {
            return 0;
        }

        uint256 uncapped = accounts[to].uncappedAllocation;
        uint256 capped = allocation(to);

        return tokenToPaymentToken(uncapped - capped);
    }

    function uncappedAllocation(address _to)
        public
        view
        override(ISale)
        returns (uint256)
    {
        return accounts[_to].uncappedAllocation;
    }

    /// @inheritdoc ISale
    function allocation(address _to)
        public
        view
        override(ISale)
        returns (uint256)
    {
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
    function investorAmountAt(uint256 i)
        public
        view
        override(RisingTide)
        returns (uint256)
    {
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

    /// Sets the individual cap
    /// @dev Can only be called once
    ///
    /// @param _cap new individual cap
    function setIndividualCap(uint256 _cap)
        external
        onlyRole(CAP_VALIDATOR_ROLE)
        afterSale
        nonReentrant
    {
        _risingTide_setCap(_cap);
    }

    //
    // ERC165
    //
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, AccessControl)
        returns (bool)
    {
        return
            interfaceId == type(ISale).interfaceId ||
            super.supportsInterface(interfaceId);
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
        if (_amount >= individualCap) {
            return individualCap;
        }

        return _amount;
    }
}
