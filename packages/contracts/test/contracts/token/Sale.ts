import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Sale,
  Sale__factory,
  Citizend,
  Citizend__factory,
} from "../../../src/types";

const { parseUnits } = ethers.utils;

describe("Sale", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let fakeVesting: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let sale: Sale;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["sale"]);

    [owner, alice, fakeVesting] = await ethers.getSigners();

    const aUSDDeployment = await deployments.get("aUSD");
    const citizendDeployment = await deployments.get("Citizend");
    const saleDeployment = await deployments.get("Sale");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
    sale = Sale__factory.connect(saleDeployment.address, owner);

    const allowance = ethers.constants.MaxUint256;
    await aUSD.connect(alice).approve(sale.address, allowance);
  });

  beforeEach(() => fixture());

  describe("constructor", () => {
    it("sets the correct params", async () => {
      expect(await sale.token()).to.equal(citizend.address);
      expect(await sale.paymentToken()).to.equal(aUSD.address);
    });
  });

  describe("buy", () => {
    it("allows paying 0.30 $aUSD for 1 $CTND", async () => {
      const paymentAmount = parseUnits("0.30");
      const tokens = 1;

      expect(await sale.calculateAmount(paymentAmount)).to.equal(tokens);
    });

    it("allows payment 300 $aUSD for 1000 $CTND", async () => {
      const paymentAmount = parseUnits("300");
      const tokens = 1000;

      expect(await sale.calculateAmount(paymentAmount)).to.equal(tokens);
    });

    it("fails if not enough $CTND are available");

    it("emits a Purchase event", async () => {
      const paymentAmount = parseUnits("1");

      expect(await sale.connect(alice).buy(paymentAmount))
        .to.emit(sale, "Purchase")
        .withArgs(alice.address, paymentAmount);
    });

    it("sends tokens into vesting with correct parameters");
    it("correctly handles multiple purchases from the same account");
  });

  describe("setVesting", () => {
    it("allows setting the vesting contract address", async () => {
      await sale.setVesting(fakeVesting.address);

      expect(await sale.vesting()).to.equal(fakeVesting.address);
    });

    it("does not allow reassigning the vesting contract address", async () => {
      await sale.setVesting(fakeVesting.address);

      await expect(
        sale.connect(owner).setVesting(alice.address)
      ).to.be.revertedWith("already set the vesting address");
    });

    it("prevents non admin from assigning the vesting contract address", async () => {
      await expect(sale.connect(alice).setVesting(fakeVesting.address)).to.be
        .reverted;
    });
  });
});
