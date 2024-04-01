import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  Sale,
  MockERC20,
  MockERC20__factory,
  Sale__factory,
  FractalRegistry,
  FractalRegistry__factory,
} from "../../../src/types";

import { currentTimestamp } from "../../timeHelpers";

import { computeRisingTideCap } from "../../../src/tasks/ctnd/risingTide";
import { applyInvestments } from "./helpers";

const { parseUnits } = ethers.utils;

describe("ctnd:risingTide task, with correct exchange rates", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let carol: SignerWithAddress;

  let aUSD: MockERC20;
  let sale: Sale;
  let registry: FractalRegistry;

  let start: number;
  let end: number;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["aUSD", "fractal-registry"]);

    [owner, alice, bob, carol] = await ethers.getSigners();

    const aUSDDeployment = await deployments.get("aUSD");
    const registryDeployment = await deployments.get("FractalRegistry");

    start = await currentTimestamp();
    end = start + 60 * 60 * 24;

    aUSD = MockERC20__factory.connect(aUSDDeployment.address, owner);
    registry = FractalRegistry__factory.connect(
      registryDeployment.address,
      owner,
    );
    sale = await new Sale__factory(owner).deploy(
      aUSD.address,
      parseUnits("0.3", await aUSD.decimals()),
      start,
      end,
      parseUnits("1"),
      registry.address,
    );
  });

  beforeEach(async () => {
    await fixture();
  });

  describe("1 CTND for sale, 3 investments of 0.5 aUSD each, should cap to 0.33 CTND each", () => {
    it("correctly computes the cap in CTND amount", async () => {
      const decimals = await aUSD.decimals();
      const aUSDAmounts = [
        parseUnits("0.5", decimals),
        parseUnits("0.5", decimals),
        parseUnits("0.5", decimals),
      ];

      const ctndAmounts = await Promise.all(
        aUSDAmounts.map((amount) => sale.paymentTokenToToken(amount)),
      );

      await applyInvestments(aUSD, registry, sale, ctndAmounts);

      const cap = await computeRisingTideCap(sale, 0);

      expect(cap).to.be.closeTo(parseUnits("0.333"), parseUnits("0.001"));
    });
  });
});
