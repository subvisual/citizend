import { DeployFunction } from "hardhat-deploy/types";

import { getNetworkConfig } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const sale = await get("Sale");
  const citizend = await get("Citizend");

  const { ctndVesting } = await getNetworkConfig();

  await deploy("Vesting", {
    log: true,
    from: deployer,
    args: [3, citizend.address, sale.address, ctndVesting.start],
  });
};

func.id = "ctnd.vesting";
func.tags = ["ctnd", "ctnd.vesting"];
func.dependencies = ["ctnd.sale", "ctnd.token"];

export default func;
