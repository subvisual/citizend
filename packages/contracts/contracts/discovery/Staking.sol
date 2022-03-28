// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IStaking} from "./IStaking.sol";

import "hardhat/console.sol";

contract Staking is IStaking {
    using SafeERC20 for IERC20;

    struct Stake {
        uint256 actualAmount;
        uint256 availableAmount;
        mapping(uint256 => Unbonding) unbondings;
        uint128 firstUnbonding;
        uint128 nextUnbonding;
    }

    struct Unbonding {
        uint256 amount;
        uint256 time;
    }

    mapping(address => Stake) public stakes;
    address public immutable token;

    uint256 public constant UNBONDING_PERIOD = 28 days;

    event StakeFunds(address indexed staker, uint256 amount);
    event Unbond(address indexed staker, uint256 amount);
    event Rebond(address indexed staker, uint256 amount);
    event Withdraw(address indexed staker, uint256 amount);

    constructor(address _token) {
        token = _token;
    }

    /// @inheritdoc IStaking
    function stake(uint256 _amount) external override(IStaking) {
        stakes[msg.sender].actualAmount += _amount;
        stakes[msg.sender].availableAmount += _amount;

        IERC20(token).safeTransferFrom(msg.sender, address(this), _amount);

        emit StakeFunds(msg.sender, _amount);
    }

    /// @inheritdoc IStaking
    function unbond(uint256 amount) external override(IStaking) {
        Stake storage _stake = stakes[msg.sender];
        require(_stake.availableAmount >= amount, "not enough funds");
        Unbonding memory unbonding = Unbonding(
            amount,
            block.timestamp + UNBONDING_PERIOD
        );

        _stake.unbondings[_stake.nextUnbonding] = unbonding;
        _stake.nextUnbonding += 1;
        _stake.availableAmount -= amount;

        emit Unbond(msg.sender, amount);
    }

    /// @inheritdoc IStaking
    function rebond(uint256 amount) external override(IStaking) {
        Stake storage _stake = stakes[msg.sender];
        require(
            (_stake.actualAmount - _stake.availableAmount) >= amount,
            "not enough unbonding funds"
        );
        uint256 toBeRebonded = amount;

        for (
            uint256 i = _stake.nextUnbonding - 1;
            i >= _stake.firstUnbonding;
            i--
        ) {
            Unbonding storage unbonding = _stake.unbondings[i];

            if (unbonding.amount >= toBeRebonded) {
                unbonding.amount -= toBeRebonded;
                _stake.availableAmount += toBeRebonded;
                break;
            } else {
                _stake.availableAmount += unbonding.amount;
                toBeRebonded -= unbonding.amount;
                delete _stake.unbondings[i];
                _stake.nextUnbonding -= 1;
            }
        }

        emit Rebond(msg.sender, amount);
    }

    /// @inheritdoc IStaking
    function withdraw(uint256 amount) external override(IStaking) {
        Stake storage _stake = stakes[msg.sender];
        require(_stake.actualAmount >= amount, "not enough funds");
        uint256 withdrawableAmount;

        for (uint256 i = _stake.firstUnbonding; i < _stake.nextUnbonding; i++) {
            Unbonding storage unbonding = _stake.unbondings[i];
            if (unbonding.time > block.timestamp) {
                break;
            }

            if (unbonding.amount >= amount) {
                unbonding.amount -= amount;
                withdrawableAmount += amount;
                break;
            } else {
                withdrawableAmount += unbonding.amount;
                delete _stake.unbondings[i];
                _stake.firstUnbonding += 1;
            }
        }

        require(withdrawableAmount >= amount, "not enough unbonded funds");
        _stake.actualAmount -= amount;
        IERC20(token).transfer(msg.sender, withdrawableAmount);

        emit Withdraw(msg.sender, amount);
    }
}
