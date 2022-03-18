import type { ContractFactory } from "ethers";
import type { TestRisingTideWithStaticAmounts } from "../../../src/types";

import { ethers } from "hardhat";

import { expectCapValidation } from "./helpers";

/**
 * Measures the gas spent to validate investment caps
 * across different amounts of invested users
 */
if (process.env.RISING_TIDE_GAS_ESTIMATES) {
  describe("RisingTide", () => {
    let WithStaticAmounts: ContractFactory;

    beforeEach(async () => {
      WithStaticAmounts = await ethers.getContractFactory(
        "TestRisingTideWithStaticAmounts"
      );
    });

    describe("gas estimates", function () {
      this.timeout(100_000);

      const results: Record<string, string> = {};
      const total = 1000000;

      [2500, 5000, 10000, 20000].forEach((n: number) => {
        it(`${n} investors`, async function () {
          const contract = (await WithStaticAmounts.deploy(
            n,
            total,
            total
          )) as TestRisingTideWithStaticAmounts;
          await contract.deployed();

          const cap = Math.floor(total / n);

          const { gasSpent } = await expectCapValidation(contract, cap, true);

          results[n] = `${gasSpent.toString()} gas`;
        });
      });

      after(async () => {
        console.log("RisingTide gas estimates:");
        console.table(results);
      });
    });
  });
}
