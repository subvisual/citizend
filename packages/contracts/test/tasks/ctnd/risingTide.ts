import hre, { ethers, deployments, run } from "hardhat";
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

import { currentTimestamp } from "../../../test/timeHelpers";

import { computeRisingTideCap } from "../../../src/tasks/ctnd/risingTide";

const { parseUnits } = ethers.utils;
const { MaxUint256 } = ethers.constants;

describe("ctnd:risingTide task", () => {
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
      owner
    );
    sale = await new Sale__factory(owner).deploy(
      aUSD.address,
      parseUnits("1"),
      start,
      end,
      500000,
      registry.address
    );
  });

  beforeEach(async () => {
    await fixture();
  });

  describe("rising tide calculation", () => {
    const gitbookExample = [
      50000, 100000, 75000, 50000, 100000, 75000, 20000, 100000, 80000, 100000,
    ];

    const smallExample = [5000];

    it("correctly computes the Gitbook example", async () => {
      await applyInvestments(gitbookExample);

      const cap = await computeRisingTideCap(sale.address, 0, hre);
      expect(cap).to.equal(54285);
    });

    it("finishes immediately for small investor lists", async () => {
      await applyInvestments(smallExample);

      const cap = await computeRisingTideCap(sale.address, 0, hre);
      expect(cap).to.equal(5000);
    });
  });

  async function applyInvestments(examples: number[]) {
    for (const [i, amount] of examples.entries()) {
      const signers = await ethers.getSigners();
      const signer = signers[i];

      const decimals = await aUSD.decimals();
      await aUSD
        .connect(signer)
        .mint(signer.address, parseUnits("1000", decimals));
      await aUSD.connect(signer).approve(sale.address, MaxUint256);
      await registry.addUserAddress(
        signer.address,
        ethers.utils.randomBytes(32)
      );

      await sale.connect(signer).buy(amount);
    }
  }
});
