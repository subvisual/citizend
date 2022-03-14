import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const aUSD = await get("aUSD");
  const citizend = await get("Citizend");

  const today = ethers.BigNumber.from(Math.round(new Date().getTime() / 1000));
  const tomorrow = ethers.BigNumber.from(
    Math.round(new Date().getTime() / 1000) + 60 * 60 * 24
  );

  await deploy("Sale", {
    log: true,
    from: deployer,
    args: [parseUnits("0.3"), citizend.address, aUSD.address, today, tomorrow],
  });
};

func.id = "sale";
func.tags = ["sale"];
func.dependencies = ["test_aUSD", "citizend"];

export default func;
