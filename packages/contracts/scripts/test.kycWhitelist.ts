import { ethers, network, deployments } from "hardhat";
import { FractalRegistry } from "../src/types";

const whitelist = [
  {
    address: "0x0077014b4C74d9b1688847386B24Ed23Fdf14Be8",
    id: "0x0000000000000000000000000000000000000000000000000000000000000001",
  },
  {
    address: "0x74319C333f26677688e58a72C4C0DafC508728d8",
    id: "0x0000000000000000000000000000000000000000000000000000000000000002",
  },
  {
    address: "0x0054A49C85a8C8403EDD80f50f520E5104F88Da6",
    id: "0x0000000000000000000000000000000000000000000000000000000000000003",
  },
  {
    address: "0x607A1097771bD015Bb32f16C596c8D995b7eaC72",
    id: "0x0000000000000000000000000000000000000000000000000000000000000004",
  },
];

async function main() {
  const [signer] = await ethers.getSigners();
  const { get } = deployments;

  const { address } = await get("FractalRegistry");

  const registry = (await ethers.getContractAt(
    "FractalRegistry",
    address,
    signer
  )) as FractalRegistry;

  for (const { address, id } of whitelist) {
    await registry.addUserAddress(address, id);
    await registry.addUserToList(id, "plus");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
