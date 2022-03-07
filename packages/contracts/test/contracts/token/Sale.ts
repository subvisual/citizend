import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Sale,
  Sale__factory,
} from "../../../src/types";

describe("Citizend", () => {
  let owner: SignerWithAddress;

  let token: MockERC20;
  let sale: Sale;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    token = await new MockERC20__factory(owner).deploy();
    sale = await new Sale__factory(owner).deploy();
  });

  describe("constructor", () => {});

  describe("buy", () => {
    it("allows paying 0.30 $aUSD for 1 $CTND");
    it("allows payment 300 $aUSD for 1000 $CTND");
    it("fails if not enough $CTND are available");
    it("emits a Purchase event");
    it("sends tokens into vesting with correct parameters");
    it("correctly handles multiple purchases from the same account");
  });
});
