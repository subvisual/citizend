import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const citizend = await get("Citizend");

  await deploy("Staking", {
    from: deployer,
    args: [citizend.address],
    log: true,
  });
};

func.id = "staking";
func.tags = ["staking"];
func.dependencies = ["ctnd.token"];

export default func;
