import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

import { getNetworkConfig } from "../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const aUSD = await get("aUSD");
  const citizend = await get("Citizend");

  const { ctndSale } = await getNetworkConfig();

  await deploy("SecondSale", {
    contract: "Sale",
    log: true,
    from: deployer,
    args: [
      citizend.address,
      aUSD.address,
      parseUnits("0.3"),
      ctndSale.start,
      ctndSale.end,
    ],
  });
};

func.id = "second_sale";
func.tags = ["second_sale"];
func.dependencies = ["test_aUSD", "citizend"];

export default func;
