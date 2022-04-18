import { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get } = hre.deployments;

  const registry = await get("FractalRegistry");
  const citizend = await get("Citizend");
  const staking = await get("Staking");

  await acalaDeploy(hre, "Controller", {
    from: deployer,
    args: [registry.address, staking.address, citizend.address],
    log: true,
  });
};

func.id = "controller";
func.tags = ["controller"];
func.dependencies = ["ctnd.token", "staking", "fractal-registry"];

export default func;
