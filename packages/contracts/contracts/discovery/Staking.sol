// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IStaking} from "./IStaking.sol";
import {DateTime} from "../libraries/DateTime.sol";

contract Staking is IStaking {
    using DateTime for uint256;
    using SafeERC20 for IERC20;

    struct Stake {
        uint256 actualAmount;
        uint256 availableAmount;
        Unbonding[] unbondings;
    }

    struct Unbonding {
        uint256 amount;
        uint256 time;
    }

    mapping(address => Stake) public stakes;
    address public immutable token;

    uint256 public constant UNBONDING_PERIOD_IN_DAYS = 28;

    constructor(address _token) {
        token = _token;
    }

    function stake(uint256 _amount) public {
        stakes[msg.sender].actualAmount += _amount;
        stakes[msg.sender].availableAmount += _amount;

        IERC20(token).safeTransferFrom(msg.sender, address(this), _amount);
    }

    function unbond(uint256 amount) public {
        Stake storage _stake = stakes[msg.sender];
        require(_stake.availableAmount >= amount, "not enough funds");
        Unbonding memory unbonding = Unbonding(
            amount,
            DateTime.addDays(block.timestamp, UNBONDING_PERIOD_IN_DAYS)
        );

        _stake.unbondings.push(unbonding);
        _stake.availableAmount -= amount;
    }

    function withdraw(uint256 amount) public {
        Stake storage _stake = stakes[msg.sender];
        require(_stake.actualAmount >= amount, "not enough funds");
        uint256 withdrawableAmount;
        uint256[] memory toBeRemovedUnbondings;

        for (uint256 i = 0; i < _stake.unbondings.length; i++) {
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
                toBeRemovedUnbondings[toBeRemovedUnbondings.length - 1] = i;
            }
        }

        _removeUnbondings(toBeRemovedUnbondings);

        require(withdrawableAmount >= amount, "not enough unbonded funds");
        _stake.actualAmount -= amount;
        IERC20(token).transfer(msg.sender, withdrawableAmount);
    }

    function getStake() public view returns (uint256) {
        return stakes[msg.sender].availableAmount;
    }

    function _removeUnbondings(uint256[] memory indexes) public {
        Unbonding[] storage unbondings = stakes[msg.sender].unbondings;

        for (uint256 i = 0; i < indexes.length; i++) {
            unbondings[i] = unbondings[unbondings.length - 1];
            unbondings.pop();
        }
    }
}
