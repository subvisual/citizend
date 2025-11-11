// @ts-nocheck
import { MerkleTree } from "merkletreejs";
import fs from "fs";
import { keccak256, encodePacked } from "viem";

let test_addresses = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x5C3099098BCaF0E1F94b16f1c516127b99535be2",
  "0xeF1d9b810e3F7c59796F694e82Ff5872dCb5E498",
  "0x8fDD962D2d7979F78Aa103E059C1F1a3D610167d",
  "0x6E336729686A9964dD5D0fDDD57B30d057144bfb",
  "0x7a6Da886dA5C7a3a4aa7eD187b2253C20FE58af7",
];

let sale_addresses = [
  "0xf74EF6B5968591AaBCD659bba221c1bB1F80E131",
  "0x1D031AF0A9c0cD58e7ECe27a1b4de370AFF57D6c",
  "0x895B0bC0f28CAACDfAc33f747a2bC714edfb04Eb",
];

const root = 0x8f01d3093ac8686620cade48849cf16f17ebf59fa84357bd5512541e33806424;

async function main(address: string) {
  let addresses: string[][];

  if (true) {
    addresses = test_addresses;
  } else {
    addresses = fs
      .readFileSync("allowlist.txt")
      .toString()
      .split("\n")
      .filter((s: string) => s.length > 0);
  }

  const data = addresses.map((addr: string) => {
    return {
      address: addr,
      leaf: keccak256(encodePacked(["address"], [addr])),
    };
  });

  console.log(data);

  const leafs = data.map(({ leaf }: any) => leaf);
  const merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true });

  console.log(`Merkle root: ${merkleTree.getHexRoot()}`);

  const key = [address];
  console.log(`\n\nProof for ${key}:`);
  console.log(
    merkleTree.getHexProof(keccak256(encodePacked(["address"], key))),
  );
}

main(process.argv[2])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
