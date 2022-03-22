import { Assertion } from "chai";

Assertion.addMethod("haveReceived", async function (functionName, times) {
  let obj = this._obj;

  new Assertion(await obj.test_Called(functionName, times || 1)).to.be.true;
});

declare global {
  export namespace Chai {
    interface Assertion {
      haveReceived(functionName: string, times?: number): Promise<void>;
    }
  }
}
