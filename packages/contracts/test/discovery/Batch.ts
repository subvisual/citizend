import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Batch, Batch__factory } from "../../src/types";

import { goToTime, currentTimestamp } from "../timeHelpers";

describe("Batch", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let fakeProject: SignerWithAddress;
  let anotherFakeProject: SignerWithAddress;

  let batch: Batch;
  let oneDay: number;
  let votingStart: number;

  beforeEach(async () => {
    [owner, alice, bob, fakeProject, anotherFakeProject] =
      await ethers.getSigners();
    oneDay = 60 * 60 * 24;
    votingStart = await currentTimestamp();

    batch = await new Batch__factory(owner).deploy(
      1,
      [fakeProject.address, anotherFakeProject.address],
      2,
      {
        start: votingStart,
        end: votingStart + 10 * oneDay,
      }
    );
  });

  describe("constructor", async () => {
    it("should set the correct values", async () => {
      const votingPeriod = await batch.votingPeriod();

      expect(votingPeriod.start).to.eq(votingStart);
      expect(votingPeriod.end).to.eq(10 * oneDay + votingStart);
      expect(await batch.batchId()).to.eq(1);
      expect(await batch.projectAddresses(0)).to.eq(fakeProject.address);
      expect(await batch.projectAddresses(1)).to.eq(anotherFakeProject.address);
      expect(await batch.slotCount()).to.eq(2);
      expect(await batch.singleSlotDuration()).to.eq(5 * oneDay);
    });
  });

  describe("vote", () => {
    it("allows a user to vote", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);

      expect(await batch.userVoteCount(alice.address)).to.eq(1);
      expect(await batch.projectVoteCount(fakeProject.address)).to.eq(1);
      expect(
        await batch.userVotesPerProject(fakeProject.address, alice.address)
      ).to.be.true;
    });

    it("does not allow a user to vote twice in the same project", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);
      await expect(
        batch.connect(alice).vote(fakeProject.address, 0, 0)
      ).to.be.revertedWith("already voted in this project");
    });
  });

  describe("getProject", () => {
    it("returns the correct project", async () => {
      const project = await batch.getProject(fakeProject.address);

      expect(project.projectAddress).to.eq(fakeProject.address);
      expect(project.status).to.eq(0);
    });

    it("takes the votes into account", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);
      await batch.connect(bob).vote(fakeProject.address, 0, 0);
      await batch.connect(alice).vote(anotherFakeProject.address, 0, 0);
      await goToTime(votingStart + 5 * oneDay);

      const project = await batch.getProject(fakeProject.address);

      expect(project.projectAddress).to.eq(fakeProject.address);
      expect(project.status).to.eq(1);
    });

    it("marks projects as losers after the end of the batch", async () => {
      await goToTime(votingStart + 11 * oneDay);

      const project = await batch.getProject(fakeProject.address);

      expect(project.projectAddress).to.eq(fakeProject.address);
      expect(project.status).to.eq(2);
    });
  });

  describe("getWinners", () => {
    it("calculates the winner if one exists", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);

      await goToTime(votingStart + 5 * oneDay);
      const winners = await batch.getCurrentWinners();

      expect(winners[0]).to.eq(fakeProject.address);
    });

    it("calculates the winners of multiple slots", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);
      await batch.connect(bob).vote(fakeProject.address, 0, 0);
      await batch.connect(alice).vote(anotherFakeProject.address, 0, 0);

      await goToTime(votingStart + 5 * oneDay);
      let winners = await batch.getCurrentWinners();

      expect(winners.length).to.eq(1);
      expect(winners[0]).to.eq(fakeProject.address);

      await goToTime(votingStart + 10 * oneDay);

      winners = await batch.getCurrentWinners();

      expect(winners.length).to.eq(2);
      expect(winners[0]).to.eq(fakeProject.address);
      expect(winners[1]).to.eq(anotherFakeProject.address);
    });

    it("calculates the winners of multiple slots with votes in multiple slots", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);
      await batch.connect(bob).vote(fakeProject.address, 0, 0);
      await batch.connect(alice).vote(anotherFakeProject.address, 0, 0);

      await goToTime(votingStart + 5 * oneDay);
      let winners = await batch.getCurrentWinners();

      await batch.connect(bob).vote(anotherFakeProject.address, 0, 0);
      expect(winners.length).to.eq(1);
      expect(winners[0]).to.eq(fakeProject.address);

      await goToTime(votingStart + 10 * oneDay);

      winners = await batch.getCurrentWinners();

      expect(winners.length).to.eq(2);
      expect(winners[0]).to.eq(fakeProject.address);
      expect(winners[1]).to.eq(anotherFakeProject.address);
    });

    it("works even when it doesn't actually have to calculate anything", async () => {
      await batch.connect(alice).vote(fakeProject.address, 0, 0);
      await goToTime(votingStart + 5 * oneDay);
      await batch.connect(alice).vote(anotherFakeProject.address, 0, 0);

      let winners = await batch.getCurrentWinners();

      expect(winners.length).to.eq(1);
      expect(winners[0]).to.eq(fakeProject.address);
    });
  });
});
