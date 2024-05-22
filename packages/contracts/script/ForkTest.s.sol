// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "lib/forge-std/src/Script.sol";
import {Sale} from "contracts/token/Sale.sol";

import "forge-std/console.sol";

contract ForkTestScript is Script {
    bytes32[] merkleProof = new bytes32[](3);

    function run() public {
        vm.startBroadcast();

        address saleAddr = 0x132D291401f03c743520C8E4429194A885ff1192;
        Sale sale = Sale(saleAddr);

        console.log(sale.maxTarget());
        console.log(sale.minContribution());
        console.log(sale.maxTarget() / sale.minContribution());
        console.log(sale.paymentTokenToToken(sale.minContribution()));

        sale.setMerkleRoot(
            0xb2a5fa3b3e2f98fd1eec385ca41ee5ec339d6e0e10ef2e628b6dd1c05efd5d2f
        );

        merkleProof[
            0
        ] = 0x4522f57b6fe79305db47fb076fb0074084084e27b1401a6e2b82e4743ebcd22e;
        merkleProof[
            1
        ] = 0x44a01d943b6e8676e88542b2f512dc51dbd5479373b5317864fd63fbcc0bad32;
        merkleProof[
            2
        ] = 0xfc155ecc3cb89777797847582c94ff6c173964a88c99f2bd13551a83ec921266;

        sale.buy(500 ether, merkleProof);

        vm.stopBroadcast();
    }
}
