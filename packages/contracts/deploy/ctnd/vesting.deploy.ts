import { DeployFunction } from "hardhat-deploy/types";

import { getNetworkConfig } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const sale = await get("Sale1");
  const citizend = await get("Citizend");

  const { ctndVesting } = await getNetworkConfig();

  await deploy("Vesting", {
    log: true,
    from: deployer,
    args: [3, citizend.address, [], ctndVesting.start, 10000], // TODO input correct private sale value
  });
};

func.id = "ctnd.vesting";
func.tags = ["ctnd", "ctnd.vesting"];
func.dependencies = ["ctnd.sale1", "ctnd.token"];

export default func;
