import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { BigNumber } from "ethers";

import { Sale__factory } from "../../types";
import { PurchaseEvent } from "../../types/Sale";

interface Account {
  address: string;
  amount: BigNumber;
}

task("ctnd:risingTide", "Compute Rising Tide cap for a $CTND sale")
  .addParam("sale", "index of the sale (first one is 1)")
  .setAction(async ({ sale }, hre) => {
    const { address, receipt } = await hre.deployments.get(sale);

    await computeRisingTide(address, receipt!.blockNumber, hre);
  });

export async function computeRisingTide(
  saleAddress: string,
  fromBlock: number,
  hre: HardhatRuntimeEnvironment
) {
  const { ethers } = hre;
  const [owner] = await ethers.getSigners();

  const sale = await Sale__factory.connect(saleAddress, owner);

  const filter = sale.filters.Purchase();

  // get all Payment events
  const purchases = await sale.queryFilter(filter, fromBlock, "latest");

  // compute address=>total CTND
  const totals = Object.values(
    purchases.reduce(
      (accum: Record<string, Account>, purchase: PurchaseEvent) => {
        const address = purchase.args.from;
        const amount = purchase.args.tokenAmount;

        if (!accum[purchase.args.from]) {
          accum[address] = {
            address,
            amount: BigNumber.from(0),
          };
        }

        accum[address].amount = accum[address].amount.add(amount);

        return accum;
      },
      {}
    )
  );

  // get total CTND supply available
  const totalAvailable = await sale.totalTokensForSale();

  // sort
  const sortedTotals = totals.sort((a1, a2) => {
    if (a1.amount.lt(a2.amount)) {
      return -1;
    } else if (a1.amount.gt(a2.amount)) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(sortedTotals);

  // calculate cap
  let cap = BigNumber.from(0);
}
