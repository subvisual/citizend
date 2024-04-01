import { ethers } from "hardhat";
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
  FractalRegistry,
  FractalRegistry__factory,
} from "../../../src/types";

import { goToTime, currentTimestamp } from "../../timeHelpers";

const { parseUnits, formatBytes32String } = ethers.utils;
const { MaxUint256 } = ethers.constants;

describe("Sale", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let carol: SignerWithAddress;

  let aUSD: MockERC20;
  let sale: Sale;
  let registry: FractalRegistry;
  let aUSDDecimals: number;

  let start: number;
  let end: number;

  beforeEach(async () => {
    [owner, alice, bob, carol] = await ethers.getSigners();

    start = await currentTimestamp();
    end = start + 60 * 60 * 24;

    aUSDDecimals = 12;
    aUSD = await new MockERC20__factory(owner).deploy(
      "aUSD",
      "aUSD",
      aUSDDecimals
    );

    registry = await new FractalRegistry__factory(owner).deploy(owner.address);

    sale = await new Sale__factory(owner).deploy(
      aUSD.address,
      parseUnits("0.3", 12),
      start,
      end,
      parseUnits("10"),
      registry.address
    );

    await aUSD.mint(alice.address, parseUnits("1000"));
    await aUSD.mint(bob.address, parseUnits("1000"));
    await aUSD.mint(owner.address, parseUnits("1000"));
    await aUSD.connect(alice).approve(sale.address, MaxUint256);
    await aUSD.connect(bob).approve(sale.address, MaxUint256);

    await registry.addUserAddress(alice.address, formatBytes32String("id1"));
    await registry.addUserToList(formatBytes32String("id1"), "plus");
    await registry.addUserAddress(bob.address, formatBytes32String("id2"));
    await registry.addUserToList(formatBytes32String("id2"), "plus");
  });

  describe("constructor", () => {
    it("sets the correct params", async () => {
      expect(await sale.paymentToken()).to.equal(aUSD.address);
      expect(await sale.rate()).to.equal(parseUnits("0.3", 12));
      expect(await sale.start()).to.equal(start);
      expect(await sale.end()).to.equal(end);

      expect(await sale.hasRole(await sale.DEFAULT_ADMIN_ROLE(), owner.address))
        .to.be.true;
      expect(await sale.hasRole(await sale.CAP_VALIDATOR_ROLE(), owner.address))
        .to.be.true;
    });
  });

  describe("withdraw", async () => {
    it("reverts if the caller is not the owner", async () => {
      await expect(sale.connect(alice).withdraw()).to.be.reverted;
    });

    it("reverts if no cap is set", async () => {
      await sale.connect(alice).buy(parseUnits("1"));
      await goToTime(end + 1000);

      await expect(sale.withdraw()).to.be.revertedWith("cap not yet set");
    });

    it("allows the owner to withdraw", async () => {
      await sale.connect(alice).buy(parseUnits("2"));
      await goToTime(end + 1000);
      await sale.setIndividualCap(parseUnits("2"), { gasLimit: 10000000 });

      const action = () => sale.connect(owner).withdraw();

      await expect(action).to.changeTokenBalance(
        aUSD,
        owner,
        parseUnits("0.6", 12)
      );
    });

    it("only allows withdrawing once", async () => {
      await sale.connect(alice).buy(parseUnits("2"));
      await goToTime(end + 1000);
      await sale.setIndividualCap(parseUnits("2"), { gasLimit: 10000000 });

      const action = () => sale.connect(owner).withdraw();

      await action();
      await expect(action()).to.be.revertedWith("already withdrawn");
    });

    it("does not withdraw amounts meant for refunds", async () => {
      await sale.connect(alice).buy(parseUnits("10"));
      await sale.connect(bob).buy(parseUnits("10"));
      await goToTime(end + 1000);
      await sale.setIndividualCap(parseUnits("5"), { gasLimit: 10000000 });

      const action = () => sale.connect(owner).withdraw();

      await expect(action).to.changeTokenBalance(
        aUSD,
        owner,
        parseUnits("3", 12)
      );
      expect(await aUSD.balanceOf(sale.address)).to.equal(parseUnits("3", 12));
    });
  });

  describe("buy", () => {
    it("registers an account", async () => {
      await sale.connect(alice).buy(parseUnits("2"));

      expect(await sale.uncappedAllocation(alice.address)).to.eq(
        parseUnits("2")
      );
    });

    it("emits a Purchase event", async () => {
      const amount = parseUnits("1");

      expect(await sale.connect(alice).buy(amount))
        .to.emit(sale, "Purchase")
        .withArgs(
          alice.address,
          amount,
          await sale.paymentTokenToToken(amount)
        );
    });

    it("correctly handles multiple purchases from the same account", async () => {
      const amount = parseUnits("1");

      expect(await sale.connect(alice).buy(amount))
        .to.emit(sale, "Purchase")
        .withArgs(alice.address, amount, parseUnits("1"));

      expect(await sale.connect(alice).buy(amount))
        .to.emit(sale, "Purchase")
        .withArgs(alice.address, amount, parseUnits("1"));

      expect(await sale.uncappedAllocation(alice.address)).to.eq(
        parseUnits("2")
      );
    });

    it("requires the caller to have gone through Fractal KYC", async () => {
      await registry.addUserAddress(alice.address, formatBytes32String("id1"));

      await sale.connect(alice).buy(parseUnits("2"));
      expect(await sale.uncappedAllocation(alice.address)).to.eq(
        parseUnits("2")
      );

      await expect(sale.connect(carol).buy(parseUnits("1"))).to.be.revertedWith(
        "not registered"
      );
    });

    it("can only use one address for a given fractal id", async () => {
      await registry.addUserAddress(carol.address, formatBytes32String("id1"));
      await sale.connect(alice).buy(parseUnits("2"));
      expect(await sale.uncappedAllocation(alice.address)).to.eq(
        parseUnits("2")
      );

      await expect(sale.connect(carol).buy(30)).to.be.revertedWith(
        "id registered to another address"
      );
    });
  });

  describe("paymentTokenToToken", async () => {
    it("converts 0 to 0", async () => {
      await expect(await sale.paymentTokenToToken(parseUnits("0"))).to.eq(0);
    });

    it("converts 0.30 $aUSD to 1 $CTND", async () => {
      const paymentAmount = parseUnits("0.30", aUSDDecimals);
      const tokens = parseUnits("1");

      expect(await sale.paymentTokenToToken(paymentAmount)).to.equal(tokens);
    });

    it("converts 300 $aUSD to 1000 $CTND", async () => {
      const paymentAmount = parseUnits("300", aUSDDecimals);
      const tokens = parseUnits("1000");

      expect(await sale.paymentTokenToToken(paymentAmount)).to.equal(tokens);
    });
  });

  describe("tokenToPaymentToken", async () => {
    it("converts 0 to 0", async () => {
      await expect(await sale.tokenToPaymentToken(parseUnits("0"))).to.eq(0);
    });

    it("converts 1 $CTND to 0.30 $aUSD", async () => {
      const tokens = parseUnits("1");
      const paymentAmount = parseUnits("0.30", aUSDDecimals);

      expect(await sale.tokenToPaymentToken(tokens)).to.equal(paymentAmount);
    });
  });

  describe("set individual cap", () => {
    it("allows me to set the cap after sale is over", async () => {
      await sale.connect(alice).buy(parseUnits("2"));
      await goToTime(end);

      await sale.setIndividualCap(parseUnits("2"), { gasLimit: 10000000 });

      expect(await sale.individualCap()).to.equal(parseUnits("2"));
      expect(await sale.risingTide_isValidCap()).to.equal(true);
    });

    it("fails to validate the cap for the wrong value", async () => {
      await sale.connect(alice).buy(parseUnits("2"));
      await goToTime(end);

      await sale.setIndividualCap(50, { gasLimit: 10000000 });

      expect(await sale.individualCap()).to.equal(50);
      expect(await sale.risingTide_isValidCap()).to.equal(false);
    });
  });

  describe("refundAmount", () => {
    it("is 0 before the cap is calculated", async () => {
      expect(await sale.refundAmount(alice.address)).to.equal(0);
    });

    it("is 0 if the amount has already been refunded", async () => {
      const amount = parseUnits("10");

      await sale.connect(alice).buy(amount.mul(2));

      await goToTime(end);
      await sale.setIndividualCap(amount, { gasLimit: 10000000 });
      await sale.refund(alice.address);

      expect(await sale.refundAmount(alice.address)).to.equal(0);
    });

    it("is 0 if the individual cap is higher than the invested total", async () => {
      await sale.connect(alice).buy(parseUnits("1"));
      await sale.connect(bob).buy(parseUnits("9"));

      await goToTime(end);
      await sale.setIndividualCap(parseUnits("9"), { gasLimit: 10000000 });

      expect(await sale.refundAmount(alice.address)).to.equal(0);
    });

    it("is the difference between the cap and the invested total", async () => {
      await sale.connect(alice).buy(parseUnits("2"));

      await goToTime(end);
      await sale.setIndividualCap(1000, { gasLimit: 10000000 });

      expect(await sale.refundAmount(alice.address)).to.equal(
        await sale.tokenToPaymentToken(1)
      );
    });
  });

  describe("refund", () => {
    it("fails if individual cap is not yet set", async () => {
      await sale.connect(alice).buy(parseUnits("2"));

      await expect(sale.refund(alice.address)).to.be.revertedWith(
        "cap not yet set"
      );
    });

    it("refunds the correct amount once the cap is set", async () => {
      const amount = parseUnits("10");

      await sale.connect(alice).buy(amount.mul(2));

      // set a cap of 1000 $CTND
      const cap = amount;
      await goToTime(end);
      await sale.setIndividualCap(cap, { gasLimit: 10000000 });

      await expect(() => sale.refund(alice.address)).to.changeTokenBalance(
        aUSD,
        alice,
        await sale.tokenToPaymentToken(amount)
      );
    });

    it("emits an event", async () => {
      const amount = parseUnits("10");

      await sale.connect(alice).buy(amount.mul(2));

      // set a cap of 1000 $CTND
      const cap = amount;
      await goToTime(end);
      await sale.setIndividualCap(cap, { gasLimit: 10000000 });

      await expect(sale.refund(alice.address))
        .to.emit(sale, "Refund")
        .withArgs(alice.address, await sale.tokenToPaymentToken(amount));
    });

    it("does not allow double refunds", async () => {
      const amount = parseUnits("10");

      await sale.connect(alice).buy(amount.mul(2));

      // set a cap of 1000 $CTND
      const cap = amount;
      await goToTime(end);
      await sale.setIndividualCap(cap, { gasLimit: 10000000 });

      await sale.refund(alice.address);

      await expect(sale.refund(alice.address)).to.be.revertedWith(
        "already refunded"
      );
    });
  });
});
