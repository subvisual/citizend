// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

contract BatchRefundScript is Script {
    Sale sale = Sale(0xFFBaaDbc0cf51a92F357528140d272885151442e);

    address[] investors = [
        0x7a6Da886dA5C7a3a4aa7eD187b2253C20FE58af7,
        0xeF1d9b810e3F7c59796F694e82Ff5872dCb5E498,
        0x5C3099098BCaF0E1F94b16f1c516127b99535be2,
        0x6E336729686A9964dD5D0fDDD57B30d057144bfb,
        0x8fDD962D2d7979F78Aa103E059C1F1a3D610167d
    ];

    function setUp() public {
    }

    function run() public {
        vm.startBroadcast();

        for (uint256 i = 0; i < investors.length; i++) {
            address investor = investors[i];
            uint256 refundAmount = sale.refundAmount(investor);
            console2.log(investor, refundAmount);
            if (refundAmount > 0) {
                console2.log("\tRefunding...");
                sale.refund(investor);
            }
        }

        vm.stopBroadcast();
    }
}
