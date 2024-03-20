pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import { Citizend } from "../../../contracts/token/Citizend.sol";
import { Project } from "../../../contracts/discovery/Project.sol";

contract ProjectTest is Test {

  Citizend citizend;
  Project project;

  address alice = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
  address bob = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
  address carol = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;

  mapping(address => bytes32[]) public proofs;

  function setUp() public {
    vm.startPrank(alice);

    bytes32 merkleRoot = 0x8e7ccfa471d15a7917e49017f94715d09cb940a6d5f088f516e16b0da32ff610;
    proofs[alice] = [
      bytes32(0xd3f793615f8d887594ece7ec035678d9b82bc492d243cdf3d4d54a007dfab520),
      bytes32(0x6c31f90dc2f54aacc0a676de83d706f1e0fdd99e31867640d8c87a6af1a1dd86)
    ];

    citizend = new Citizend(alice);
    project = new Project("test project", address(citizend), 1000, 1, address(0), merkleRoot);

    vm.stopPrank();
  }

  function testInvest() public {
    vm.startPrank(alice);

    project.invest(1,1,"ID", proofs[alice]);

    vm.stopPrank();
  }

  function testInvestShouldRevertWithInvalidCrendetial() public {
    vm.startPrank(alice);

    vm.expectRevert();
    project.invest(1,1,"NOID", proofs[alice]);

    vm.stopPrank();
  }
}
