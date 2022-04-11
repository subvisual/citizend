import { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();

  await acalaDeploy(hre, "Controller", {
    from: deployer,
    args: [],
    log: true,
  });
};

func.id = "controller";
func.tags = ["controller"];
func.dependencies = [];

export default func;
