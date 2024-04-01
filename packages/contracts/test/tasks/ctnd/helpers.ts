import { ethers } from "hardhat";

import { Sale, MockERC20, FractalRegistry } from "../../../src/types";

import { BigNumberish } from "ethers";

const { parseUnits } = ethers.utils;
const { MaxUint256 } = ethers.constants;

export async function applyInvestments(
  paymentToken: MockERC20,
  registry: FractalRegistry,
  sale: Sale,
  examples: BigNumberish[]
) {
  for (const [i, amount] of examples.entries()) {
    const signers = await ethers.getSigners();
    const signer = signers[i];

    const decimals = await paymentToken.decimals();
    await paymentToken
      .connect(signer)
      .mint(signer.address, parseUnits("1000", decimals));
    await paymentToken.connect(signer).approve(sale.address, MaxUint256);
    const fractalId = ethers.utils.randomBytes(32);
    await registry.addUserAddress(signer.address, fractalId);
    await registry.addUserToList(fractalId, "plus");
    await sale.connect(signer).buy(amount);
  }
}
