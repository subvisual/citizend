import { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get } = hre.deployments;

  const registry = await get("FractalRegistry");
  const citizend = await get("Citizend");
  const staking = await get("Staking");
  const merkleRoot =
    "0x8e7ccfa471d15a7917e49017f94715d09cb940a6d5f088f516e16b0da32ff610";

  await acalaDeploy(hre, "Controller", {
    from: deployer,
    args: [registry.address, staking.address, citizend.address, merkleRoot],
    log: true,
  });
};

func.id = "controller";
func.tags = ["controller"];
func.dependencies = ["ctnd.token", "staking", "fractal-registry"];

export default func;
