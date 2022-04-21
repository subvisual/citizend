// SPDX-License-Identifier: MIT
pragma solidity =0.8.12;

interface IPool {
    /// Similar to Sale.buy
    function invest(address _investor, uint256 _amount) external;

    /**
     * Sets the individual cap for investors, which will then be used when
     * claiming or refunding. Only callable by the cap validator role.
     *
     * @param _cap The cap per investor to be set, specified in the
     * project's token
     */
    function setIndividualCap(uint256 _cap) external;

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
