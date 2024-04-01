import type { ContractFactory } from "ethers";
import type {
  TestRisingTideWithCustomAmounts,
  TestRisingTideWithStaticAmounts,
} from "../../../src/types";

import { expect } from "chai";
import { ethers } from "hardhat";

import { expectCapValidation, applyInvestments } from "./helpers";

const RisingTideState = {
  NotSet: 0,
  Validating: 1,
  Finished: 2,
  Invalid: 3,
};

describe("RisingTide", () => {
  let WithCustomAmounts: ContractFactory;
  let WithStaticAmounts: ContractFactory;

  describe("Gitbook example", function () {
    let contract: TestRisingTideWithCustomAmounts;

    beforeEach(async () => {
      WithCustomAmounts = await ethers.getContractFactory(
        "TestRisingTideWithCustomAmounts",
      );
      contract = (await WithCustomAmounts.deploy(
        5000,
      )) as TestRisingTideWithCustomAmounts;
      await contract.deployed();
    });

    const gitbookExample = [
      500, 1000, 750, 500, 1000, 750, 200, 1000, 800, 1000,
    ];
    const cap = 542;

    it("calculates the gitbook example correctly", async function () {
      await applyInvestments(contract, gitbookExample);
      await expectCapValidation(contract, cap, true);
    });

    it("wouldn't work with a smaller cap", async function () {
      await applyInvestments(contract, gitbookExample);
      await expectCapValidation(contract, cap - 1, false);
    });

    it("wouldn't work with a larger cap", async function () {
      await applyInvestments(contract, gitbookExample);
      await expectCapValidation(contract, cap + 1, false);
    });
  });

  describe("small example", () => {
    let contract: TestRisingTideWithCustomAmounts;

    beforeEach(async () => {
      WithCustomAmounts = await ethers.getContractFactory(
        "TestRisingTideWithCustomAmounts",
      );
      contract = (await WithCustomAmounts.deploy(
        5000,
      )) as TestRisingTideWithCustomAmounts;
      await contract.deployed();
    });

    const example = [5000];
    const cap = 5000;

    it("runs without any extra calls", async () => {
      await applyInvestments(contract, example);

      const { extraCalls } = await expectCapValidation(contract, cap, true);

      expect(extraCalls).to.eq(0);
      expect(await contract.risingTideState()).to.equal(
        RisingTideState.Finished,
      );
    });

    it("ends in a failure state when given an invalid cap", async () => {
      await applyInvestments(contract, example);

      await expectCapValidation(contract, cap + 1, false);

      expect(await contract.risingTideState()).to.equal(
        RisingTideState.Invalid,
      );
    });
  });

  describe("large example", () => {
    let contract: TestRisingTideWithStaticAmounts;

    beforeEach(async () => {
      WithStaticAmounts = await ethers.getContractFactory(
        "TestRisingTideWithStaticAmounts",
      );
    });

    const cap = 1;

    it("needs some extra calls", async () => {
      contract = (await WithStaticAmounts.deploy(
        1000,
        cap,
        5000,
      )) as TestRisingTideWithStaticAmounts;
      await contract.deployed();

      const { extraCalls } = await expectCapValidation(
        contract,
        cap,
        true,
        500000,
      );

      expect(extraCalls).to.be.gte(1);

      expect(await contract.risingTideState()).to.equal(
        RisingTideState.Finished,
      );
    });

    it("ends in a failure state when given an invalid cap", async () => {
      contract = (await WithStaticAmounts.deploy(
        1000,
        cap,
        5000,
      )) as TestRisingTideWithStaticAmounts;
      await contract.deployed();

      await expectCapValidation(contract, cap + 1, false);

      expect(await contract.risingTideState()).to.equal(
        RisingTideState.Invalid,
      );
    });
  });
});
