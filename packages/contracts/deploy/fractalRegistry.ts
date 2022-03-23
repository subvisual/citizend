import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  await deploy("FractalRegistry", {
    log: true,
    from: deployer,
    args: [deployer],
  });
};

func.id = "fractal-registry";
func.tags = ["fractal-registry"];

export default func;
