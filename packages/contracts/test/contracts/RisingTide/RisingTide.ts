import type { ContractFactory } from "ethers";
import type { TestRisingTideWithCustomAmounts } from "../../../src/types";

import { ethers } from "hardhat";

import { expectCapValidation, applyInvestments } from "./helpers";

describe("RisingTide", () => {
  let WithCustomAmounts: ContractFactory;

  beforeEach(async () => {
    WithCustomAmounts = await ethers.getContractFactory(
      "TestRisingTideWithCustomAmounts"
    );
  });

  describe("Gitbook example", function () {
    let contract: TestRisingTideWithCustomAmounts;

    beforeEach(async () => {
      contract = (await WithCustomAmounts.deploy(
        5000
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
});
