import type { ContractTransaction } from "ethers";

import type {
  TestRisingTideWithCustomAmounts,
  TestRisingTideWithStaticAmounts,
} from "../../../src/types";

import { expect } from "chai";
import { BigNumber } from "ethers";

export async function expectCapValidation(
  contract: TestRisingTideWithCustomAmounts | TestRisingTideWithStaticAmounts,
  cap: number,
  expectation: boolean,
  gasLimit?: number
) {
  let gasSpent = BigNumber.from(0);
  let tx;
  gasLimit = gasLimit || 10000000;

  tx = await contract.setCap(cap, { gasLimit });
  gasSpent = gasSpent.add(await getGasSpent(tx));
  let extraCalls = 0;

  while (await contract.risingTide_validating()) {
    tx = await contract.risingTide_validate({ gasLimit });
    extraCalls++;
    gasSpent = gasSpent.add(await getGasSpent(tx));
  }

  expect(await contract.risingTide_isValidCap()).to.equal(expectation);

  return { gasSpent, extraCalls };
}

async function getGasSpent(tx: ContractTransaction) {
  const receipt = await tx.wait();

  return receipt.gasUsed;
}

export async function applyInvestments(
  contract: TestRisingTideWithCustomAmounts,
  investments: number[]
) {
  for (let i = 0; i < investments.length; ++i) {
    await contract.test_invest(i, investments[i]);
  }
}
