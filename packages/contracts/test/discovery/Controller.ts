import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Controller, Controller__factory } from "../../src/types";

describe("Controller", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;

  let controller: Controller;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["controller"]);

    [owner, alice] = await ethers.getSigners();

    const controllerDeployment = await deployments.get("Controller");

    controller = Controller__factory.connect(
      controllerDeployment.address,
      owner
    );
  });

  beforeEach(() => fixture());

  describe("constructor", () => {
    it("sets the correct params", async () => {});
  });
});
