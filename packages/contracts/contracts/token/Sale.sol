// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {ISale} from "./ISale.sol";
import {IVesting} from "./Vesting.sol";

/// Citizend token sale contract
///
/// Users interact with this contract to deposit $aUSD in exchange for $CTND.
/// The contract should hold all $CTND tokens meant to be distributed in the public sale
///
/// The $CTND are vested on this same contract, according to the logic inherited from {Vesting}
contract Sale is ISale, AccessControl {
    using SafeERC20 for IERC20;

    uint256 public constant MUL = 10**18;

    //
    // Events
    //

    /// Emitted for every purchase
    event Purchase(address indexed from, uint256 amount);

    //
    // State
    //

    /// Seee {ISale.token}
    address public immutable override(ISale) token;

    /// Seee {ISale.paymentToken}
    address public immutable override(ISale) paymentToken;

    /// Fixed price of token, expressed in paymentToken amount
    uint256 public immutable rate;

    /// Timestamp at which sale starts
    uint256 public immutable start;

    /// Timestamp at which sale ends
    uint256 public immutable end;

    /// Seee {ISale.vesting}
    address public override(ISale) vesting;

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
    function calculateAmount(uint256 _paymentAmount)
        external
        view
        override(ISale)
        returns (uint256)
    {
        require(_paymentAmount > 0, "can't be zero");

        return (_paymentAmount * MUL) / rate;
    }

    /// @inheritdoc ISale
    function buy(uint256 _paymentAmount) external override(ISale) inSale {
        require(_paymentAmount > 0, "can't be zero");

        IERC20(paymentToken).safeTransferFrom(
            msg.sender,
            address(this),
            _paymentAmount
        );

        // vesting.registerNewPublicVesting(msg.sender, 1);

        emit Purchase(msg.sender, _paymentAmount);
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
}
