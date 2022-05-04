import type { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

import { acalaDeploy } from "../../src/acala";

const { parseUnits } = ethers.utils;

import { getNetworkConfig } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get, read } = hre.deployments;

  const aUSD = await get("aUSD");
  const registry = await get("FractalRegistry");

  const { ctndSale1 } = await getNetworkConfig();
  const decimals = await read("aUSD", {}, "decimals");

  await acalaDeploy(hre, "Sale1", {
    contract: "Sale",
    log: true,
    from: deployer,
    args: [
      aUSD.address,
      parseUnits("0.3", decimals),
      ctndSale1.start,
      ctndSale1.end,
      ctndSale1.supply,
      registry.address,
    ],
  });
};

func.id = "ctnd.sale1";
func.tags = ["ctnd", "ctnd.sale1"];
func.dependencies = ["aUSD", "fractal-registry"];

export default func;
