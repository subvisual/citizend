// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";

import {MockERC20} from "contracts/test/MockERC20.sol";
import {Sale} from "contracts/token/Sale.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();

        uint256 start = vm.unixTime();
        uint256 end = start + 60 * 60 * 24 * 7;
        uint256 startRegistration = 1714089600;
        uint256 endRegistration = 1714694400;

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
