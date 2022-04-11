import { ethers } from "hardhat";
import { expect } from "chai";

import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  TestProjectVoting,
  TestProjectVoting__factory,
} from "../../../src/types";

import { goToTime, currentTimestamp } from "../../timeHelpers";

const { parseUnits } = ethers.utils;

describe("ProjectVoting", () => {
  let owner: SignerWithAddress;

  let projectVoting: TestProjectVoting;
  let oneDay: number;
  let votingStart: number;
  let votingEnd: number;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    oneDay = 60 * 60 * 24;
    votingStart = (await currentTimestamp()) + oneDay;
    votingEnd = votingStart + oneDay * 10;

    projectVoting = await new TestProjectVoting__factory(owner).deploy({
      start: votingStart,
      end: votingEnd,
    });
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
});
