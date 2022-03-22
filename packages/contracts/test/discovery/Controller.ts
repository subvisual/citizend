import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Controller, Controller__factory } from "../../src/types";

const { parseUnits } = ethers.utils;

describe("Controller", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let controller: Controller;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["controller"]);

    [owner, alice, bob] = await ethers.getSigners();

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

  describe("registerProject", () => {
    it("registers a project", async () => {
      await controller.registerProject(
        alice.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const project = await controller.getProject(0);

      expect(project.id).to.eq(0);
      expect(project.token).to.eq(alice.address);
      expect(project.saleSupply).to.eq(parseUnits("1000"));
      expect(project.rate).to.eq(parseUnits("2"));
      expect(project.status).to.eq(1);
    });

    it("emits a RegisterProject event", async () => {
      expect(
        await controller.registerProject(
          alice.address,
          parseUnits("1000"),
          parseUnits("2")
        )
      )
        .to.emit(controller, "RegisterProject")
        .withArgs(0);
    });

    it("increases the project counter", async () => {
      await controller.registerProject(
        alice.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      expect(
        await controller.registerProject(
          bob.address,
          parseUnits("1000"),
          parseUnits("2")
        )
      )
        .to.emit(controller, "RegisterProject")
        .withArgs(1);
    });
  });
});
