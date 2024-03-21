// @ts-nocheck
import { MerkleTree } from "merkletreejs";
import fs from "fs";
import { keccak256, encodePacked } from "viem";

let test_addresses = [
  ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "ID"],
  ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", "ID"],
  ["0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", "ID"],
  ["0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", "ID"],
];

async function main(address: string, credential: string) {
  let addresses: string[][];

  if (process.env.TEST_MODE) {
    addresses = test_addresses;
  } else {
    addresses = fs
      .readFileSync("allowlist.txt")
      .toString()
      .split("\n")
      .filter((s: string) => s.length > 0)
      .map((s: string) => {
        return s.split(",");
      });
  }

  console.log("Addresses: ", addresses);

  const data = addresses.map((addr: string) => {
    return {
      address: addr,
      leaf: keccak256(encodePacked(["address", "string"], addr)),
    };
  });

  const leafs = data.map(({ leaf }: any) => leaf);
  const merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true });

  console.log(`Merkle root: ${merkleTree.getHexRoot()}`);

  const key = [address, credential];
  console.log(`\n\nProof for ${key}:`);
  console.log(
    merkleTree.getHexProof(keccak256(encodePacked(["address", "string"], key)))
  );
}

main(process.argv[2], process.argv[3])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
