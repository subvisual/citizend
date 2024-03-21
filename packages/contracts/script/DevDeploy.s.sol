// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import {Script} from "lib/forge-std/src/Script.sol";

import {Citizend} from "contracts/token/Citizend.sol";
import {Staking} from "contracts/discovery/Staking.sol";
import {Project} from "contracts/discovery/Project.sol";

contract DevDeployScript is Script {
    address alice = address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
    address bob = address(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
    address carol = address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);

    address[] testAccounts;

    function setUp() public {
        testAccounts = new address[](3);
        testAccounts[0] = alice;
        testAccounts[1] = bob;
        testAccounts[2] = carol;
    }

    function run() public {
      vm.startBroadcast();

      Citizend citizend = new Citizend(alice);
      Staking staking = new Staking(address(citizend));

      bytes32 merkleRoot = 0xa5c09e2a9128afef7246a5900cfe02c4bd2cfcac8ac4286f0159a699c8455a49;
      Project project = new Project("token sale project", address(citizend), 1000, 1, address(0), merkleRoot);

      for (uint256 i; i < testAccounts.length; i++) {
        address addr = testAccounts[i];
        (bool success,) = addr.call{value: 10 ether}("");
        require(success, "transfer failed");
      }

      vm.stopBroadcast();
    }

}
