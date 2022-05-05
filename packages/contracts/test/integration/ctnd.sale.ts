import { ethers, deployments, network } from "hardhat";
import { expect } from "chai";

import { time } from "@openzeppelin/test-helpers";
import {
  goToTime,
  increaseTime,
  decreaseTime,
  currentDate,
} from "../timeHelpers";
import { getNetworkConfig } from "../../src/deployConfigs";

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
  FractalRegistry,
  FractalRegistry__factory,
} from "../../src/types";

const { parseUnits, formatBytes32String } = ethers.utils;

describe("Integration", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let seller: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let registry: FractalRegistry;
  let vesting: Vesting;
  let sale: Sale;
  let secondSale: Sale;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["ctnd"]);
    const { ctndVesting } = await getNetworkConfig();

    [owner, alice, seller] = await ethers.getSigners();

    const citizendDeployment = await deployments.get("Citizend");
    const aUSDDeployment = await deployments.get("aUSD");
    const registryDeployment = await deployments.get("FractalRegistry");
    const saleDeployment = await deployments.get("Sale1");
    const secondSaleDeployment = await deployments.get("Sale2");
    const vestingDeployment = await deployments.get("Vesting");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
    registry = FractalRegistry__factory.connect(
      registryDeployment.address,
      owner
    );
    sale = Sale__factory.connect(saleDeployment.address, owner);
    secondSale = Sale__factory.connect(secondSaleDeployment.address, owner);
    vesting = Vesting__factory.connect(vestingDeployment.address, owner);

    await sale.grantRole(await sale.CAP_VALIDATOR_ROLE(), seller.address);
    await secondSale.grantRole(await sale.CAP_VALIDATOR_ROLE(), seller.address);

    const allowance = ethers.constants.MaxUint256;
    await aUSD.connect(alice).approve(sale.address, allowance);
    await aUSD.connect(alice).approve(secondSale.address, allowance);
    await registry.addUserAddress(alice.address, formatBytes32String("id1"));

    await vesting.setStartTime(ctndVesting.start);
  });

  beforeEach(async () => {
    await fixture();

    await vesting.addSale(sale.address);
  });

  describe("refund", () => {
    it("reverts the transaction if there is nothing to be refunded", async () => {
      await goToTime(await sale.end());
      await sale.connect(seller).setIndividualCap(0, { gasLimit: 10000000 });

      await expect(sale.refund(alice.address)).to.be.revertedWith(
        "No tokens to refund"
      );
    });

    it("refunds in aUSD the amount of tokens that could not be claimed", async () => {
      const fullSupply = await sale.totalTokensForSale();
      const refundAmount = parseUnits("1");
      const purchaseAmount = fullSupply.add(
        await sale.paymentTokenToToken(refundAmount)
      );
      await goToTime(await sale.start());
      await sale.connect(alice).buy(purchaseAmount);

      await goToTime(await sale.end());
      await sale
        .connect(seller)
        .setIndividualCap(fullSupply, { gasLimit: 10000000 });

      const beforeRefund = await aUSD.balanceOf(alice.address);
      await expect(sale.refund(alice.address)).to.emit(sale, "Refund");
      const afterRefund = await aUSD.balanceOf(alice.address);

      /// 1 wei error margin
      expect(afterRefund.sub(beforeRefund)).to.be.closeTo(refundAmount, 1);
    });

    it("is possible to refund all sales at once from the vesting contract", async () => {
      const fullSupply1 = await sale.totalTokensForSale();
      const refundAmount1 = parseUnits("1");
      const purchaseAmount1 = fullSupply1.add(
        await sale.paymentTokenToToken(refundAmount1)
      );
      const fullSupply2 = await secondSale.totalTokensForSale();
      const refundAmount2 = parseUnits("1");
      const purchaseAmount2 = fullSupply2.add(
        await sale.paymentTokenToToken(refundAmount2)
      );

      await vesting.addSale(secondSale.address);

      await goToTime(await sale.start());
      await sale.connect(alice).buy(purchaseAmount1);
      await goToTime(await secondSale.start());
      await secondSale.connect(alice).buy(purchaseAmount2);

      await goToTime(await secondSale.end());

      await sale
        .connect(seller)
        .setIndividualCap(fullSupply1, { gasLimit: 10000000 });
      await secondSale
        .connect(seller)
        .setIndividualCap(fullSupply2, { gasLimit: 10000000 });

      const beforeRefund = await aUSD.balanceOf(alice.address);
      await vesting.refund(alice.address);
      const afterRefund = await aUSD.balanceOf(alice.address);

      expect(afterRefund.sub(beforeRefund)).to.be.closeTo(
        refundAmount1.add(refundAmount2),
        2
      );
    });
  });

  describe("totalAllocated", () => {
    it("is zero before vesting starts", async () => {
      expect(await vesting.totalAllocated(alice.address)).to.equal(0);
    });

    it("is 100% after the vesting", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await secondSale.end());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.totalAllocated(alice.address)).to.equal(150);
    });
  });

  describe("claimed", () => {
    it("is zero before claiming", async () => {
      expect(await vesting.claimed(alice.address)).to.eq(0);
    });

    it("equals the already claimed amount after a claim", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await vesting.startTime());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimed(alice.address)).to.eq(0);
      await vesting.claim(alice.address);
      expect(await vesting.claimed(alice.address)).to.eq(50);
    });
  });

  describe("claimable", () => {
    it("is zero for addresses with no vesting", async () => {
      await increaseTime(time.duration.days(3));
      await sale.connect(seller).setIndividualCap(500, { gasLimit: 10000000 });
      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("is more than zero immediately after the vesting starts", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await vesting.startTime());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(50);
    });

    it("is 2/3 of the amount after 2/3 of vesting period", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await vesting.startTime());
      await increaseTime(time.duration.days(31));
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("is 100% of the amount after 100% of vesting and cliff period", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await vesting.startTime());
      await increaseTime(time.duration.days(31 * 3));
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("increases if not claimed during long periods", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await sale.end());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      await goToTime(await vesting.startTime());
      expect(await vesting.claimable(alice.address)).to.equal(50);

      await increaseTime(time.duration.days(70));
      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("does not go over the original total", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await increaseTime(time.duration.days(200));
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("goes back to 0 after claiming", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await vesting.startTime());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(50);
      await vesting.claim(alice.address);
      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("takes into account the individual cap", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);

      await goToTime(await vesting.startTime());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(50);
    });

    it("sums the total invested from multiple sales", async () => {
      await vesting.addSale(secondSale.address);

      await goToTime(await sale.start());
      await sale.connect(alice).buy(150);
      await goToTime(await secondSale.start());
      await secondSale.connect(alice).buy(50);

      await goToTime(await secondSale.end());
      await sale.connect(seller).setIndividualCap(150, { gasLimit: 10000000 });
      await secondSale
        .connect(seller)
        .setIndividualCap(50, { gasLimit: 10000000 });

      await goToTime(await vesting.startTime());

      expect(await vesting.claimable(alice.address)).to.equal(66);
    });

    it("takes into account each sale's individual cap", async () => {
      await vesting.addSale(secondSale.address);

      await goToTime(await sale.start());
      await sale.connect(alice).buy(200);
      await goToTime(await secondSale.start());
      await secondSale.connect(alice).buy(300);

      await goToTime(await secondSale.end());
      await sale.connect(seller).setIndividualCap(200, { gasLimit: 10000000 });
      await secondSale
        .connect(seller)
        .setIndividualCap(300, { gasLimit: 10000000 });

      await goToTime(await vesting.startTime());

      expect(await vesting.claimable(alice.address)).to.equal(166);
    });
  });

  describe("public sale claim", () => {
    it("allows me to claim 0 tokens before the vesting starts", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(100);

      await goToTime((await vesting.startTime()).sub(1000));
      await sale.connect(seller).setIndividualCap(100, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("allows me to claim 33% as soon as the vesting starts", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(100);

      await goToTime(await vesting.startTime());
      await sale.connect(seller).setIndividualCap(100, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(33);
    });

    it("allows me to claim 100% of my tokens on the beginning of the 3rd month", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(100);

      await goToTime(await vesting.startTime());
      await increaseTime(time.duration.days(30 * 2 + 1));
      await sale.connect(seller).setIndividualCap(100, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("emits an event", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(100);

      await increaseTime(time.duration.days(30 * 2 + 1));
      await sale.connect(seller).setIndividualCap(100, { gasLimit: 10000000 });

      await expect(vesting.claim(alice.address)).to.emit(
        vesting,
        "ClaimVesting"
      );
    });
  });

  describe("buy allocations in the sale", async () => {
    it("can be bought in chunks", async () => {
      await goToTime(await sale.start());
      await sale.connect(alice).buy(100);
      await sale.connect(alice).buy(150);

      await increaseTime(time.duration.days(30 * 3 + 1));
      await sale.connect(seller).setIndividualCap(250, { gasLimit: 10000000 });

      expect(await vesting.claimable(alice.address)).to.equal(250);
    });
  });
});
