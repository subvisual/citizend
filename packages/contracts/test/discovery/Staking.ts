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

  describe("getStake", () => {
    it("returns the stake of the given address", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);

      const stake = await staking.connect(alice.address).getStake();

      expect(stake).to.eq(amount);
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

  describe("rebond", () => {
    it("rebonds the given amount", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(amount);

      await staking.connect(alice).rebond(50);

      const stake = await staking.stakes(alice.address);
      expect(stake.actualAmount).to.eq(100);
      expect(stake.availableAmount).to.eq(50);
    });

    it("rebonds multiple unbondings at once", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(20);
      await staking.connect(alice).unbond(10);

      await staking.connect(alice).rebond(25);

      const stake = await staking.stakes(alice.address);
      expect(stake.actualAmount).to.eq(100);
      expect(stake.availableAmount).to.eq(95);
    });

    it("can only rebond the amount that is in the unbonded pool", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(10);
      await staking.connect(alice).unbond(20);

      await expect(staking.connect(alice).rebond(40)).to.be.revertedWith(
        "not enough unbonding funds"
      );
    });
  });

  describe("withdraw", () => {
    it("withdraws the given amount after the unbonding period", async () => {
      const amount = 100;
      await staking.connect(alice).stake(amount);
      await staking.connect(alice).unbond(amount);
      await increaseTime(await staking.UNBONDING_PERIOD());

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

      await increaseTime(await staking.UNBONDING_PERIOD());

      const action = () => staking.connect(alice).withdraw(amount);
      await expect(action).to.changeTokenBalance(citizend, alice, amount);
    });
  });
});
