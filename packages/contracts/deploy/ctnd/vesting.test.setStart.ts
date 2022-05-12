import type { DeployFunction } from "hardhat-deploy/types";
import type { BigNumber } from "ethers";

import { acalaDeploy } from "../../src/acala";
import { getNetworkConfig } from "../../src/deployConfigs";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { execute, read } = hre.deployments;

  const { ctndVesting } = await getNetworkConfig();

  const currentStartTime = (await read("Vesting", "startTime")) as BigNumber;

  if (currentStartTime.gt(0)) {
    return;
  }

  await execute(
    "Vesting",
    {
      log: true,
      from: deployer,
    },
    "setStartTime",
    ctndVesting.start
  );
};

func.id = "ctnd.vesting.test.setStart";
func.tags = ["ctnd", "ctnd.vesting", "ctnd.vesting.test.setStart"];
func.dependencies = ["ctnd.vesting.deploy"];

export default func;
