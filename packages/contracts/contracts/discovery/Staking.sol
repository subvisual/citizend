// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IStaking} from "./IStaking.sol";

contract Staking is IStaking {
    using SafeERC20 for IERC20;

    //
    // Structs
    //

    struct Stake {
        uint256 total;
        uint256 bonded;
    }

    struct UnbondingList {
        mapping(uint256 => Unbonding) list;
        uint128 first;
        uint128 next;
    }

    struct Unbonding {
        uint256 amount;
        uint256 time;
    }

    //
    // Events
    //

    event StakeFunds(address indexed staker, uint256 amount);
    event Unbond(address indexed staker, uint256 amount);
    event Rebond(address indexed staker, uint256 amount);
    event Withdraw(address indexed staker, uint256 amount);

    //
    // Constants
    //

    uint256 public constant UNBONDING_PERIOD = 28 days;

    //
    // State
    //

    mapping(address => Stake) public stakes;
    mapping(address => UnbondingList) public unbondings;
    address public immutable token;

    constructor(address _token) {
        require(_token != address(0), "_token cannot be 0");

        token = _token;
    }

    /// @inheritdoc IStaking
    function stake(uint256 _amount) external override(IStaking) {
        stakes[msg.sender].total += _amount;
        stakes[msg.sender].bonded += _amount;

        IERC20(token).safeTransferFrom(msg.sender, address(this), _amount);

        emit StakeFunds(msg.sender, _amount);
    }

    /// @inheritdoc IStaking
    function unbond(uint256 amount) external override(IStaking) {
        Stake storage _stake = stakes[msg.sender];
        UnbondingList storage _unbondings = unbondings[msg.sender];

        require(_stake.bonded >= amount, "not enough funds");
        Unbonding memory unbonding = Unbonding(
            amount,
            block.timestamp + UNBONDING_PERIOD
        );

        _unbondings.list[_unbondings.next] = unbonding;
        _unbondings.next++;
        _stake.bonded -= amount;

        emit Unbond(msg.sender, amount);
    }

    /// @inheritdoc IStaking
    function rebond(uint256 amount) external override(IStaking) {
        Stake storage _stake = stakes[msg.sender];
        UnbondingList storage _unbondings = unbondings[msg.sender];

        require(
            (_stake.total - _stake.bonded) >= amount,
            "not enough unbonding funds"
        );
        uint256 toBeRebonded = amount;

        for (uint256 i = _unbondings.next - 1; i >= _unbondings.first; i--) {
            Unbonding storage unbonding = _unbondings.list[i];

            if (unbonding.amount >= toBeRebonded) {
                unbonding.amount -= toBeRebonded;
                _stake.bonded += toBeRebonded;
                break;
            } else {
                _stake.bonded += unbonding.amount;
                toBeRebonded -= unbonding.amount;
                delete _unbondings.list[i];
                _unbondings.next--;
            }
        }

        emit Rebond(msg.sender, amount);
    }

    /// @inheritdoc IStaking
    function withdraw(uint256 amount) external override(IStaking) {
        Stake storage _stake = stakes[msg.sender];
        UnbondingList storage _unbondings = unbondings[msg.sender];

        require(_stake.total >= amount, "not enough funds");
        uint256 withdrawableAmount;

        for (uint256 i = _unbondings.first; i < _unbondings.next; i++) {
            Unbonding storage unbonding = _unbondings.list[i];
            if (unbonding.time > block.timestamp) {
                break;
            }

            if (unbonding.amount >= amount) {
                unbonding.amount -= amount;
                withdrawableAmount += amount;
                break;
            } else {
                withdrawableAmount += unbonding.amount;
                delete _unbondings.list[i];
                _unbondings.first++;
            }
        }

        require(withdrawableAmount >= amount, "not enough unbonded funds");
        _stake.total -= amount;
        IERC20(token).transfer(msg.sender, withdrawableAmount);

        emit Withdraw(msg.sender, amount);
    }

    function withdrawableAmount(address _account)
        public
        view
        returns (uint256 amount)
    {
        UnbondingList storage _unbondings = unbondings[_account];
        uint256 amount;

        for (uint256 i = _unbondings.first; i < _unbondings.next; i++) {
            Unbonding storage unbonding = _unbondings.list[i];

            if (unbonding.time > block.timestamp) {
                return amount;
            }

            amount += _unbondings.list[i].amount;
        }
    }
}
