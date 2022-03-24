import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Citizend, Citizend__factory } from "../../../src/types";

describe("Citizend", () => {
  let owner: SignerWithAddress;

  let citizend: Citizend;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    citizend = await new Citizend__factory(owner).deploy(owner.address);
  });

  describe("constructor", () => {
    it("sets the correct params", async () => {
      expect(await citizend.name()).to.equal("Citizend");
      expect(await citizend.symbol()).to.equal("CTND");
    });

    it("mints initial amount to the owner", async () => {
      expect(await citizend.balanceOf(owner.address)).to.equal(
        ethers.utils.parseEther("1000000000")
      );
    });
  });
});
