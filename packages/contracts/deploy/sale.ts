import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const aUSD = await get("aUSD");

  // await deploy("aUSD", {
  //   contract: "MockERC20",
  //   log: true,
  //   from: deployer,
  //   args: ["Acala USD", "aUSD"],
  // });
};

func.id = "sale";
func.tags = ["sale"];
func.dependencies = ["test_aUSD", "citizend"];

export default func;
