// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.12;

interface IVesting {
    /**
     * Claims
     */
    function claim() external;

    /// @dev dsaasddasd
    function token() external view returns (address);

    /**
     * asd
     *
     * @dev asd
     *
     * @param to asd
     * @return asd
     */
    function totalVested(address to) external view returns (uint256);

    function claimable(address to) external view returns (uint256);

    function claimed(address to) external view returns (uint256);
}

abstract contract Vesting is IVesting {
    /**
     * asd
     *
     * @dev asd
     *
     * @param to asd
     * @return asd
     */
    function totalVested(address to) external view returns (uint256) {}
}
