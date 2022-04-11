// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

interface IPool {
    /// Similar to Sale.buy
    function buy(uint256 _amount) external;

    function buyInternal(uint256 _amount) external;

    /// Similar to Sale.refund
    function refund(address _to) external;

    /// Similar to Sale.refundAmount
    function refundAmount(address _to) external view returns (uint256 amount);

    /// Similar to Sale.uncappedAllocation
    function uncappedAllocation(address _to)
        external
        view
        returns (uint256 amount);

    /// Similar to Sale.allocation
    function allocation(address _to) external view returns (uint256 amount);
}
