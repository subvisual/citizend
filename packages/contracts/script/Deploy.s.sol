// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";

import {MockERC20} from "contracts/test/MockERC20.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint start = vm.unixTime();
        uint end = start + 60 * 60 * 24 * 7;

        MockERC20 token = new MockERC20("USDC", "USDC", 18);
        Sale sale = new Sale(
            address(token),
            1 ** 18,
            start,
            end,
            1000,
            1000000,
            2000000
        );

        vm.stopBroadcast();
    }
}
