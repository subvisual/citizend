// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";

import {Citizend} from "contracts/token/Citizend.sol";
import {Sale} from "contracts/token/Sale.sol";

import {MockERC20} from "contracts/test/MockERC20.sol";

import {Controller} from "contracts/discovery/Controller.sol";
import {Staking} from "contracts/discovery/Staking.sol";
import {Project} from "contracts/discovery/Project.sol";

contract DevDeployScript is Script {
    address owner = address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
    address alice = address(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
    address bob = address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);

    address[] testAccounts;

    uint256 start;
    uint256 end;
    uint256 startRegistration;
    uint256 endRegistration;

    function setUp() public {
        testAccounts = new address[](3);
        testAccounts[0] = owner;
        testAccounts[1] = alice;
        testAccounts[2] = bob;
    }

    function run() public {
        vm.startBroadcast();

        bytes32 merkleRoot = 0xa5c09e2a9128afef7246a5900cfe02c4bd2cfcac8ac4286f0159a699c8455a49;

        startRegistration = 1714089600000;
        endRegistration = 1714694400000;

        start = vm.getBlockTimestamp();
        end = start + 60 * 60 * 24;

        MockERC20 token = new MockERC20("USDC", "USDC", 18);
        Citizend citizend = new Citizend(owner);
        Sale sale = new Sale(
            address(token),
            1 ** 18,
            start,
            end,
            100000000000000000000,
            1000000,
            2000000,
            startRegistration,
            endRegistration
        );

        bool sucesss = citizend.transfer(address(sale), 1000 ether);

        bool success = token.approve(address(sale), 1000 ether);
        require(success, "approve failed");

        for (uint256 i; i < testAccounts.length; i++) {
            address addr = testAccounts[i];
            token.mint(testAccounts[i], 1000 ether);
        }
        vm.stopBroadcast();
    }
}
