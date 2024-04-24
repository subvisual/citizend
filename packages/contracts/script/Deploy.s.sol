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

        // MockERC20 token = new MockERC20("USDC", "USDC", 18);

        bytes32 merkleRoot = 0x56dc9b99234caefd2202e000b075dd65d221f7e17d06f7e083a07907a7b7548a;
        address token = 0x1fD476786D370219F94fF2421cD7f5D7C8CA86c0;

        Sale sale = new Sale(
            token,
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
