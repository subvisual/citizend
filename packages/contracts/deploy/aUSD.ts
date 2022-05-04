import { ethers } from "hardhat";
import type { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../src/acala";

const { parseUnits } = ethers.utils;

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { execute } = hre.deployments;

  if (hre.network.live) {
    return;
  }

  await acalaDeploy(hre, "aUSD", {
    contract: "MockERC20",
    log: true,
    from: deployer,
    args: ["Acala USD", "aUSD", 12],
  });

  const [owner, alice, bob, carol] = await ethers.getSigners();

  await execute(
    "aUSD",
    { from: deployer, log: true },
    "mint",
    owner.address,
    parseUnits("1000")
  );
  await execute(
    "aUSD",
    { from: deployer, log: true },
    "mint",
    alice.address,
    parseUnits("1000")
  );
  await execute(
    "aUSD",
    { from: deployer, log: true },
    "mint",
    bob.address,
    parseUnits("1000")
  );
  await execute(
    "aUSD",
    { from: deployer, log: true },
    "mint",
    carol.address,
    parseUnits("1000")
  );
};

func.id = "aUSD";
func.tags = ["aUSD"];

export default func;
