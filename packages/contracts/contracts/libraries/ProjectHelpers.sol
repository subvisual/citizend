// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import {IController} from "../discovery/IController.sol";

library ProjectHelpers {
    uint256 public constant MUL = 10**18;

    function paymentToTokenAmount(
        IController.Project calldata project,
        uint256 _paymentAmount
    ) internal pure returns (uint256) {
        return (_paymentAmount * MUL) / project.rate;
    }

    function tokenToPaymentAmount(
        IController.Project calldata project,
        uint256 _tokenAmount
    ) internal pure returns (uint256) {
        return (_tokenAmount * project.rate) / MUL;
    }
}
