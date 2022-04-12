import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { PeoplesPool, PeoplesPool__factory } from "../../../../src/types";

const { parseUnits } = ethers.utils;

describe("PeoplesPool", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let pool: PeoplesPool;

  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    const pool = new PeoplesPool__factory(owner).deploy();
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
    it("TODO similar tests from Sale.sol");
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
