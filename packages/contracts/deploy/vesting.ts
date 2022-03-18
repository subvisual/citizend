import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

import { getNetworkConfig } from "../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const aUSD = await get("aUSD");
  const citizend = await get("Citizend");
  const sale = await get("Sale");

  const { ctndVesting } = await getNetworkConfig();

  await deploy("Vesting", {
    log: true,
    from: deployer,
    args: [
      3,
      citizend.address,
      aUSD.address,
      sale.address,
      ctndVesting.start,
      BigNumber.from(10000),
    ],
  });
};

func.id = "vesting";
func.tags = ["vesting"];
func.dependencies = ["test_aUSD", "citizend", "sale"];

export default func;
