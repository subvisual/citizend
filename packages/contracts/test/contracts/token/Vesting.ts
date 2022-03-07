import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Vesting,
  // Vesting__factory,
} from "../../../src/types";

describe("Citizend", () => {
  let owner: SignerWithAddress;

  let token: MockERC20;
  let vesting: Vesting;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    token = await new MockERC20__factory(owner).deploy();
    // vesting = await new Vesting__factory(owner).deploy();
  });

  describe("constructor", () => {});

  describe("createPublicSaleVesting", () => {
    it("creates a vesting with public sale parameters");
    it("transfers correct amount of tokens from sender");
    it("adds to an existing vesting");
    it("fails if beneficiary already has private vesting");
    it("fails if sender is not the sale contract");
    it("emits an event");
  });

  describe("createPrivateSaleVesting", () => {
    it("creates a vesting with private sale parameters");
    it("can customize the cliff period");
    it("transfers correct amount of tokens from sender");
    it("adds to an existing vesting");
    it("fails if beneficiary already has public vesting");
    it("fails if sender is not the sale contract");
    it("emits an event");
  });

  describe("claimable", () => {
    it("is zero for addresses with no vesting");
    it("is more than zero after initial cliff period");
    it("is 50% of the amount after cliff period and 50% of vesting period");
    it("is 100% of the amount after 100% of vesting and cliff period");
    it("increases if not claimed during long periods");
    it("goes back to 0 after claiming");
  });

  describe("claimed", () => {
    it("is zero before claiming");
    it("equals the already claimed amount after multiple claims");
  });

  describe("public sale claim", () => {
    it("allows me to claim 0 tokens after 2 weeks");
    it("allows me to claim 33% of my tokens after 1 month");
    it("allows me to claim 100% of my tokens after 3 months");
    it("emits an event");
  });

  describe("private sale claim", () => {
    it("allows me to claim 0 tokens after 2 weeks");
    it("allows me to claim 0 tokens after 1 month");
    it("allows me to claim some amount tokens after the full cliff period");
    it("allows me to claim 100% after the full cliff and vesting period");
  });
});
