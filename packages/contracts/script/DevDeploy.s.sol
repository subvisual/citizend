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

        startRegistration = 1715342400;
        endRegistration = 1715860800;
        start = 1718787833;
        end = 1719230400;

        MockERC20 paymentToken = new MockERC20("USDC", "USDC", 6);
        Sale sale = new Sale(
            address(paymentToken),
            0.2 ether,
            start,
            end,
            250000 ether,
            1250000 ether,
            50000 * 1e6,
            250000 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setMinContribution(100 * 1e6);

        bool success = paymentToken.approve(address(sale), 1000 * 1e6);
        require(success, "approve failed");

        for (uint256 i; i < testAccounts.length; i++) {
            paymentToken.mint(testAccounts[i], 1000 * 1e6);
        }
        vm.stopBroadcast();
    }
}
