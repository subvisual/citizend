import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

import { getNetworkConfig } from "../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const aUSD = await get("aUSD");
  const citizend = await get("Citizend");

  const { ctndSale2 } = await getNetworkConfig();

  await deploy("Sale2", {
    contract: "Sale",
    log: true,
    from: deployer,
    args: [
      citizend.address,
      aUSD.address,
      parseUnits("0.3"),
      ctndSale2.start,
      ctndSale2.end,
    ],
  });
};

func.id = "sale2";
func.tags = ["sale2"];
func.dependencies = ["test_aUSD", "citizend"];

export default func;
