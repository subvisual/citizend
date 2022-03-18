// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {ISale} from "./ISale.sol";
import {IVesting} from "./IVesting.sol";

import "hardhat/console.sol";

/// Citizend token sale contract
///
/// Users interact with this contract to deposit $aUSD in exchange for $CTND.
/// The contract should hold all $CTND tokens meant to be distributed in the public sale
///
/// The $CTND are vested on this same contract, according to the logic inherited from {Vesting}
contract Sale is ISale, AccessControl {
    using SafeERC20 for IERC20;

    uint256 public constant MUL = 10**18;
    bytes32 public constant CAP_VALIDATOR = keccak256("cap_validator");
    bytes32 public constant PRIVATE_SELLER = keccak256("private_seller");

    //
    // Events
    //

    /// Emitted for every public purchase
    event Purchase(address indexed from, uint256 amount);

    /// Emitted for every private purchase
    event PrivatePurchase(
        address indexed from,
        uint256 amount,
        uint16 cliffMonths
    );

    /// Emitted for every refund
    event Refunded(address indexed to, uint256 amount);

    //
    // State
    //

    /// See {ISale.token}
    address public immutable override(ISale) token;

    /// See {ISale.paymentToken}
    address public immutable override(ISale) paymentToken;

    /// Fixed price of token, expressed in paymentToken amount
    uint256 public immutable rate;

    /// Timestamp at which sale starts
    uint256 public immutable start;

    /// Timestamp at which sale ends
    uint256 public immutable end;

    /// See {ISale.vesting}
    address public override(ISale) vesting;

    /// Token allocations committed by each buyer
    mapping(address => uint256) public allocations;

    /// Maximum amount of tokens that each buyer can actually get
    uint256 public individualCap;

    /// @param _token Token being sold
    /// @param _paymentToken Token accepted as payment
    /// @param _rate token:paymentToken exchange rate, multiplied by 10e18
    /// @param _start Start timestamp
    /// @param _end End timestamp
    constructor(
        address _token,
        address _paymentToken,
        uint256 _rate,
        uint256 _start,
        uint256 _end
    ) {
        require(_rate > 0, "can't be zero");
        require(_token != address(0), "can't be zero");
        require(_paymentToken != address(0), "can't be zero");
        require(_start > 0, "can't be zero");
        require(_end > _start, "end must be after start");

        token = _token;
        paymentToken = _paymentToken;
        rate = _rate;
        start = _start;
        end = _end;

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// Ensures we're running during the set sale period
    modifier inSale() {
        require(
            block.timestamp >= start && block.timestamp <= end,
            "no active sale"
        );
        _;
    }

    //
    // ISale
    //

    /// @inheritdoc ISale
    function paymentTokenToToken(uint256 _paymentAmount)
        public
        view
        override(ISale)
        returns (uint256)
    {
        require(_paymentAmount > 0, "can't be zero");

        return (_paymentAmount * MUL) / rate;
    }

    /// @inheritdoc ISale
    function tokenToPaymentToken(uint256 _tokenAmount)
        public
        view
        override(ISale)
        returns (uint256)
    {
        require(_tokenAmount > 0, "can't be zero");

        return (_tokenAmount * rate) / MUL;
    }

    /// @inheritdoc ISale
    function buy(uint256 _paymentAmount) external override(ISale) inSale {
        require(_paymentAmount > 0, "can't be zero");

        IVesting(vesting).createPublicSaleVest(msg.sender);
        allocations[msg.sender] += paymentTokenToToken(_paymentAmount);

        IERC20(paymentToken).safeTransferFrom(
            msg.sender,
            address(this),
            _paymentAmount
        );

        emit Purchase(msg.sender, _paymentAmount);
    }

    /// @inheritdoc ISale
    function privateBuy(
        address _buyer,
        uint256 _paymentAmount,
        uint16 _cliffMonths
    ) external override(ISale) onlyRole(PRIVATE_SELLER) {
        require(_paymentAmount > 0, "can't be zero");

        IVesting(vesting).createPrivateSaleVest(
            _buyer,
            paymentTokenToToken(_paymentAmount),
            _cliffMonths
        );
        allocations[_buyer] += paymentTokenToToken(_paymentAmount);

        IERC20(paymentToken).safeTransferFrom(
            _buyer,
            address(this),
            _paymentAmount
        );

        emit PrivatePurchase(_buyer, _paymentAmount, _cliffMonths);
    }

    /// @inheritdoc ISale
    function refund(address to) external override(ISale) {
        uint256 refundableAmount = refundable(to);
        require(refundableAmount > 0, "No tokens to refund");

        IERC20(paymentToken).transfer(
            to,
            tokenToPaymentToken(refundableAmount)
        );

        emit Refunded(to, refundableAmount);
    }

    /// @inheritdoc ISale
    function refundable(address to)
        public
        view
        override(ISale)
        returns (uint256)
    {
        uint256 totalAmount = allocations[to];

        if (individualCap == 0) {
            return 0;
        }

        if (totalAmount <= individualCap) {
            return 0;
        } else {
            return totalAmount - individualCap;
        }
    }

    /// @inheritdoc ISale
    function getAllocations(address _who)
        public
        view
        override(ISale)
        returns (uint256)
    {
        return _applyCap(allocations[_who]);
    }

    /// @inheritdoc ISale
    function getUncappedAllocations(address _who)
        public
        view
        override(ISale)
        returns (uint256)
    {
        return allocations[_who];
    }

    //
    // Admin API
    //

    /// Sets the vesting address
    /// @dev Can only be called once
    ///
    /// @param _vesting new vesting address
    function setVesting(address _vesting)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(vesting == address(0), "already set the vesting address");
        require(_vesting != address(0), "vesting address can't be zero");

        vesting = _vesting;
    }

    /// Sets the individual cap
    /// @dev Can only be called once
    ///
    /// @param _cap new individual cap
    function setIndividualCap(uint256 _cap) external onlyRole(CAP_VALIDATOR) {
        require(_cap > 0, "Cap must be greater than 0");
        individualCap = _cap;
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
        if (individualCap == 0) {
            return 0;
        }

        if (_amount > individualCap) {
            return individualCap;
        }

        return _amount;
    }
}
