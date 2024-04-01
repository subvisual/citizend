import { task } from "hardhat/config";
import csv from "fast-csv";

import type { HardhatRuntimeEnvironment } from "hardhat/types";

task("ctnd:importPrivateSale", "Import private sale records")
  .addParam("file", "csv file to import")
  .setAction(async ({ file }, hre) => {
    await importCSV(hre, file);
  });

interface Row {
  address: string;
  amount: string;
  cliff: number;
  vestingMonths: number;
  nonce: number;
}

async function importCSV(hre: HardhatRuntimeEnvironment, file: string) {
  const { Vesting__factory } = await import("../../types");
  const { parseUnits } = hre.ethers.utils;

  const [owner] = await hre.ethers.getSigners();
  const vestingAddress = (await hre.deployments.get("Vesting")).address;
  const vesting = Vesting__factory.connect(vestingAddress, owner);

  const rows = await readCSV(file);

  for (let current = 0; current < rows.length; current += 1) {
    const { address, amount, cliff, vestingMonths, nonce } = rows[current];

    const amountInCents = parseUnits(amount);

    // TODO check nonce
    if (true) {
      await vesting.createPrivateSaleVest(
        address,
        amountInCents,
        cliff,
        vestingMonths,
        nonce,
      );
    }
  }
}

function readCSV(file: string): Promise<Row[]> {
  return new Promise((resolve, reject) => {
    const result: Row[] = [];

    csv
      .parseFile(file, { headers: true })
      .on("error", (error) => reject(error))
      .on("data", (row) =>
        result.push({
          address: row.Address,
          amount: row.Amount,
          cliff: row.Cliff,
          vestingMonths: row.Vesting,
          nonce: row.Nonce,
        }),
      )
      .on("end", () => resolve(result));
  });
}
