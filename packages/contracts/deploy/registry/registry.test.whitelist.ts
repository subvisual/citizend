import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

import { getNetworkName } from "../../src/deployConfigs";

const { hexZeroPad, hexlify } = ethers.utils;

const devWhitelist = [
  "0x74319C333f26677688e58a72C4C0DafC508728d8",
  // "0x0054A49C85a8C8403EDD80f50f520E5104F88Da6",
  // "0x607A1097771bD015Bb32f16C596c8D995b7eaC72",
];

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { execute, read } = hre.deployments;

  if (!["hardhat"].includes(getNetworkName())) {
    return;
  }

  const alreadyDelegate = await read(
    "FractalRegistry",
    {},
    "getFractalId",
    deployer,
  );

  if (alreadyDelegate != ethers.constants.HashZero) {
    return;
  }

  const fullWhitelist = [deployer, ...devWhitelist];
  let id = 1;

  for (const address of fullWhitelist) {
    const hexID = hexZeroPad(hexlify(id), 32);

    await execute(
      "FractalRegistry",
      { from: deployer, log: true },
      "addUserAddress",
      address,
      hexID,
    );
    await execute(
      "FractalRegistry",
      { from: deployer, log: true },
      "addUserToList",
      hexID,
      "plus",
    );
    id++;
  }
};

func.id = "fractal-registry.test.whitelist";
func.tags = ["fractal-registry", "fractal-registry.test.whitelist"];
func.dependencies = ["fractal-registry.deploy"];

export default func;
