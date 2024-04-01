import type { ContractFactory } from "ethers";
import type { TestRisingTideWithStaticAmounts } from "../../../src/types";

import { ethers } from "hardhat";

import { expectCapValidation } from "./helpers";
import { acalaDeployParams } from "../../../src/acala";

/**
 * Measures the gas spent to validate investment caps
 * across different amounts of invested users
 */
if (process.env.RISING_TIDE_GAS_ESTIMATES) {
  describe("RisingTide", () => {
    let WithStaticAmounts: ContractFactory;

    beforeEach(async () => {
      WithStaticAmounts = await ethers.getContractFactory(
        "TestRisingTideWithStaticAmounts",
      );
    });

    describe("gas estimates", function () {
      this.timeout(100_000);

      const results: Record<string, string> = {};
      const total = 1000000;

      [100, 250, 500].forEach((n: number) => {
        it(`${n} investors`, async function () {
          console.log("deploying");
          const contract = (await WithStaticAmounts.deploy(n, total, total, {
            ...(await acalaDeployParams()),
          })) as TestRisingTideWithStaticAmounts;
          await contract.deployed();
          console.log("deployed");

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
