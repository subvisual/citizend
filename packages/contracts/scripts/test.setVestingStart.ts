import { ethers, network, deployments } from "hardhat";
import { Vesting } from "../src/types";

async function main() {
  const [signer] = await ethers.getSigners();
  const { get } = deployments;

  const { address } = await get("Vesting");

  const vesting = (await ethers.getContractAt(
    "Vesting",
    address,
    signer
  )) as Vesting;

  await vesting.setStartTime(beginningOfNextMonthTimestamp());
}

function beginningOfNextMonthTimestamp(): number {
  const date = new Date();
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1, 12);

  return Math.floor(nextMonth.getTime() / 1000);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
