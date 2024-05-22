// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 startRegistration = 1715342400;
        uint256 endRegistration = 1716292800;
        uint256 start = 1716378600;
        uint256 end = 1716638400;

        // address USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
        address USDC = 0x697485a9E004Da9bd9b3204dfB24efc288C04c2c;

        Sale sale = new Sale(
            USDC,
            0.2 * 1e6,
            start,
            end,
            2500000 ether,
            500000 * 1e6,
            1000000 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMinContribution(100 * 1e6);

        vm.stopBroadcast();
    }
}
