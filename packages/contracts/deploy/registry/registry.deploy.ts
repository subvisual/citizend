import { DeployFunction } from "hardhat-deploy/types";

import { acalaDeploy } from "../../src/acala";
import { getNetworkConfig } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();

  const { registry } = await getNetworkConfig();

  await acalaDeploy(hre, "FractalRegistry", {
    log: true,
    from: deployer,
    args: [registry.root],
  });
};

func.id = "fractal-registry.deploy";
func.tags = ["fractal-registry", "fractal-registry.deploy"];

export default func;
