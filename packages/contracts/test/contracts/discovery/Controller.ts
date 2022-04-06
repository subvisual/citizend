import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  Controller,
  Controller__factory,
  Project,
  Project__factory,
} from "../../../src/types";

import { findEvent } from "../../shared/utils";

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

    it("fails to register a project that is not known to the controller");
    it("fails to register a project that's already registered in a batch");
    it("fails to register a project that is not ready for listing");
  });

  describe("approveProjectByOwner", () => {
    it("sets the project status to whitelisted", async () => {
      await controller.registerProject(
        alice.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const project = await controller.getProject(0);

      expect(project.status).to.eq(1);

      await controller.approveProjectByOwner(project.id);

      const approvedProject = await controller.getProject(0);

      expect(approvedProject.status).to.eq(2);
    });

    it("reverts if the project is not created", async () => {
      await expect(controller.approveProjectByOwner(0)).to.be.revertedWith(
        "invalid state for project"
      );
    });

    it("only allows an admin to whitelist a project", async () => {
      await controller.registerProject(
        alice.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      await expect(controller.connect(alice).approveProjectByOwner(0)).to.be
        .reverted;
      await expect(controller.connect(owner).approveProjectByOwner(0)).to.not.be
        .reverted;
    });
  });

  describe("createBatch", () => {
    it("creates a new batch", async () => {
      await controller.registerProject(
        alice.address,
        parseUnits("1000"),
        parseUnits("1")
      );

      controller.createBatch([0], { start: 1, end: 2 }, 4);

      await controller.connect(owner).approveProjectByOwner(0);

      await expect(controller.createBatch([0], { start: 1, end: 2 }, 4)).to.not
        .be.reverted;
    });

    it("reverts when creating a batch without projects", async () => {
      await expect(
        controller.createBatch([], { start: 1, end: 2 }, 4)
      ).to.be.revertedWith("can't create batch without projects");
    });

    it("reverts if a project is not whitelisted", async () => {
      await controller.registerProject(
        alice.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      await controller.connect(owner).approveProjectByOwner(0);

      await expect(
        controller.createBatch([0, 1], { start: 1, end: 2 }, 4)
      ).to.be.revertedWith("project is not whitelisted");
    });
  });
});
