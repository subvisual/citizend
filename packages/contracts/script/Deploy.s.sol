// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";

import {MockERC20} from "contracts/test/MockERC20.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 start = 1713866628;
        uint256 end = 1714780799;
        uint256 startRegistration = 1713866628;
        uint256 endRegistration = 1714780799;

        MockERC20 token = new MockERC20("USDC", "USDC", 18);

        bytes32 merkleRoot = 0x8f01d3093ac8686620cade48849cf16f17ebf59fa84357bd5512541e33806424;

        Sale sale = new Sale(
            address(token),
            5 ether,
            start,
            end,
            1000,
            1000000,
            2000000,
            startRegistration,
            endRegistration,
            merkleRoot
        );

        vm.stopBroadcast();
    }
}
