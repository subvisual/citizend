// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IProject {
    /// Approval function from an eligible project manager
    function approveByManager() external;

    /// One of the criteria for listing: has the project been approved by a project manager?
    function approvedByManager() external view returns (bool);

    /// Approval function from the legal team
    function approveByLegal() external;

    /// One of the criteria for listing: has the project been approved by the legal team?
    function approvedByLegal() external view returns (bool);

    /// One of the criteria for listing: does the project contract hold the sale
    /// supply already?
    function hasTokens() external view returns (bool);

    /// True if project fulfills all criteria to be included in an upcoming batch
    function isReadyForListing() external view returns (bool);

    function stakersPool() external view returns (address);

    function peoplesPool() external view returns (address);

    function invest(
        uint256 _peoplesAmount,
        uint256 _stakersAmount,
        bytes32[] calldata _merkleProof
    ) external;

    function investmentTokenToToken(
        uint256 _amount
    ) external view returns (uint256);

    function tokenToInvestmentToken(
        uint256 _amount
    ) external view returns (uint256);
}
