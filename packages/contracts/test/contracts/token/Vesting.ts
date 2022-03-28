import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Citizend,
  Citizend__factory,
  Vesting,
  Vesting__factory,
  MockSale,
  MockSale__factory,
} from "../../../src/types";

import { goToTime, currentTimestamp, currentDate } from "../../timeHelpers";
import "./matchers";

const { AddressZero } = ethers.constants;

describe("Vesting", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let vesting: Vesting;
  let sale: MockSale;
  let sale2: MockSale;

  let saleStart: number;
  let saleEnd: number;
  let vestingStart: number;
  let oneDay = 60 * 60 * 24;

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();

    saleStart = await currentTimestamp();
    saleEnd = saleStart + 60 * 60 * 24;

    const now = await currentDate();
    const beginningOfNextMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      1,
      12
    );
    vestingStart = Math.floor(beginningOfNextMonth.getTime() / 1000);

    aUSD = await new MockERC20__factory(owner).deploy("aUSD", "aUSD");
    citizend = await new Citizend__factory(owner).deploy(owner.address);

    sale = await new MockSale__factory(owner).deploy();
    sale2 = await new MockSale__factory(owner).deploy();

    vesting = await new Vesting__factory(owner).deploy(
      3,
      citizend.address,
      [sale.address],
      vestingStart,
      10000
    );
    await citizend.transfer(vesting.address, 1000);
  });

  describe("constructor", () => {
    it("sets the correct attributes", async () => {
      expect(await vesting.startTime()).to.eq(vestingStart);
      expect(await vesting.publicSaleVestingMonths()).to.eq(3);
      expect(await vesting.publicSaleCliffMonths()).to.eq(0);
      expect(await vesting.token()).to.eq(citizend.address);
      expect(await vesting.sales(0)).to.eq(sale.address);
    });
  });

  describe("addSale", () => {
    it("adds a new sale contract", async () => {
      await vesting.addSale(sale2.address);

      expect(await vesting.sales(0)).to.equal(sale.address);
      expect(await vesting.sales(1)).to.equal(sale2.address);
    });

    it("does not allow contracts that do not implement ISale", async () => {
      await expect(vesting.addSale(vesting.address)).to.be.revertedWith(
        "not an ISale"
      );
    });

    it("is not callable by a non-admin", async () => {
      await expect(vesting.connect(alice).addSale(sale2.address)).to.be
        .reverted;
    });
  });

  describe("totalAllocated", () => {
    it("sums all sales, public and private", async () => {
      await sale.test_addAllocation(alice.address, 1);
      await vesting.createPrivateSaleVest(alice.address, 2, 0, 123);

      expect(await vesting.totalAllocated(alice.address)).to.equal(3);
    });
  });

  describe("totalAllocatedPublic", () => {
    it("is non-zero after a public vest is created", async () => {
      await sale.test_addAllocation(alice.address, 1);

      expect(await vesting.totalAllocatedPublic(alice.address)).to.equal(1);
    });

    it("is zero after a private vest is created", async () => {
      await vesting.createPrivateSaleVest(alice.address, 1, 0, 123);

      expect(await vesting.totalAllocatedPublic(alice.address)).to.equal(0);
    });
  });

  describe("totalAllocatedPrivate", () => {
    it("is zero after a public vest is created", async () => {
      await sale.test_addAllocation(alice.address, 1);

      expect(await vesting.totalAllocatedPrivate(alice.address)).to.equal(0);
    });
    it("is non-zero after a private vest is created", async () => {
      await vesting.createPrivateSaleVest(alice.address, 1, 0, 123);

      expect(await vesting.totalAllocatedPrivate(alice.address)).to.equal(1);
    });
  });

  describe("claimablePublic", () => {
    it("is non zero after one vesting month", async () => {
      await sale.test_addAllocation(alice.address, 300);

      await goToTime(vestingStart);

      expect(await vesting.claimablePublic(alice.address)).to.equal(100);
    });

    it("is zero with a sale while vesting period does not start", async () => {
      await sale.test_addAllocation(alice.address, 300);

      await goToTime(vestingStart - oneDay);

      expect(await vesting.claimablePublic(alice.address)).to.equal(0);
    });

    it("does not include private sale amounts", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);

      await goToTime(vestingStart - oneDay);

      expect(await vesting.claimablePublic(alice.address)).to.equal(0);
    });
  });

  describe("claimablePrivateSale", () => {
    it("allows me to claim 0 tokens before the cliff starts", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 3, 123);

      await goToTime(vestingStart - oneDay);

      expect(await vesting.claimablePrivate(alice.address)).to.equal(0);
    });

    it("is zero during the cliff period", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 3, 123);

      await goToTime(vestingStart);

      expect(await vesting.claimablePrivate(alice.address)).to.equal(0);
    });

    it("allows me to claim some amount tokens after the full cliff period", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);

      await goToTime(vestingStart);

      expect(await vesting.claimablePrivate(alice.address)).to.equal(8);
    });

    it("allows me to claim 100% after the full cliff and vesting period", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 3, 123);
      await goToTime(vestingStart + oneDay * (3 * 30 + 36 * 30));

      expect(await vesting.claimable(alice.address)).to.equal(300);
    });

    it("does not include public sale amounts", async () => {
      await sale.test_addAllocation(alice.address, 300);
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);

      await goToTime(vestingStart);

      expect(await vesting.claimablePrivate(alice.address)).to.equal(8);
    });
  });

  describe("createPrivateSaleVest", () => {
    it("does not create vestings for used nonces", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);

      await expect(
        vesting.createPrivateSaleVest(alice.address, 300, 0, 123)
      ).to.be.revertedWith("nonce already used");
    });
  });

  describe("claimable", () => {
    it("includes public sales", async () => {
      await sale.test_addAllocation(alice.address, 300);

      await goToTime(vestingStart);

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("includes private sales", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);

      await goToTime(vestingStart);

      expect(await vesting.claimable(alice.address)).to.equal(8);
    });

    it("sums public and private sales", async () => {
      await sale.test_addAllocation(alice.address, 300);
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);

      await goToTime(vestingStart);

      expect(await vesting.claimable(alice.address)).to.equal(108);
    });
  });

  describe("claim", () => {
    it("claims public sale claimable amounts", async () => {
      await sale.test_addAllocation(alice.address, 300);
      await goToTime(vestingStart);

      await vesting.claim(alice.address);

      expect(await citizend.balanceOf(alice.address)).to.equal(100);
    });

    it("claims private sale claimable amounts", async () => {
      await vesting.createPrivateSaleVest(alice.address, 300, 0, 123);
      await goToTime(vestingStart);

      await vesting.claim(alice.address);

      expect(await citizend.balanceOf(alice.address)).to.equal(8);
    });
  });

  describe("refund", () => {
    it("refunds via the public sale contract", async () => {
      await sale.test_addRefund(alice.address, 300);
      await goToTime(vestingStart);

      await vesting.refund(alice.address);

      expect(sale).to.haveReceived("refund");
    });
  });
});
