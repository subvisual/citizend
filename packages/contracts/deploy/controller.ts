import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Controller", {
    from: deployer,
    args: [],
    log: true,
  });
};

func.id = "controller";
func.tags = ["controller"];
func.dependencies = [];

export default func;
