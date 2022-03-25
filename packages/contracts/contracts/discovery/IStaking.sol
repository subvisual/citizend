// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface IStaking {
    function stake(uint256 amount) external;

    function unbond(uint256 amount) external;

    function withdraw(uint256 amount) external;

    function getStake() external view returns (uint256);
}
