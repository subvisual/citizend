import type { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get } = hre.deployments;

  const citizend = await get("Citizend");

  await acalaDeploy(hre, "Staking", {
    from: deployer,
    args: [citizend.address],
    log: true,
  });
};

func.id = "staking";
func.tags = ["staking"];
func.dependencies = ["ctnd.token"];

export default func;
