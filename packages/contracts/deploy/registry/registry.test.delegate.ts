import { DeployFunction } from "hardhat-deploy/types";

import { getNetworkName } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { execute, read } = hre.deployments;

  if (!["hardhat"].includes(getNetworkName())) {
    return;
  }

  const alreadyDelegate = await read(
    "FractalRegistry",
    {},
    "delegates",
    deployer
  );

  if (alreadyDelegate) {
    return;
  }

  await execute(
    "FractalRegistry",
    { from: deployer, log: true },
    "addDelegate",
    deployer
  );
};

func.id = "fractal-registry.test.delegate";
func.tags = ["fractal-registry", "fractal-registry.test.delegate"];
func.dependencies = ["fractal-registry.deploy"];

export default func;
