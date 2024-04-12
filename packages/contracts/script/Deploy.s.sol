// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";

import {MockERC20} from "contracts/test/MockERC20.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 start = 1713744000000;
        uint256 end = 1713830400000;
        uint256 startRegistration = 1712930400000;
        uint256 endRegistration = 1713535200000;

        MockERC20 token = new MockERC20("USDC", "USDC", 18);
        Sale sale = new Sale(
            address(token),
            1 ** 18,
            start,
            end,
            1000,
            1000000,
            2000000,
            startRegistration,
            endRegistration
        );

        vm.stopBroadcast();
    }
}
