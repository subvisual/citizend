// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 startRegistration = 1714953600;
        uint256 endRegistration = 1715212800;
        uint256 start = 1715299200;
        uint256 end = 1715385599;

        address USDC = 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238;

        Sale sale = new Sale(
            USDC,
            5 ether,
            start,
            end,
            1000000 ether,
            1000000 ether,
            2000000 ether,
            startRegistration,
            endRegistration
        );

        sale.setMinContribution(200 ether);

        vm.stopBroadcast();
    }
}
