import { expect } from "chai";

describe("Controller", () => {
  describe("registerProject", () => {
    it("registers a project");
    it("emits a RegisterProject event");
    it("increases the project counter");

    it("fails without a name");
    it("fails without a token address");
    it("fails without a sale price");
    it("fails without a sale supply");
    if("fails if caller is not KYC'd")
  });

  describe("createBatch",()=>{
    it('creates a new batch contract');
    it('emits an event')
    it('increments the batch counter');
  })

  describe("getCurrentBatch"()=>{
    it('gets the currently active batch address');
    it('does not change after creating a new pending batch');
  });
});
