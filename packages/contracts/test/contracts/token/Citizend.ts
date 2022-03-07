import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Citizend, Citizend__factory } from "../../../src/types";

describe("Citizend", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let citizend: Citizend;

  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    citizend = await new Citizend__factory(owner).deploy();
  });

  describe("constructor", () => {
    it("sets the correct params", async () => {
      expect(await citizend.name()).to.equal("Citizend");
      expect(await citizend.symbol()).to.equal("CTND");
    });

    xit("mints initial amount to the owner");
  });
});
