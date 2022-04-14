import { ethers, deployments } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  Controller,
  Controller__factory,
  Project,
  Project__factory,
  MockERC20,
  MockERC20__factory,
} from "../../../src/types";

import { findEvent } from "../../shared/utils";

const { parseUnits } = ethers.utils;

describe("Controller", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let controller: Controller;
  let project: Project;
  let projectToken: MockERC20;

  const fixture = deployments.createFixture(async ({ deployments, ethers }) => {
    await deployments.fixture(["controller"]);

    [owner, alice, bob] = await ethers.getSigners();

    const controllerDeployment = await deployments.get("Controller");

    controller = Controller__factory.connect(
      controllerDeployment.address,
      owner
    );
  });

  beforeEach(async () => {
    await fixture();

    projectToken = await new MockERC20__factory(owner).deploy(
      "ProjectToken",
      "ProjectToken"
    );
  });

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
        projectToken.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const event = await findEvent(tx, "ProjectRegistered");
      const projectAddress = event?.args?.project;

      project = Project__factory.connect(projectAddress, owner);

      expect(await project.description()).to.eq("My Project");
      expect(await project.token()).to.eq(projectToken.address);
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

  describe("createBatch", () => {
    it("creates a batch", async () => {
      const tx = await controller.registerProject(
        "My Project",
        projectToken.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const event = await findEvent(tx, "ProjectRegistered");
      const projectAddress = event?.args?.project;

      const project = Project__factory.connect(projectAddress, owner);

      await projectToken
        .connect(owner)
        .transfer(project.address, parseUnits("1000"));

      await project.approveByLegal();
      await project.approveByManager();

      expect(await project.approvedByLegal()).to.equal(true);
      expect(await project.approvedByManager()).to.equal(true);
      expect(await project.isReadyForListing()).to.equal(true);

      await expect(controller.createBatch([projectAddress], 1)).to.not.be.reverted;
    });

    it("reverts if a project is not approved", async () => {
      const tx = await controller.registerProject(
        "My Project",
        projectToken.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const event = await findEvent(tx, "ProjectRegistered");
      const projectAddress = event?.args?.project;

      await expect(controller.createBatch([projectAddress], 1)).to.be.revertedWith("project not ready");
    });

    it("reverts if a project is already included in a different batch", async () => {
      const tx = await controller.registerProject(
        "My Project",
        projectToken.address,
        parseUnits("1000"),
        parseUnits("2")
      );

      const event = await findEvent(tx, "ProjectRegistered");
      const projectAddress = event?.args?.project;

      const project = Project__factory.connect(projectAddress, owner);

      await projectToken
        .connect(owner)
        .transfer(project.address, parseUnits("1000"));

      await project.approveByLegal();
      await project.approveByManager();

      expect(await project.approvedByLegal()).to.equal(true);
      expect(await project.approvedByManager()).to.equal(true);
      expect(await project.isReadyForListing()).to.equal(true);

      await expect(controller.createBatch([projectAddress], 1)).to.not.be.reverted;
      await expect(controller.createBatch([projectAddress], 1)).to.be.revertedWith("already in a batch");
    });
  });
});
