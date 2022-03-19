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

describe("Vesting", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let vesting: Vesting;
  let sale: Sale;

  let saleStart: number;
  let saleEnd: number;
  let vestingStart: BigNumber;

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();

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
      expect(await vesting.saleAddresses(0)).to.eq(sale.address);
    });
  });
});
