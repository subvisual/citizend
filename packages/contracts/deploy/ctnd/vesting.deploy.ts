import type { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get } = hre.deployments;

  const citizend = await get("Citizend");

  await acalaDeploy(hre, "Vesting", {
    log: true,
    from: deployer,
    args: [3, citizend.address, [], 10000], // TODO input correct private sale value
  });
};

func.id = "ctnd.vesting.deploy";
func.tags = ["ctnd", "ctnd.vesting", "ctdn.vesting.deploy"];
func.dependencies = ["ctnd.sale1", "ctnd.token"];

export default func;
