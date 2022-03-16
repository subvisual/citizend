import { ethers, deployments, network } from "hardhat";
import { BigNumber } from "ethers";
import BN from "bn.js";
import { expect } from "chai";

import { time } from "@openzeppelin/test-helpers";
import { increaseTime } from "../timeHelpers";

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
  let vestingStart: BN;
  let convertedStart: BigNumber;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["sale"]);

    [owner, alice] = await ethers.getSigners();

    const citizendDeployment = await deployments.get("Citizend");
    const aUSDDeployment = await deployments.get("aUSD");
    const saleDeployment = await deployments.get("Sale");

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    citizend = Citizend__factory.connect(citizendDeployment.address, owner);
    sale = Sale__factory.connect(saleDeployment.address, owner);
  });

  beforeEach(async () => {
    await fixture();

    [owner, alice, seller] = await ethers.getSigners();
    const currentDate: Date = new Date();
    const beginningOfMonth: Date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const now = Math.floor(new Date().getTime() / 1000);

    vesting = await new Vesting__factory(owner).deploy(
      3,
      citizend.address,
      aUSD.address,
      sale.address,
      now,
      BigNumber.from(10000)
    );

    await citizend.transfer(vesting.address, 1000);
    await vesting.grantRole(await vesting.CAP_VALIDATOR(), seller.address);

    const allowance = ethers.constants.MaxUint256;
    await aUSD.connect(alice).approve(sale.address, allowance);
  });

  describe("refund", () => {
    it("reverts the transaction if there is nothing to be refunded", async () => {
      await expect(vesting.refund(alice.address)).to.be.revertedWith("No tokens to refund");
    });

    it("refunds in aUSD the amount of tokens that could not be claimed", async () => {
      await sale.setVesting(vesting.address);
      await sale.connect(alice).buy(await sale.tokenToPaymentToken(100));
      await vesting.connect(seller).setIndividualCap(50);

      const beforeRefund = await aUSD.balanceOf(alice.address)
      await expect(vesting.refund(alice.address)).to.emit(vesting, "Refunded").withArgs(alice.address, 50);
      const afterRefund = await aUSD.balanceOf(alice.address)

      expect(afterRefund.sub(beforeRefund)).to.eq(await sale.tokenToPaymentToken(50));
    });
  });
});
