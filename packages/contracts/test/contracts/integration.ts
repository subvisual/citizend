import { ethers, deployments, network } from "hardhat";
import { BigNumber } from "ethers";
import BN from "bn.js";
import { expect } from "chai";

import { time } from "@openzeppelin/test-helpers";
import { increaseTime, decreaseTime } from "../timeHelpers";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Citizend,
  Citizend__factory,
  Vesting,
  Vesting__factory,
  Sale,
  Sale__factory,
} from "../../src/types";

describe("Integration", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let seller: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let vesting: Vesting;
  let sale: Sale;
  let secondSale: Sale;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["vesting", "sale", "second-sale"]);

    [owner, alice, seller] = await ethers.getSigners();

    const citizendDeployment = await deployments.get("Citizend");
    const aUSDDeployment = await deployments.get("aUSD");
    const saleDeployment = await deployments.get("Sale");
    const secondSaleDeployment = await deployments.get("SecondSale");
    const vestingDeployment = await deployments.get("Vesting");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
    sale = Sale__factory.connect(saleDeployment.address, owner);
    secondSale = Sale__factory.connect(secondSaleDeployment.address, owner);
    vesting = Vesting__factory.connect(vestingDeployment.address, owner);

    await citizend.transfer(vesting.address, 1000);
    await sale.grantRole(await sale.CAP_VALIDATOR(), seller.address);
    await secondSale.grantRole(await sale.CAP_VALIDATOR(), seller.address);
    await sale.grantRole(await sale.PRIVATE_SELLER(), seller.address);
    await secondSale.grantRole(await sale.PRIVATE_SELLER(), seller.address);
    await vesting.grantRole(await vesting.SALE_CONTRACT(), sale.address);
    await vesting.grantRole(await vesting.SALE_CONTRACT(), secondSale.address);

    const allowance = ethers.constants.MaxUint256;
    await aUSD.connect(alice).approve(sale.address, allowance);
    await aUSD.connect(alice).approve(secondSale.address, allowance);
  });

  beforeEach(async () => {
    await fixture();

    await sale.setVesting(vesting.address);
    await secondSale.setVesting(vesting.address);
    await vesting.addSale(sale.address);
  });

  describe("refund", () => {
    it("reverts the transaction if there is nothing to be refunded", async () => {
      await expect(sale.refund(alice.address)).to.be.revertedWith(
        "No tokens to refund"
      );
    });

    it("refunds in aUSD the amount of tokens that could not be claimed", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(50);

      const beforeRefund = await aUSD.balanceOf(alice.address);
      await expect(sale.refund(alice.address))
        .to.emit(sale, "Refunded")
        .withArgs(alice.address, 50);
      const afterRefund = await aUSD.balanceOf(alice.address);

      expect(afterRefund.sub(beforeRefund)).to.eq(
        await sale.tokenToPaymentToken(50)
      );
    });

    it("is possible to refund all sales at once from the vesting contract", async () => {
      await vesting.addSale(secondSale.address);
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(50);
      await secondSale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await secondSale.connect(seller).setIndividualCap(50);

      const beforeRefund = await aUSD.balanceOf(alice.address);
      await vesting.refund(alice.address);
      const afterRefund = await aUSD.balanceOf(alice.address);

      expect(afterRefund.sub(beforeRefund)).to.eq(
        await sale.tokenToPaymentToken(100)
      );
    });
  });

  describe("totalVested", () => {
    it("is zero before vesting starts", async () => {
      expect(await vesting.totalVested(alice.address)).to.equal(0);
    });

    it("is 100% after the vesting", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(200);
      await increaseTime(time.duration.days(61));

      expect(await vesting.totalVested(alice.address)).to.equal(150);
    });
  });

  describe("claimed", () => {
    it("is zero before claiming", async () => {
      expect(await vesting.claimed(alice.address)).to.eq(0);
    });

    it("equals the already claimed amount after a claim", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(200);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimed(alice.address)).to.eq(0);
      await vesting.claim(alice.address);
      expect(await vesting.claimed(alice.address)).to.eq(50);
    });
  });

  describe("claimable", () => {
    it("is zero for addresses with no vesting", async () => {
      await increaseTime(time.duration.days(3));
      await sale.connect(seller).setIndividualCap(500);
      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("is more than zero immediately after the vesting starts", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(3));

      expect(await vesting.claimable(alice.address)).to.equal(50);
    });

    it("is 2/3 of the amount after 2/3 of vesting period", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(31));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("is 100% of the amount after 100% of vesting and cliff period", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(61));

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("increases if not claimed during long periods", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(1));
      expect(await vesting.claimable(alice.address)).to.equal(50);

      await increaseTime(time.duration.days(60));

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("does not go over the original total", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(200));

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("goes back to 0 after claiming", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimable(alice.address)).to.equal(50);
      await vesting.claim(alice.address);
      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("takes into account the individual cap", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(100);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimable(alice.address)).to.equal(33);
    });

    it("sums the total invested from multiple sales", async () => {
      await vesting.addSale(secondSale.address);

      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await secondSale.connect(alice).buy(await sale.tokenToPaymentToken(50));
      await sale.connect(seller).setIndividualCap(500);
      await secondSale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimable(alice.address)).to.equal(66);
    });

    it("takes into account each sale's individual cap", async () => {
      await vesting.addSale(secondSale.address);

      await sale.connect(alice).buy(await sale.tokenToPaymentToken(200));
      await secondSale.connect(alice).buy(await sale.tokenToPaymentToken(300));
      await sale.connect(seller).setIndividualCap(100);
      await secondSale.connect(seller).setIndividualCap(200);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });
  });

  describe("public sale claim", () => {
    it("allows me to claim 0 tokens before the vesting starts", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(100);
      await decreaseTime(time.duration.days(1));

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("allows me to claim 33% as soon as the vesting starts", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(100);
      await increaseTime(time.duration.days(1));

      expect(await vesting.claimable(alice.address)).to.equal(33);
    });

    it("allows me to claim 100% of my tokens on the beginning of the 3rd month", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(100);
      await increaseTime(time.duration.days(30 * 2 + 1));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("emits an event", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(seller).setIndividualCap(100);
      await increaseTime(time.duration.days(30 * 2 + 1));

      await expect(vesting.claim(alice.address)).to.emit(
        vesting,
        "VestingClaimed"
      );
    });
  });

  describe("buy allocations in the sale", async () => {
    it("can be bought in chunks", async () => {
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(150));
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(30 * 3 + 1));

      expect(await vesting.claimable(alice.address)).to.equal(250);
    });
  });

  describe("private sale claim", () => {
    it("allows me to claim 0 tokens before the cliff starts", async () => {
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(150), 3);
      await sale.connect(seller).setIndividualCap(500);

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("is zero for the duration of the cliff", async () => {
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(150), 3);
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(30));

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("allows me to claim some amount tokens after the full cliff period", async () => {
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(100), 3);
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(30 * 3 + 2));

      expect(await vesting.claimable(alice.address)).to.equal(2);
    });

    it("allows me to claim 100% after the full cliff and vesting period", async () => {
      await sale
        .connect(seller)
        .privateBuy(alice.address, await sale.tokenToPaymentToken(100), 3);
      await sale.connect(seller).setIndividualCap(500);
      await increaseTime(time.duration.days(3 * 30 + 36 * 30));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });
  });
});
