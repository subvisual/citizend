import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Citizend", {
    from: deployer,
    args: [],
    log: true,
  });
};

func.id = "citizend";
func.tags = ["citizend"];

export default func;
