import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { BigNumber } from "ethers";

import { Sale__factory } from "../../types";
import { PurchaseEvent } from "../../types/Sale";

task("ctnd:risingTide", "Compute Rising Tide cap for a $CTND sale")
  .addParam("sale", "index of the sale (first one is 1)")
  .setAction(async ({ sale }, hre) => {
    const { address, receipt } = await hre.deployments.get(sale);

    await computeRisingTideCap(address, receipt!.blockNumber, hre);
  });

export async function computeRisingTideCap(
  saleAddress: string,
  fromBlock: number,
  hre: HardhatRuntimeEnvironment
) {
  const { ethers } = hre;
  const [owner] = await ethers.getSigners();
  const sale = Sale__factory.connect(saleAddress, owner);

  // get all Payment events
  const filter = sale.filters.Purchase();
  const purchases = await sale.queryFilter(filter, fromBlock, "latest");

  // get total CTND supply available
  const available = await sale.totalTokensForSale();

  // compute address=>total CTND
  const amounts = reduceAmounts(purchases);

  // sort

  // calculate cap
  let cap = BigNumber.from(0);
  let capNextIdx = 0;
  let investorsLeft = amounts.length;
  let accum = BigNumber.from(0);

  // increase until cap is exceeded
  while (true) {
    if (capNextIdx == amounts.length) {
      return;
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
