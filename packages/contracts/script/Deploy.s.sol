// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 startRegistration = 1719230400;
        uint256 endRegistration = 1719230401;
        uint256 start = 1719403200;
        uint256 end = 1721995200;

        address USDC = 0xaf88d065e77c8cC2239327C5EDb3A432268e5831;

        Sale sale = new Sale(
            USDC,
            0.2 * 1e6,
            start,
            end,
            250000 ether,
            1250000 ether,
            50000 * 1e6,
            250000 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMinContribution(100 * 1e6);

        vm.stopBroadcast();
    }
}
