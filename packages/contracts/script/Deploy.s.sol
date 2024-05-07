// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 startRegistration = 1714953600;
        uint256 endRegistration = 1715212800;
        uint256 start = 1714660299;
        uint256 end = 1715342400;

        address USDC = 0x1fD476786D370219F94fF2421cD7f5D7C8CA86c0;

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

        sale.setMinContribution(200 ether);

        vm.stopBroadcast();
    }
}
