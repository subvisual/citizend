import { ethers, network } from "hardhat";
import { FractalRegistry } from "../src/types";

async function main() {
  const [signer] = await ethers.getSigners();

  const registry = (await ethers.getContractAt(
    "FractalRegistry",
    "0x71e697918044e8439B27D9Ae88960a4fFdd2E88f",
    signer
  )) as FractalRegistry;

  // await registry.addUserAddress(
  //   "0x0077014b4C74d9b1688847386B24Ed23Fdf14Be8",
  //   "0x0000000000000000000000000000000000000000000000000000000000000000"
  // );
  // await registry.addUserAddress(
  //   "0x74319C333f26677688e58a72C4C0DafC508728d8",
  //   "0x0000000000000000000000000000000000000000000000000000000000000001"
  // );

  await registry.addUserToList(
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    "kycPlus"
  );
  await registry.addUserToList(
    "0x0000000000000000000000000000000000000000000000000000000000000001",
    "kycPlus"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
