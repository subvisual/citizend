// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

interface IProject {
    function isReadyForListing() external view returns (bool);

    function stakersPool() external view returns (address);

    function peoplesPool() external view returns (address);

    function invest(uint256 _peoplesAmount, uint256 _stakersAmount) 
}
