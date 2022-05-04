import { ethers } from "hardhat";
import type { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../../src/acala";
import { getNetworkConfig } from "../../src/deployConfigs";

const { parseUnits } = ethers.utils;

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get, read } = hre.deployments;

  const aUSD = await get("aUSD");
  const registry = await get("FractalRegistry");

  const { ctndSale2 } = await getNetworkConfig();
  const decimals = await read("aUSD", {}, "decimals");

  if (!ctndSale2) {
    return;
  }

  await acalaDeploy(hre, "Sale2", {
    contract: "Sale",
    log: true,
    from: deployer,
    args: [
      aUSD.address,
      parseUnits("0.3", decimals),
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
