import type { ContractFactory } from "ethers";
import type { TestRisingTideWithStaticAmounts } from "../../../src/types";
import { calcEthereumTransactionParams } from "@acala-network/eth-providers";

import { ethers } from "hardhat";

import { expectCapValidation } from "./helpers";

/**
 * Measures the gas spent to validate investment caps
 * across different amounts of invested users
 */
if (process.env.RISING_TIDE_GAS_ESTIMATES) {
  describe("RisingTide", () => {
    const txFeePerGas = "199999946752";
    const storageByteDeposit = "100000000000000";
    let WithStaticAmounts: ContractFactory;

    let ethParams: any;

    beforeEach(async () => {
      WithStaticAmounts = await ethers.getContractFactory(
        "TestRisingTideWithStaticAmounts"
      );

      const blockNumber = await ethers.provider.getBlockNumber();

      const { txGasPrice, txGasLimit } = calcEthereumTransactionParams({
        gasLimit: "2100001",
        validUntil: (blockNumber + 100).toString(),
        storageLimit: "64001",
        txFeePerGas,
        storageByteDeposit,
      });

      ethParams = { gasPrice: txGasPrice, gasLimit: txGasLimit };
    });

    describe("gas estimates", function () {
      this.timeout(100_000);

      const results: Record<string, string> = {};
      const total = 1000000;

      [2500].forEach((n: number) => {
        it(`${n} investors`, async function () {
          const contract = (await WithStaticAmounts.deploy(n, total, total, {
            ...ethParams,
          })) as TestRisingTideWithStaticAmounts;
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
