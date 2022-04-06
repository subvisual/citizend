// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface IProject {
    function isReadyForListing() external view returns (bool);
}
