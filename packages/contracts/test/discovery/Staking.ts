import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  Citizend,
  Citizend__factory,
  Staking,
  Staking__factory,
} from "../../src/types";

import { increaseTime } from "../timeHelpers";

const { MaxUint256 } = ethers.constants;

describe("Staking", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;

  let staking: Staking;
  let citizend: Citizend;

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();

    citizend = await new Citizend__factory(owner).deploy(owner.address);
    staking = await new Staking__factory(owner).deploy(citizend.address);

    await citizend.transfer(alice.address, 1000);
    await citizend.connect(alice).approve(staking.address, MaxUint256);
  });

  describe("stake", () => {
    it("stakes the given amount", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);

      const stake = await staking.stakes(alice.address);

      expect(stake.actualAmount).to.eq(amount);
      expect(stake.availableAmount).to.eq(amount);
    });
  });

  describe("unbond", () => {
    it("unbonds the given amount", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);

      await staking.connect(alice).unbond(amount);

      const stake = await staking.stakes(alice.address);
      expect(stake.actualAmount).to.eq(100);
      expect(stake.availableAmount).to.eq(0);
    });
  });

  describe("withdraw", () => {
    it("withdraws the given amount after the unbonding period", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(amount);
      const unbondingPeriod = await staking.UNBONDING_PERIOD_IN_DAYS();
      await increaseTime(unbondingPeriod.mul(24 * 60 * 60));

      const action = () => staking.connect(alice).withdraw(amount);
      await expect(action).to.changeTokenBalance(citizend, alice, amount);
    });

    it("cannot withdraw before the unbonding period", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(amount);

      await expect(staking.connect(alice).withdraw(amount)).to.be.revertedWith(
        "not enough unbonded funds"
      );
    });

    it("still allows you to withdraw even after failing to withdraw", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(amount);

      await expect(staking.connect(alice).withdraw(amount)).to.be.revertedWith(
        "not enough unbonded funds"
      );

      const unbondingPeriod = await staking.UNBONDING_PERIOD_IN_DAYS();
      await increaseTime(unbondingPeriod.mul(24 * 60 * 60));

      const action = () => staking.connect(alice).withdraw(amount);
      await expect(action).to.changeTokenBalance(citizend, alice, amount);
    });
  });
});
