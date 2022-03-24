import { ethers, deployments } from "hardhat";
import csv from "fast-csv";
import path from "path";

import { Vesting__factory } from "../../src/types";

let CSV_FILE = path.resolve(__dirname, "..", "privatesale.csv");

const { parseUnits } = ethers.utils;

interface Row {
  address: string;
  amount: string;
  cliff: number;
  nonce: number;
}

function readCSV(): Promise<Row[]> {
  return new Promise((resolve, reject) => {
    const result: Row[] = [];

    csv
      .parseFile(CSV_FILE, { headers: true })
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

async function main() {
  const [owner] = await ethers.getSigners();
  const vestingAddress = (await deployments.get("Vesting")).address;
  const vesting = Vesting__factory.connect(vestingAddress, owner);

  const rows = await readCSV();

  for (let current = 0; current < rows.length; current += 1) {
    const { address, amount, cliff } = rows[current];

    const amountInCents = parseUnits(amount);

    // TODO check nonce
    if (true) {
      await vesting.createPrivateSaleVest(address, amountInCents, cliff);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
