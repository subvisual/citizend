// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 startRegistration = 1715342400;
        uint256 endRegistration = 1715860800;
        uint256 start = 1715947200;
        uint256 end = 1716033600;

        address USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

        Sale sale = new Sale(
            USDC,
            0.2 ether,
            start,
            end,
            2500000 ether,
            500000 ether,
            1000000 ether,
            startRegistration,
            endRegistration
        );

        sale.setMinContribution(500 ether);

        vm.stopBroadcast();
    }
}
