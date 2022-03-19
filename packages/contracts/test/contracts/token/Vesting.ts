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

const { AddressZero } = ethers.constants;

describe("Vesting", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let fakeSale: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let vesting: Vesting;
  let sale: MockSale;

  let saleStart: number;
  let saleEnd: number;
  let vestingStart: number;
  let oneDay = 60 * 60 * 24;

  beforeEach(async () => {
    [owner, alice, fakeSale] = await ethers.getSigners();

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
    citizend = await new Citizend__factory(owner).deploy();

    sale = await new MockSale__factory(owner).deploy();

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
      await vesting.addSale(fakeSale.address);

      expect(await vesting.sales(0)).to.equal(sale.address);
      expect(await vesting.sales(1)).to.equal(fakeSale.address);
    });

    it("does not allow the zero address", async () => {
      await expect(vesting.addSale(AddressZero)).to.be.revertedWith(
        "cannot be 0x0"
      );
    });

    it("is not callable by a non-admin", async () => {
      await expect(vesting.connect(alice).addSale(fakeSale.address)).to.be
        .reverted;
    });
  });

  // TODO
  describe("totalVested", () => {
    it("accumulates multiple public sales", async () => {
      await sale.test_addAllocation(alice.address, 1);
      await vesting.createPrivateSaleVest(alice.address, 2, 0);

      expect(await vesting.totalVested(alice.address)).to.equal(3);
    });
  });

  describe("totalVestedPublic", () => {
    it("is non-zero after a public vest is created", async () => {
      await sale.test_addAllocation(alice.address, 1);

      expect(await vesting.totalVestedPublic(alice.address)).to.equal(1);
    });

    it("is zero after a private vest is created", async () => {
      await vesting.createPrivateSaleVest(alice.address, 1, 0);

      expect(await vesting.totalVestedPublic(alice.address)).to.equal(0);
    });
  });

  describe("totalVestedPrivate", () => {
    it("is zero after a public vest is created", async () => {
      await sale.test_addAllocation(alice.address, 1);

      expect(await vesting.totalVestedPrivate(alice.address)).to.equal(0);
    });
    it("is non-zero after a private vest is created", async () => {
      await vesting.createPrivateSaleVest(alice.address, 1, 0);

      expect(await vesting.totalVestedPrivate(alice.address)).to.equal(1);
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
      await vesting.createPrivateSaleVest(alice.address, 300, 0);

      await goToTime(vestingStart - oneDay);

      expect(await vesting.claimablePublic(alice.address)).to.equal(0);
    });
  });

  // TODO
  describe("claimablePrivateSale", () => {
    it("is non zero after one vesting month");
    it("is zero with a sale while vesting period does not start");
    it("does not include public sale amounts");
  });

  describe("claimable", () => {
    it("includes public sales");
    it("includes private sales");
    it("sums public and private sales");
  });

  describe("claim", () => {
    it("claims public sale claimable amounts");
    it("claims private sale claimable amounts");
  });

  describe("refund", () => {});
});
