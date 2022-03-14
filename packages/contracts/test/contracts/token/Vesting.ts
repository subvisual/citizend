import { ethers, deployments, network } from "hardhat";
import { BigNumber } from "ethers";
import BN from "bn.js";
import { expect } from "chai";

import { time } from "@openzeppelin/test-helpers";

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
  let fakeSaleContract: SignerWithAddress;
  let seller: SignerWithAddress;

  let citizend: Citizend;
  let vesting: Vesting;
  let vestingStart: BN;
  let convertedStart: BigNumber;

  async function increaseTime(seconds: BN): Promise<void> {
    await network.provider.send("evm_increaseTime", [seconds.toNumber()]);
    await network.provider.send("evm_mine");
  }

  async function decreaseTime(seconds: BN): Promise<void> {
    await network.provider.send("evm_increaseTime", [seconds.toNumber() * -1]);
    await network.provider.send("evm_mine");
  }

  async function goToTime(seconds: BN): Promise<void> {
    let currentTime = new Date().getTime() / 1000;

    await network.provider.send("evm_increaseTime", [
      seconds.toNumber() - currentTime,
    ]);
    await network.provider.send("evm_mine");
  }

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["citizend"]);

    [owner] = await ethers.getSigners();

    const citizendDeployment = await deployments.get("Citizend");

    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
  });

  beforeEach(async () => {
    await fixture();

    [owner, alice, fakeSaleContract, seller] = await ethers.getSigners();
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
      fakeSaleContract.address,
      convertedStart
    );
    await citizend.transfer(vesting.address, 1000);
    await vesting.grantRole(await vesting.PRIVATE_SELLER(), seller.address);
  });

  describe("constructor", () => {
    it("sets the correct attributes", async () => {
      expect(await vesting.startTime()).to.eq(convertedStart);
      expect(await vesting.publicSaleVestingMonths()).to.eq(3);
      expect(await vesting.publicSaleCliffMonths()).to.eq(0);
      expect(await vesting.token()).to.eq(citizend.address);
      expect(await vesting.saleContract()).to.eq(fakeSaleContract.address);
    });
  });

  describe("balance", () => {
    it("returns the correct balance to start", async () => {
      expect(await vesting.balance()).to.eq(1000);
    });

    it("returns the correct balance after a claim", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(30 * 3 + 1));
      await vesting.claim(alice.address);

      expect(await vesting.balance()).to.eq(850);
    });
  });

  describe("remainingBalance", () => {
    it("returns the correct balance to start", async () => {
      expect(await vesting.remainingBalance()).to.eq(1000);
    });

    it("returns the correct balance after a vesting starts", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(30 * 3 + 1));

      expect(await vesting.remainingBalance()).to.eq(850);
    });
  });

  describe("createPublicSaleVesting", () => {
    it("creates a vesting with public sale parameters", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);

      let account = await vesting.accounts(alice.address);
      expect(account.totalAmount).to.eq(150);
      expect(account.vestingMonths).to.eq(3);
      expect(account.cliffMonths).to.eq(0);
      expect(account.accountType).to.eq(1);
      expect(account.leftToClaim).to.eq(150);
    });

    it("is not possible to create a vesting for more than the remaining balance", async () => {
      await expect(
        vesting
          .connect(fakeSaleContract)
          .createPublicSaleVest(alice.address, 1001)
      ).to.be.revertedWith("Insufficient balance");
    });

    it("adds to an existing vesting", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 100);
      await increaseTime(time.duration.days(30 * 3 + 1));

      expect(await vesting.claimable(alice.address)).to.equal(250);
    });

    it("fails if beneficiary already has private vesting", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 150, 3);

      await expect(
        vesting
          .connect(fakeSaleContract)
          .createPublicSaleVest(alice.address, 100)
      ).to.be.revertedWith("Account already has private vesting");
    });

    it("fails if sender is not the sale contract", async () => {
      await expect(vesting.createPublicSaleVest(alice.address, 100)).to.be
        .reverted;
    });

    it("emits an event", async () => {
      await expect(
        vesting
          .connect(fakeSaleContract)
          .createPublicSaleVest(alice.address, 150)
      )
        .to.emit(vesting, "VestingCreated")
        .withArgs(alice.address, 150, 1);
    });
  });

  describe("createPrivateSaleVesting", () => {
    it("creates a vesting with private sale parameters", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 150, 3);

      let account = await vesting.accounts(alice.address);
      expect(account.totalAmount).to.eq(150);
      expect(account.vestingMonths).to.eq(36);
      expect(account.accountType).to.eq(2);
      expect(account.leftToClaim).to.eq(150);
    });

    it("can customize the cliff period", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 150, 3);

      let account = await vesting.accounts(alice.address);
      expect(account.cliffMonths).to.eq(3);
    });

    it("is not possible to create a vesting for more than the remaining balance", async () => {
      await expect(
        vesting.connect(seller).createPrivateSaleVest(alice.address, 1001, 3)
      ).to.be.revertedWith("Insufficient balance");
    });

    it("adds to an existing vesting", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 150, 3);
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 100, 3);
      await increaseTime(time.duration.days(30 * 39 + 1));

      expect(await vesting.claimable(alice.address)).to.equal(250);
    });

    it("fails if beneficiary already has public vesting", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);

      await expect(
        vesting.connect(seller).createPrivateSaleVest(alice.address, 100, 3)
      ).to.be.revertedWith("Account already has public vesting");
    });

    it("fails if cliff period is greater than vesting period", async () => {
      await expect(
        vesting.connect(seller).createPrivateSaleVest(alice.address, 100, 7)
      ).to.be.revertedWith("Cliff months too big");
    });

    it("emits an event", async () => {
      await expect(
        vesting.connect(seller).createPrivateSaleVest(alice.address, 150, 3)
      )
        .to.emit(vesting, "VestingCreated")
        .withArgs(alice.address, 150, 2);
    });
  });

  describe("claimable", () => {
    it("is zero for addresses with no vesting", async () => {
      await increaseTime(time.duration.days(3));
      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("is zero for the duration of the cliff", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 150, 3);
      await increaseTime(time.duration.days(3));

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("is more than zero after initial cliff period", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(3));

      expect(await vesting.claimable(alice.address)).to.equal(50);
    });

    it("is 2/3 of the amount after 2/3 of vesting period", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(31));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("is 100% of the amount after 100% of vesting and cliff period", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(61));

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("increases if not claimed during long periods", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(20));

      expect(await vesting.claimable(alice.address)).to.equal(50);

      await increaseTime(time.duration.days(60));

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("does not go over the original total", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(200));

      expect(await vesting.claimable(alice.address)).to.equal(150);
    });

    it("goes back to 0 after claiming", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimable(alice.address)).to.equal(50);
      await vesting.claim(alice.address);
      expect(await vesting.claimable(alice.address)).to.equal(0);
    });
  });

  describe("claimed", () => {
    it("is zero before claiming", async () => {
      expect(await vesting.claimed(alice.address)).to.eq(0);
    });

    it("equals the already claimed amount after a claim", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(10));

      expect(await vesting.claimed(alice.address)).to.eq(0);
      await vesting.claim(alice.address);
      expect(await vesting.claimed(alice.address)).to.eq(50);
    });
  });

  describe("totalVested", () => {
    it("is zero before vesting starts", async () => {
      expect(await vesting.totalVested(alice.address)).to.equal(0);
    });

    it("is 100% after the vesting", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 150);
      await increaseTime(time.duration.days(61));

      expect(await vesting.totalVested(alice.address)).to.equal(150);
    });
  });

  describe("public sale claim", () => {
    it("allows me to claim 0 tokens before the cliff starts", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 100);
      await decreaseTime(time.duration.days(1));

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("allows me to claim 33% of my tokens after 2 weeks", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 100);
      await increaseTime(time.duration.weeks(2));

      expect(await vesting.claimable(alice.address)).to.equal(33);
    });

    it("allows me to claim 100% of my tokens on the beginning of the 3rd month", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 100);
      await increaseTime(time.duration.days(30 * 2 + 1));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("emits an event", async () => {
      await vesting
        .connect(fakeSaleContract)
        .createPublicSaleVest(alice.address, 100);
      await increaseTime(time.duration.days(30 * 2 + 1));

      await expect(vesting.claim(alice.address)).to.emit(
        vesting,
        "VestingClaimed"
      );
    });
  });

  describe("private sale claim", () => {
    it("allows me to claim 0 tokens before the cliff starts", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 100, 3);

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("allows me to claim 0 tokens after 1 month", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 100, 3);
      await increaseTime(time.duration.days(30));

      expect(await vesting.claimable(alice.address)).to.equal(0);
    });

    it("allows me to claim some amount tokens after the full cliff period", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 100, 3);
      await increaseTime(time.duration.days(30 * 3 + 2));

      expect(await vesting.claimable(alice.address)).to.equal(2);
    });

    it("allows me to claim 100% after the full cliff and vesting period", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 100, 3);
      await increaseTime(time.duration.days(3 * 30 + 36 * 30));

      expect(await vesting.claimable(alice.address)).to.equal(100);
    });

    it("emits an event", async () => {
      await vesting
        .connect(seller)
        .createPrivateSaleVest(alice.address, 100, 1);
      await increaseTime(time.duration.days(30 * 2 + 1));

      await expect(vesting.claim(alice.address)).to.emit(
        vesting,
        "VestingClaimed"
      );
    });
  });
});
