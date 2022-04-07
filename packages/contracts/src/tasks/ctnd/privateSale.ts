import { task } from "hardhat/config";
import { ethers } from "hardhat";
import csv from "fast-csv";

import type { HardhatRuntimeEnvironment } from "hardhat/types";

task("ctnd:importPrivateSale", "Import private sale records")
  .addParam("file", "csv file to import")
  .setAction(async ({ file }, hre) => {
    await importCSV(hre, file);
  });

const { parseUnits } = ethers.utils;

interface Row {
  address: string;
  amount: string;
  cliff: number;
  nonce: number;
}

async function importCSV(hre: HardhatRuntimeEnvironment, file: string) {
  const { Vesting__factory } = await import("../../types");

  const [owner] = await ethers.getSigners();
  const vestingAddress = (await hre.deployments.get("Vesting")).address;
  const vesting = Vesting__factory.connect(vestingAddress, owner);

  const rows = await readCSV(file);

  for (let current = 0; current < rows.length; current += 1) {
    const { address, amount, cliff, nonce } = rows[current];

    const amountInCents = parseUnits(amount);

    // TODO check nonce
    if (true) {
      await vesting.createPrivateSaleVest(address, amountInCents, cliff, nonce);
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
          nonce: row.Nonce,
        })
      )
      .on("end", () => resolve(result));
  });
}