import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

import { getNetworkConfig } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const aUSD = await get("aUSD");
  const registry = await get("FractalRegistry");

  const { ctndSale2 } = await getNetworkConfig();

  await deploy("Sale2", {
    contract: "Sale",
    log: true,
    from: deployer,
    args: [
      aUSD.address,
      parseUnits("0.3"),
      ctndSale2.start,
      ctndSale2.end,
      ctndSale2.supply,
      registry.address,
    ],
  });
};

func.id = "ctnd.sale2";
func.tags = ["ctnd", "ctnd.sale2"];
func.dependencies = ["aUSD", "fractal-registry"];

export default func;
