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

  const now = Math.floor(new Date(2022, 4, 11, 10, 40).getTime() / 1000);
  await vesting.setStartTime(now);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
