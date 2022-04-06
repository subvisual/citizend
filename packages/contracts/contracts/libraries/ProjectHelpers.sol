// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

library ProjectHelpers {
    uint256 public constant MUL = 10**18;

    // more descriptive name
    function paymentToTokenAmount(uint256 _rate, uint256 _paymentAmount)
        internal
        pure
        returns (uint256)
    {
        return (_paymentAmount * MUL) / _rate;
    }

    // more descriptive name
    function tokenToPaymentAmount(uint256 _rate, uint256 _tokenAmount)
        internal
        pure
        returns (uint256)
    {
        return (_tokenAmount * _rate) / MUL;
    }
}
