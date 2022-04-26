import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TestPool, TestPool__factory } from "../../../../src/types";

const { parseUnits } = ethers.utils;

describe("Pool", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let pool: TestPool;

  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    pool = await new TestPool__factory(owner).deploy(1000);
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
    it("TODO similar tests from Sale.sol");
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
    it("TODO similar tests from Sale.sol");
  });

  describe("allocation", () => {
    it("TODO similar tests from Sale.sol");
  });
});
