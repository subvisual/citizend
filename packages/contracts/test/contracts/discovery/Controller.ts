import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  Controller,
  Controller__factory,
  Project,
  Project__factory,
} from "../../src/types";

import { findEvent } from "../shared/utils";

const { parseUnits } = ethers.utils;

describe("Controller", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let controller: Controller;
  let project: Project;

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
    it("sets the correct params", async () => {
      expect(
        await controller.hasRole(
          await controller.DEFAULT_ADMIN_ROLE(),
          owner.address
        )
      ).to.be.true;
    });
  });

  describe("registerProject", () => {
    it("registers a project", async () => {
      const tx = await controller.registerProject(
        "My Project",
        alice.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const event = await findEvent(tx, "ProjectRegistered");
      const projectAddress = event?.args?.project;

      project = Project__factory.connect(projectAddress, owner);

      expect(await project.description()).to.eq("My Project");
      expect(await project.token()).to.eq(alice.address);
      expect(await project.saleSupply()).to.eq(parseUnits("1000"));
      expect(await project.rate()).to.eq(parseUnits("2"));
    });

    it("emits a ProjectRegistered event", async () => {
      expect(
        await controller.registerProject(
          "My Project",
          alice.address,
          parseUnits("1000"),
          parseUnits("2")
        )
      ).to.emit(controller, "ProjectRegistered");
    });
  });
});
