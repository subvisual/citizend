import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Citizend", {
    from: deployer,
    args: [deployer],
    log: true,
  });
};

func.id = "ctnd.token";
func.tags = ["ctnd", "ctnd.token"];

export default func;
