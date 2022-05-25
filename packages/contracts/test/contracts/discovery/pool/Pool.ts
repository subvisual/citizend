import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  TestPool,
  TestPool__factory,
  MockERC20,
  MockERC20__factory,
  Controller,
  Controller__factory,
  FractalRegistry,
  FractalRegistry__factory,
  Citizend,
  Citizend__factory,
  Staking,
  Staking__factory,
} from "../../../../src/types";

const { parseUnits } = ethers.utils;

describe("Pool", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let aUSD: MockERC20;
  let pool: TestPool;
  let controller: Controller;
  let registry: FractalRegistry;
  let citizend: Citizend;
  let staking: Staking;

  beforeEach(async () => {
    await deployments.fixture(["aUSD"]);

    [owner, alice, bob] = await ethers.getSigners();

    const aUSDDeployment = await deployments.get("aUSD");
    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);

    registry = await new FractalRegistry__factory(owner).deploy(owner.address);
    citizend = await new Citizend__factory(owner).deploy(owner.address);
    staking = await new Staking__factory(owner).deploy(citizend.address);
    controller = await new Controller__factory(owner).deploy(
      registry.address,
      staking.address,
      citizend.address
    );

    controller.setPaymentToken(aUSD.address);

    pool = await new TestPool__factory(owner).deploy(parseUnits("10000"), controller.address);
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
    it("TODO similar tests from Sale.sol");
  });

  describe("uncappedAllocation", () => {
    it("TODO similar tests from Sale.sol");
  });

  describe("allocation", () => {
    it("TODO similar tests from Sale.sol");
  });
});
