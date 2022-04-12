import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  TestProjectVoting,
  TestProjectVoting__factory,
  Project,
  Project__factory,
} from "../../../src/types";

import { goToTime, currentTimestamp } from "../../timeHelpers";

const { parseUnits } = ethers.utils;

describe("ProjectVoting", () => {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let carol: SignerWithAddress;
  let fakeToken: SignerWithAddress;

  let projectVoting: TestProjectVoting;
  let oneDay: number;
  let votingStart: number;
  let votingEnd: number;

  beforeEach(async () => {
    [owner, alice, bob, carol, fakeToken] = await ethers.getSigners();
    oneDay = 60 * 60 * 24;
    votingStart = (await currentTimestamp()) + oneDay;
    votingEnd = votingStart + oneDay * 10;

    projectVoting = await new TestProjectVoting__factory(owner).deploy(
      {
        start: votingStart,
        end: votingEnd,
      },
      [],
      2
    );
  });

  describe("calculateWeightedVote", async () => {
    it("is equal to the initial bonus when the voting starts", async () => {
      const weight = await projectVoting.calculateWeightedVote(votingStart);

      expect(weight).to.eq(parseUnits("0.05"));
    });

    it("is equal to the final bonus when the voting ends", async () => {
      const weight = await projectVoting.calculateWeightedVote(votingEnd);

      expect(weight).to.be.closeTo(parseUnits("0"), parseUnits("0.001"));
    });

    it("goes down linerarly as time goes by", async () => {
      expect(
        await projectVoting.calculateWeightedVote(votingStart + oneDay)
      ).to.be.closeTo(parseUnits("0.045"), parseUnits("0.001"));

      expect(
        await projectVoting.calculateWeightedVote(votingStart + oneDay * 8)
      ).to.be.closeTo(parseUnits("0.01"), parseUnits("0.001"));
    });
  });

  describe("defineWinners", async () => {
    it("does not duplicate winners after each vote", async () => {
      let project1: Project = await new Project__factory(owner).deploy(
        "project1",
        fakeToken.address,
        1000,
        10
      );

      let project2: Project = await new Project__factory(owner).deploy(
        "project2",
        fakeToken.address,
        1000,
        10
      );

      let project3: Project = await new Project__factory(owner).deploy(
        "project3",
        fakeToken.address,
        1000,
        10
      );

      await projectVoting.setNumSlots(3);
      await goToTime(votingStart);
      await projectVoting.connect(alice).vote(project1.address);
      await goToTime(votingStart + 4 * oneDay);
      await projectVoting.connect(bob).vote(project2.address);
      await goToTime(votingStart + 8 * oneDay);
      await projectVoting.connect(carol).vote(project3.address);
      await goToTime(votingStart + 10 * oneDay);

      const winners = await projectVoting.getWinners();

      expect(winners.length).to.eq(3);
      expect(winners[0]).to.eq(project1.address);
      expect(winners[1]).to.eq(project2.address);
      expect(winners[2]).to.eq(project3.address);
    });
  });
});
