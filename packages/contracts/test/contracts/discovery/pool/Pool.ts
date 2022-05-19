import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  MockProject,
  MockProject__factory,
  TestPool,
  TestPool__factory,
} from "../../../../src/types";

import { goToTime, currentTimestamp } from "../../../timeHelpers";

const { parseUnits } = ethers.utils;
const { MaxUint256 } = ethers.constants;

describe("Pool", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let aUSD: MockERC20;
  let project: MockProject;
  let pool: TestPool;

  let oneDay: number;

  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    aUSD = await new MockERC20__factory(owner).deploy("aUSD", "aUSD", 12);
    project = await new MockProject__factory(owner).deploy();
    await project.test_createStakersPool(1000, aUSD.address, 0, 3);
    pool = TestPool__factory.connect(await project.stakersPool(), owner);

    await aUSD.mint(alice.address, parseUnits("10000"));
    await aUSD.mint(bob.address, parseUnits("10000"));
    await aUSD.connect(alice).approve(pool.address, MaxUint256);
    await aUSD.connect(bob).approve(pool.address, MaxUint256);

    oneDay = 60 * 60 * 24;
  });

  describe("constructor", () => {
    it("sets the correct params");
  });

  describe("buy", () => {
    it("register a new purchase");
    it("fails if payment token is not transfered successfully");
    it("emits a Purchase event");
    it("correctly handles multiple purchases from the same account");

    it("only works if the batch is within the invest period");
    it("does not work if the user hasn't previously voted in the project");
  });

  describe("setIndividualCap", () => {
    it("allows me to set the cap after investment period is over", async () => {
      await project.connect(alice).invest(0, 100);

      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      expect(await pool.individualCap()).to.equal(100);
      expect(await pool.risingTide_isValidCap()).to.equal(true);
    });

    it("fails to validate the cap for the wrong value", async () => {
      await project.connect(alice).invest(0, 100);

      await pool.setIndividualCap(50, { gasLimit: 10000000 });

      expect(await pool.individualCap()).to.equal(50);
      expect(await pool.risingTide_isValidCap()).to.equal(false);
    });
  });

  describe("refund", () => {
    it("fails if individual cap is not yet set", async () => {
      await project.connect(alice).invest(0, 100);

      await expect(pool.refund(alice.address)).to.be.revertedWith(
        "cap not yet set"
      );
    });

    it("refunds the correct amount once the cap is set", async () => {
      const cap = 1000;
      const amount = cap + 1000;
      await project.connect(alice).invest(0, amount);
      await pool.setIndividualCap(cap, { gasLimit: 10000000 });

      await expect(() => pool.refund(alice.address)).to.changeTokenBalance(
        aUSD,
        alice,
        amount - cap
      );
    });

    it("emits an event", async () => {
      const cap = 1000;
      const amount = cap + 1000;
      await project.connect(alice).invest(0, amount);
      await pool.setIndividualCap(cap, { gasLimit: 10000000 });

      await expect(pool.refund(alice.address))
        .to.emit(pool, "Refund")
        .withArgs(alice.address, amount - cap);
    });

    it("does not allow double refunds", async () => {
      const cap = 1000;
      const amount = cap + 1000;
      await project.connect(alice).invest(0, amount);
      await pool.setIndividualCap(cap, { gasLimit: 10000000 });

      await pool.refund(alice.address);

      await expect(pool.refund(alice.address)).to.be.revertedWith(
        "already refunded"
      );
    });
  });

  describe("withdraw", () => {
    it("TODO similar tests from Sale.sol");
  });

  describe("withdrawable", () => {
    it("is non zero after one vesting month", async () => {
      const vestingStart = (await currentTimestamp()) + oneDay;
      await pool.mock_setVestingStart(vestingStart);
      await project.connect(alice).invest(0, 100);
      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      await goToTime(vestingStart);

      expect(await pool.withdrawable(alice.address)).to.equal(33);
    });

    it("is zero while vesting period does not start", async () => {
      const vestingStart = (await currentTimestamp()) + oneDay;
      await pool.mock_setVestingStart(vestingStart);
      await project.connect(alice).invest(0, 100);
      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      expect(await pool.withdrawable(alice.address)).to.equal(0);
    });

    it("is zero during the cliff period", async () => {
      await project.test_createStakersPool(1000, aUSD.address, 1, 3);
      pool = TestPool__factory.connect(await project.stakersPool(), owner);
      await aUSD.connect(alice).approve(pool.address, MaxUint256);
      const vestingStart = (await currentTimestamp()) + oneDay;
      await pool.mock_setVestingStart(vestingStart);
      await project.connect(alice).invest(0, 100);
      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      await goToTime(vestingStart);

      expect(await pool.withdrawable(alice.address)).to.equal(0);
    });

    it("allows me to claim some amount tokens after the full cliff period", async () => {
      await project.test_createStakersPool(1000, aUSD.address, 1, 3);
      pool = TestPool__factory.connect(await project.stakersPool(), owner);
      await aUSD.connect(alice).approve(pool.address, MaxUint256);
      const vestingStart = (await currentTimestamp()) + oneDay;
      await pool.mock_setVestingStart(vestingStart);
      await project.connect(alice).invest(0, 100);
      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      await goToTime(vestingStart + oneDay * 30);

      expect(await pool.withdrawable(alice.address)).to.equal(33);
    });

    it("allows me to claim 100% after the full cliff and vesting period", async () => {
      await project.test_createStakersPool(1000, aUSD.address, 1, 3);
      pool = TestPool__factory.connect(await project.stakersPool(), owner);
      await aUSD.connect(alice).approve(pool.address, MaxUint256);
      const vestingStart = (await currentTimestamp()) + oneDay;
      await pool.mock_setVestingStart(vestingStart);
      await project.connect(alice).invest(0, 100);
      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      await goToTime(vestingStart + oneDay * 30 * 5);

      expect(await pool.withdrawable(alice.address)).to.equal(100);
    });
  });

  describe("refundableAmount", () => {
    it("is 0 before the cap is calculated", async () => {
      expect(await pool.refundableAmount(alice.address)).to.equal(0);
    });

    it("is 0 if the individual cap is higher than the invested total", async () => {
      await project.connect(alice).invest(0, 200);
      await project.connect(bob).invest(0, 200);

      await pool.setIndividualCap(800, { gasLimit: 10000000 });

      expect(await pool.refundableAmount(alice.address)).to.equal(0);
    });

    it("is the difference between the cap and the invested total", async () => {
      await project.connect(alice).invest(0, 1001);

      await pool.setIndividualCap(1000, { gasLimit: 10000000 });

      expect(await pool.refundableAmount(alice.address)).to.equal(1);
    });
  });

  describe("uncappedAllocation", () => {
    it("is the amount that was invested", async () => {
      await project.connect(alice).invest(0, 100);

      expect(await pool.uncappedAllocation(alice.address)).to.equal(100);
    });
  });

  describe("allocation", () => {
    it("is 0 before the cap is calculated", async () => {
      expect(await pool.allocation(alice.address)).to.equal(0);
    });

    it("is the amount that was invested if below cap", async () => {
      await project.connect(alice).invest(0, 50);
      await project.connect(bob).invest(0, 1000);

      await pool.setIndividualCap(950, { gasLimit: 10000000 });

      expect(await pool.allocation(alice.address)).to.equal(50);
    });

    it("is the amount that was invested if above cap", async () => {
      await project.connect(alice).invest(0, 1001);

      await pool.setIndividualCap(1000, { gasLimit: 10000000 });

      expect(await pool.allocation(alice.address)).to.equal(1000);
    });
  });
});
