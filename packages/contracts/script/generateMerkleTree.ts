// @ts-nocheck
import { MerkleTree } from "merkletreejs";
import fs from "fs";
import { keccak256, encodePacked } from "viem";

let test_addresses = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
];

let sale_addresses = [
  "0xf74EF6B5968591AaBCD659bba221c1bB1F80E131",
  "0x1D031AF0A9c0cD58e7ECe27a1b4de370AFF57D6c",
  "0x895B0bC0f28CAACDfAc33f747a2bC714edfb04Eb",
];

const root = 0x8f01d3093ac8686620cade48849cf16f17ebf59fa84357bd5512541e33806424;

async function main(address: string) {
  let addresses: string[][];

  if (process.env.TEST_MODE) {
    addresses = test_addresses;
  } else {
    addresses = fs
      .readFileSync("allowlist.txt")
      .toString()
      .split("\n")
      .filter((s: string) => s.length > 0);
  }

  console.log("Addresses: ", addresses);

  const data = addresses.map((addr: string) => {
    return {
      address: addr,
      leaf: keccak256(encodePacked(["address"], [addr])),
    };
  });

  const leafs = data.map(({ leaf }: any) => leaf);
  const merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true });

  console.log(`Merkle root: ${merkleTree.getHexRoot()}`);

  const key = [address];
  console.log(`\n\nProof for ${key}:`);
  console.log(
    merkleTree.getHexProof(keccak256(encodePacked(["address"], key)))
  );
}

main(process.argv[2])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
