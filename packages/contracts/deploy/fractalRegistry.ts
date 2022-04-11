import { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();

  await acalaDeploy(hre, "FractalRegistry", {
    log: true,
    from: deployer,
    args: [deployer],
  });
};

func.id = "fractal-registry";
func.tags = ["fractal-registry"];

export default func;
