pragma solidity ^0.8.20;

import "forge-std/Test.sol";

import {TestRisingTideWithCustomAmounts} from "../../../contracts/RisingTide/TestRisingTideWithCustomAmounts.sol";

contract RisingTideTest is Test {
    address owner = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    TestRisingTideWithCustomAmounts risingTide;

    uint256[] gitbookExample = [500, 1000, 750, 500, 1000, 750, 200, 1000, 800, 1000];
    uint256[] smallExample = [5000];
    uint256 cap = 542;

    enum RisingTideState {
      NotSet,
      Validating,
      Finished,
      Invalid
    }

    function setUp() public {
      risingTide = new TestRisingTideWithCustomAmounts(5000);
    }

    function applyInvestments(uint256[] storage investments) internal {
      for (uint256 i = 0; i < investments.length; i++) {
        risingTide.test_invest(i, investments[i]);
      }
    }

    function requireCapValidation(bool valid) internal {
      while(risingTide.risingTide_validating()) {
        risingTide.risingTide_validate();
      }

      require(risingTide.risingTide_isValidCap() == valid);
    }

    function testGitbookExampleCorrectly() public {
      applyInvestments(gitbookExample);

      risingTide.setCap(cap);

      requireCapValidation(true);

      require(uint8(risingTide.risingTideState()) == uint8(RisingTideState.Finished));
    }

    function testGitbookExampleFailsWithSmallerCap() public {
      applyInvestments(gitbookExample);

      risingTide.setCap(cap - 1);

      requireCapValidation(false);

      require(uint8(risingTide.risingTideState()) == uint8(RisingTideState.Invalid));
    }

    function testGitbookExampleFailsWithLargerCap() public {
      applyInvestments(gitbookExample);

      risingTide.setCap(cap + 1);

      requireCapValidation(false);

      require(uint8(risingTide.risingTideState()) == uint8(RisingTideState.Invalid));
    }

    function testSmallExampleCorrectly() public {
      applyInvestments(smallExample);

      risingTide.setCap(5000);

      requireCapValidation(true);

      require(uint8(risingTide.risingTideState()) == uint8(RisingTideState.Finished));
    }

    function testSmallExampleFails() public {
      applyInvestments(smallExample);

      risingTide.setCap(5001);

      requireCapValidation(false);

      require(uint8(risingTide.risingTideState()) == uint8(RisingTideState.Invalid));
    }
}
