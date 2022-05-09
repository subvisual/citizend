import { task } from "hardhat/config";
import { BigNumber } from "ethers";

task("ctnd:risingTide", "Compute Rising Tide cap for a $CTND sale")
  .addParam("sale", "index of the sale (first one is 1)")
  .setAction(async ({ sale }, hre) => {
    const { address, receipt } = await hre.deployments.get(sale);

    // need to import this dynamically, since it won't exist on the first run
    const { Sale__factory } = await import("../../types");

    const { ethers } = hre;
    const [owner] = await ethers.getSigners();
    const saleContract = Sale__factory.connect(address, owner);

    const cap = await computeRisingTideCap(saleContract, receipt!.blockNumber);

    await submitRisingTideCap(ethers, sale, cap);
  });

export async function computeRisingTideCap(sale: any, fromBlock: number) {
  // get all Payment events
  const filter = sale.filters.Purchase();
  const purchases = await sale.queryFilter(filter, fromBlock, "latest");

  // get total CTND supply available
  const available = await sale.totalTokensForSale();

  // compute address=>total CTND
  const amounts = reduceAmounts(purchases);

  // calculate cap
  let cap = BigNumber.from(0);
  let capNextIdx = 0;
  let investorsLeft = amounts.length;
  let accum = BigNumber.from(0);

  // increase until cap is exceeded
  while (true) {
    if (capNextIdx == amounts.length) {
      return cap;
    }

    cap = amounts[capNextIdx];
    let hypotheticalAllocation = cap.mul(investorsLeft);

    if (hypotheticalAllocation.gt(available)) {
      // this is already too much. break and reduce
      break;
    }

    accum = accum.add(cap);
    capNextIdx++;
    investorsLeft--;
  }

  // at this point, the cap is just whatever amount is not yet allocated (i.e.:
  // without the small investors) divided equally by everyone else
  return available.sub(accum).div(investorsLeft);
}

interface PurchaseEvent {
  args: {
    from: string;
    tokenAmount: BigNumber;
  };
}

function reduceAmounts(purchases: PurchaseEvent[]): BigNumber[] {
  return Object.values(
    purchases.reduce(
      (accounts: Record<string, BigNumber>, purchase: PurchaseEvent) => {
        const { from, tokenAmount } = purchase.args;
        const previousAmount = accounts[from] ? accounts[from] : 0;

        accounts[from] = tokenAmount.add(previousAmount);

        return accounts;
      },
      {}
    )
  ).sort((a1, a2) => {
    if (a1.lt(a2)) {
      return -1;
    } else if (a1.gt(a2)) {
      return 1;
    } else {
      return 0;
    }
  });
}

export async function submitRisingTideCap(
  ethers: any,
  sale: any,
  cap: BigNumber
) {
  const gasLimit = 10000000;

  console.log(`Submitting cap: ${ethers.utils.formatUnits(cap)}`);
  await sale.setIndividualCap(cap, { gasLimit });

  while (await sale.risingTide_validating()) {
    console.log("Continuing validation...");
    await sale.risingTide_validate({ gasLimit });
  }

  console.log("Done");
}
