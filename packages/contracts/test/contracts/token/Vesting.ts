import { ethers, deployments, network } from "hardhat";
import { BigNumber } from "ethers";
import BN from "bn.js";
import { expect } from "chai";

import { time } from "@openzeppelin/test-helpers";
import { increaseTime, decreaseTime, goToTime } from "../../timeHelpers";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  MockERC20,
  MockERC20__factory,
  Citizend,
  Citizend__factory,
  Vesting,
  Vesting__factory,
} from "../../../src/types";

describe("Vesting", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let seller: SignerWithAddress;
  let saleContract: SignerWithAddress;

  let aUSD: MockERC20;
  let citizend: Citizend;
  let vesting: Vesting;
  let vestingStart: BN;
  let convertedStart: BigNumber;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["test_aUSD", "citizend"]);

    [owner] = await ethers.getSigners();

    const citizendDeployment = await deployments.get("Citizend");
    const aUSDDeployment = await deployments.get("aUSD");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
  });

  beforeEach(async () => {
    await fixture();

    [owner, alice, seller, saleContract] = await ethers.getSigners();
    const currentDate: Date = new Date();
    const beginningOfMonth: Date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    vestingStart = new BN(beginningOfMonth.getTime() / 1000);
    convertedStart = BigNumber.from(vestingStart.toNumber());
    await goToTime(vestingStart);

    vesting = await new Vesting__factory(owner).deploy(
      3,
      citizend.address,
      [saleContract.address],
      convertedStart,
      BigNumber.from(10000)
    );
    await citizend.transfer(vesting.address, 1000);
    await vesting.grantRole(
      await vesting.SALE_CONTRACT(),
      saleContract.address
    );
  });

  describe("constructor", () => {
    it("sets the correct attributes", async () => {
      expect(await vesting.startTime()).to.eq(convertedStart);
      expect(await vesting.publicSaleVestingMonths()).to.eq(3);
      expect(await vesting.publicSaleCliffMonths()).to.eq(0);
      expect(await vesting.token()).to.eq(citizend.address);
      expect(await vesting.saleAddresses(0)).to.eq(saleContract.address);
    });
  });

  describe("createPublicSaleVesting", () => {
    it("creates a vesting with public sale parameters", async () => {
      await vesting.connect(saleContract).createPublicSaleVest(alice.address);

      let account = await vesting.accounts(alice.address);
      expect(account.vestingMonths).to.eq(3);
      expect(account.cliffMonths).to.eq(0);
      expect(account.accountType).to.eq(1);
      expect(account.claimedAmount).to.eq(0);
    });

    it("fails if beneficiary already has private vesting", async () => {
      await vesting
        .connect(saleContract)
        .createPrivateSaleVest(alice.address, 150, 3);

      await expect(
        vesting.connect(saleContract).createPublicSaleVest(alice.address)
      ).to.be.revertedWith("Account already has private vesting");
    });

    it("fails if sender is not the sale contract", async () => {
      await expect(vesting.createPublicSaleVest(alice.address)).to.be.reverted;
    });
  });

  describe("createPrivateSaleVesting", () => {
    it("creates a vesting with private sale parameters", async () => {
      await vesting
        .connect(saleContract)
        .createPrivateSaleVest(alice.address, 150, 3);

      let account = await vesting.accounts(alice.address);
      expect(account.vestingMonths).to.eq(36);
      expect(account.accountType).to.eq(2);
      expect(account.claimedAmount).to.eq(0);
    });

    it("can customize the cliff period", async () => {
      await vesting
        .connect(saleContract)
        .createPrivateSaleVest(alice.address, 150, 3);

      let account = await vesting.accounts(alice.address);
      expect(account.cliffMonths).to.eq(3);
    });

    it("fails if beneficiary already has public vesting", async () => {
      await vesting.connect(saleContract).createPublicSaleVest(alice.address);

      await expect(
        vesting
          .connect(saleContract)
          .createPrivateSaleVest(alice.address, 100, 3)
      ).to.be.revertedWith("Account already has public vesting");
    });

    it("fails if cliff period is greater than vesting period", async () => {
      await expect(
        vesting
          .connect(saleContract)
          .createPrivateSaleVest(alice.address, 100, 7)
      ).to.be.revertedWith("Cliff months too big");
    });

    it("rejects the transaction when it would go above the private cap", async () => {
      await expect(
        vesting
          .connect(saleContract)
          .createPrivateSaleVest(alice.address, 11000, 3)
      ).to.be.revertedWith("Private sale cap reached");
    });
  });
});
