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
  Vesting,
  Vesting__factory,
} from "../../../src/types";

const { parseUnits } = ethers.utils;
const { MaxUint256 } = ethers.constants;

describe("Sale", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let seller: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let sale: Sale;
  let vesting: Vesting;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["sale1", "vesting"]);

    [owner, alice, seller] = await ethers.getSigners();

    const aUSDDeployment = await deployments.get("aUSD");
    const citizendDeployment = await deployments.get("Citizend");
    const saleDeployment = await deployments.get("Sale1");
    const vestingDeployment = await deployments.get("Vesting");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
    sale = Sale__factory.connect(saleDeployment.address, owner);
    vesting = Vesting__factory.connect(vestingDeployment.address, owner);

    await aUSD.connect(alice).approve(sale.address, MaxUint256);
    await sale.grantRole(await sale.CAP_VALIDATOR(), seller.address);
    await sale.grantRole(await sale.PRIVATE_SELLER(), seller.address);
    await vesting.grantRole(await vesting.SALE_CONTRACT(), sale.address);
  });

  beforeEach(() => fixture());

  describe("constructor", () => {
    it("sets the correct params", async () => {
      expect(await sale.token()).to.equal(citizend.address);
      expect(await sale.paymentToken()).to.equal(aUSD.address);
    });
  });

  describe("buy", () => {
    it("emits a Purchase event", async () => {
      const paymentAmount = parseUnits("1");
      await sale.setVesting(vesting.address);

      expect(await sale.connect(alice).buy(paymentAmount))
        .to.emit(sale, "Purchase")
        .withArgs(alice.address, paymentAmount);
    });

    it("correctly handles multiple purchases from the same account", async () => {
      const paymentAmount = parseUnits("1");
      await sale.setVesting(vesting.address);

      expect(await sale.connect(alice).buy(paymentAmount))
        .to.emit(sale, "Purchase")
        .withArgs(alice.address, paymentAmount);

      expect(await sale.connect(alice).buy(paymentAmount))
        .to.emit(sale, "Purchase")
        .withArgs(alice.address, paymentAmount);
    });
  });

  describe("privateBuy", () => {
    it("keeps track of the allocations", async () => {
      await sale.setVesting(vesting.address);
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(150), 3);

      expect(await sale.getUncappedAllocations(alice.address)).to.equal(150);
    });

    it("adds to an existing private purchase", async () => {
      await sale.setVesting(vesting.address);
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(150), 3);
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(100), 3);

      expect(await sale.getUncappedAllocations(alice.address)).to.equal(250);
    });

    it("fails if buyer is already part of public sale", async () => {
      await sale.setVesting(vesting.address);
      await sale.connect(alice).buy(100);

      await expect(
        sale.connect(seller).privateBuy(alice.address, 100, 3)
      ).to.be.revertedWith("Account already has public vesting");
    });

    it("emits an event", async () => {
      await sale.setVesting(vesting.address);
      await expect(sale.connect(seller).privateBuy(alice.address, 150, 2))
        .to.emit(sale, "PrivatePurchase")
        .withArgs(alice.address, 150, 2);
    });

    it("rejects the transaction when it would go above the private cap", async () => {
      await sale.setVesting(vesting.address);
      const privateCap = await vesting.privateSaleCap();
      await expect(
        sale
          .connect(seller)
          .privateBuy(
            alice.address,
            await sale.tokenToPaymentToken(privateCap.add(100)),
            2
          )
      ).to.be.revertedWith("Private sale cap reached");
    });
  });

  describe("setVesting", () => {
    it("allows setting the vesting contract address", async () => {
      await sale.setVesting(vesting.address);

      expect(await sale.vesting()).to.equal(vesting.address);
    });

    it("does not allow reassigning the vesting contract address", async () => {
      await sale.setVesting(vesting.address);

      await expect(
        sale.connect(owner).setVesting(alice.address)
      ).to.be.revertedWith("already set the vesting address");
    });

    it("prevents non admin from assigning the vesting contract address", async () => {
      await expect(sale.connect(alice).setVesting(vesting.address)).to.be
        .reverted;
    });
  });

  describe("paymentTokenToToken", async () => {
    it("reverts when the amount is zero", async () => {
      await expect(sale.paymentTokenToToken(parseUnits("0"))).to.be.reverted;
    });

    it("allows paying 0.30 $aUSD for 1 $CTND", async () => {
      const paymentAmount = parseUnits("0.30");
      const tokens = parseUnits("1");

      expect(await sale.paymentTokenToToken(paymentAmount)).to.equal(tokens);
    });

    it("allows payment 300 $aUSD for 1000 $CTND", async () => {
      const paymentAmount = parseUnits("300");
      const tokens = parseUnits("1000");

      expect(await sale.paymentTokenToToken(paymentAmount)).to.equal(tokens);
    });
  });

  describe("tokenToPaymentToken", async () => {
    it("reverts when the amount is zero", async () => {
      await expect(sale.tokenToPaymentToken(parseUnits("0"))).to.be.reverted;
    });

    it("converts the correct amount", async () => {
      const tokens = parseUnits("1");
      const paymentAmount = parseUnits("0.30");

      expect(await sale.tokenToPaymentToken(tokens)).to.equal(paymentAmount);
    });
  });

  describe("set individual cap", () => {
    it("allows me to set the cap", async () => {
      await sale.connect(seller).setIndividualCap(100);

      expect(await sale.individualCap()).to.equal(100);
    });
  });

  describe("refundable", () => {
    it("is 0 before the vesting", async () => {
      expect(await sale.refundable(alice.address)).to.equal(0);
    });

    it("is 0 if the individual cap is higher than the invested total", async () => {
      await sale.setVesting(vesting.address);
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(200);

      expect(await sale.refundable(alice.address)).to.equal(0);
    });

    it("is the difference between the cap and the invested total", async () => {
      await sale.setVesting(vesting.address);
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(300));
      await sale.connect(seller).setIndividualCap(200);

      expect(await sale.refundable(alice.address)).to.equal(100);
    });
  });
});
