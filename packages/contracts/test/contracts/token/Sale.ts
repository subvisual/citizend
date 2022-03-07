import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Sale,
  Citizend,
  Citizend__factory,
} from "../../../src/types";

describe("Citizend", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let sale: Sale;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["sale"]);

    [owner, alice] = await ethers.getSigners();

    const aUSDDeployment = await deployments.get("aUSD");
    const citizendDeployment = await deployments.get("Citizend");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
  });

  beforeEach(() => fixture());

  describe("constructor", () => {
    it("", async () => {
      console.log(await aUSD.balanceOf(alice.address));
    });
  });

  describe("buy", () => {
    it("allows paying 0.30 $aUSD for 1 $CTND");
    it("allows payment 300 $aUSD for 1000 $CTND");
    it("fails if not enough $CTND are available");
    it("emits a Purchase event");
    it("sends tokens into vesting with correct parameters");
    it("correctly handles multiple purchases from the same account");
  });
});
