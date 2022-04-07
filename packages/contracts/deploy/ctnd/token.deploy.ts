import type { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../../src/acala";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();

  await acalaDeploy(hre, "Citizend", {
    from: deployer,
    args: [deployer],
    log: true,
  });
};

func.id = "ctnd.token";
func.tags = ["ctnd", "ctnd.token"];

export default func;
