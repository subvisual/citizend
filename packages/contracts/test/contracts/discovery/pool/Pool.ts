import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  TestPool,
  TestPool__factory,
} from "../../../../src/types";

const { parseUnits } = ethers.utils;
const { MaxUint256 } = ethers.constants;

describe("Pool", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let aUSD: MockERC20;

  let pool: TestPool;

  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    aUSD = await new MockERC20__factory(owner).deploy("aUSD", "aUSD");
    pool = await new TestPool__factory(owner).deploy(1000, aUSD.address);

    await aUSD.mint(alice.address, parseUnits("10000"));
    await aUSD.mint(bob.address, parseUnits("10000"));
    await aUSD.connect(alice).approve(pool.address, MaxUint256);
    await aUSD.connect(bob).approve(pool.address, MaxUint256);
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
      await pool.invest(alice.address, 100);

      await pool.setIndividualCap(100, { gasLimit: 10000000 });

      expect(await pool.individualCap()).to.equal(100);
      expect(await pool.risingTide_isValidCap()).to.equal(true);
    });

    it("fails to validate the cap for the wrong value", async () => {
      await pool.invest(alice.address, 100);

      await pool.setIndividualCap(50, { gasLimit: 10000000 });

      expect(await pool.individualCap()).to.equal(50);
      expect(await pool.risingTide_isValidCap()).to.equal(false);
    });
  });

  describe("refund", () => {
    it("fails if individual cap is not yet set", async () => {
      await pool.invest(alice.address, 100);

      await expect(pool.refund(alice.address)).to.be.revertedWith(
        "cap not yet set"
      );
    });

    it("refunds the correct amount once the cap is set", async () => {
      const cap = 1000;
      const amount = cap + 1000;
      await pool.invest(alice.address, amount);
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
      await pool.invest(alice.address, amount);
      await pool.setIndividualCap(cap, { gasLimit: 10000000 });

      await expect(pool.refund(alice.address))
        .to.emit(pool, "Refund")
        .withArgs(alice.address, amount - cap);
    });

    it("does not allow double refunds", async () => {
      const cap = 1000;
      const amount = cap + 1000;
      await pool.invest(alice.address, amount);
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

  describe("refundAmount", () => {
    it("is 0 before the cap is calculated", async () => {
      expect(await pool.refundAmount(alice.address)).to.equal(0);
    });

    it("is 0 if the individual cap is higher than the invested total", async () => {
      await pool.invest(alice.address, 200);
      await pool.invest(bob.address, 200);

      await pool.setIndividualCap(800, { gasLimit: 10000000 });

      expect(await pool.refundAmount(alice.address)).to.equal(0);
    });

    it("is the difference between the cap and the invested total", async () => {
      await pool.invest(alice.address, 1001);

      await pool.setIndividualCap(1000, { gasLimit: 10000000 });

      expect(await pool.refundAmount(alice.address)).to.equal(1);
    });
  });

  describe("uncappedAllocation", () => {
    it("is the amount that was invested", async () => {
      await pool.invest(alice.address, 100);

      expect(await pool.uncappedAllocation(alice.address)).to.equal(100);
    });
  });

  describe("allocation", () => {
    it("is 0 before the cap is calculated", async () => {
      expect(await pool.allocation(alice.address)).to.equal(0);
    });

    it("is the amount that was invested if below cap", async () => {
      await pool.invest(alice.address, 50);
      await pool.invest(bob.address, 1000);

      await pool.setIndividualCap(950, { gasLimit: 10000000 });

      expect(await pool.allocation(alice.address)).to.equal(50);
    });

    it("is the amount that was invested if above cap", async () => {
      await pool.invest(alice.address, 1001);

      await pool.setIndividualCap(1000, { gasLimit: 10000000 });

      expect(await pool.allocation(alice.address)).to.equal(1000);
    });
  });
});
