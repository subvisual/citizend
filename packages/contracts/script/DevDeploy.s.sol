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
    address alice = address(0x6E336729686A9964dD5D0fDDD57B30d057144bfb);
    address bob = address(0x7a6Da886dA5C7a3a4aa7eD187b2253C20FE58af7);

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

        bytes32 merkleRoot = 0xfcad8757f2b82be748959d6be658a7c0accde2ee0efc8fce800bb088f373539b;

        startRegistration = 1715342400;
        endRegistration = 1715860800;
        start = 1761853769;
        end = 1761940159;

        MockERC20 paymentToken = new MockERC20("USDC", "USDC", 6);
        Sale sale = new Sale(
            address(paymentToken),
            0.02 * 1e6,
            start,
            end,
            25000000 ether,
            500000 * 1e6,
            2500000 * 1e6,
            startRegistration,
            endRegistration
        );

        sale.setMerkleRoot(merkleRoot);
        sale.setMinContribution(200 * 1e6);

        bool success = paymentToken.approve(address(sale), 1000 ether);
        require(success, "approve failed");

        for (uint256 i; i < testAccounts.length; i++) {
            paymentToken.mint(testAccounts[i], 1000 ether);
        }

        paymentToken.mint(address(0x5C3099098BCaF0E1F94b16f1c516127b99535be2), 1000 ether);
        vm.stopBroadcast();
    }
}
