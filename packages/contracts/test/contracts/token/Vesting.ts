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
  Sale,
  Sale__factory,
} from "../../../src/types";

import { goToTime } from "../../timeHelpers";

const { parseUnits } = ethers.utils;
const { AddressZero } = ethers.constants;

describe("Vesting", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let fakeSale: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let vesting: Vesting;
  let sale: Sale;

  let saleStart: number;
  let saleEnd: number;
  let vestingStart: BigNumber;

  beforeEach(async () => {
    [owner, alice, fakeSale] = await ethers.getSigners();

    saleStart = Math.floor(new Date().getTime() / 1000);
    saleEnd = saleStart + 60 * 60 * 24;

    const currentDate: Date = new Date();
    const beginningOfMonth: Date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    vestingStart = BigNumber.from(beginningOfMonth.getTime() / 1000);
    await goToTime(vestingStart);

    aUSD = await new MockERC20__factory(owner).deploy("aUSD", "aUSD");
    citizend = await new Citizend__factory(owner).deploy();

    sale = await new Sale__factory(owner).deploy(
      aUSD.address,
      parseUnits("0.3"),
      saleStart,
      saleEnd
    );

    vesting = await new Vesting__factory(owner).deploy(
      3,
      citizend.address,
      [sale.address],
      vestingStart,
      BigNumber.from(10000)
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
    it("accumulates multiple public sales", async () => {});
  });

  describe("totalVestedPublic", () => {
    it("is non-zero after a public vest is created");
    it("is zero after a private vest is created");
  });

  describe("totalVestedPrivate", () => {
    it("is zero after a public vest is created");
    it("is non-zero after a private vest is created");
  });

  describe("claimablePublicSales", () => {
    it("is non zero after one vesting month");
    it("is zero with a sale while vesting period does not start");
    it("does not include private sale amounts");
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
