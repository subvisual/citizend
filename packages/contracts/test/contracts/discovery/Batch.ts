describe("Batch", () => {
  describe("constructor", () => {
    it("works with valid arguments");
    it("fails with an empty list of projects");
    it("fails with an address that's not a project");
    it("fails if one of the projects is not whitelisted");
  });

  describe("vote", () => {
    it("accepts votes for projects");
    it("does not accept two votes from the same user in the same project");
    it(
      "does not accept votes from people who exhausted their votes for this batch"
    );
    it("allows including an investment in the peoples pool");
    it("allows including an investment in the stakers pool");
    it("fails to an investment in the peoples pool for non-eligible users");
  });

  describe("getWinners", () => {
    // assume a batch competing for 2 slots over 2 weeks
    it("includes 1 winner after 1 week of votes");
    it("includes 2 winners after 2 weeks of votes");
    it("has no winners if no votes are received");
  });

  describe("votesPerProject", () => {
    it("counts 1 vote per project, linearly");
  });

  describe("weightedVotesPerProject", () => {
    // this will be used for tiebreaks
    it("gives more weight to early votes, following a linear curve");
  });

  describe("investPeoplesPool", () => {
    it("accepts valid investments during voting period");
    it("accepts valid investments during investment period");
    it("does not accept investments after investment period");
    it("does not accept investments from non-eligible users");
  });

  describe("investStakersPool", () => {
    it("accepts valid investments during voting period");
    it("accepts valid investments during investment period");
    it("does not accept investments after investment period");
    it("does not accept investments from non-eligible users");
  });
});
