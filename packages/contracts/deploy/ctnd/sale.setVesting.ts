import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { get, read, execute } = hre.deployments;

  const vesting = await get("Vesting");

  const currentVesting = await read("Sale1", { from: deployer }, "vesting");

  // if (currentVesting == ethers.constants.AddressZero) {
  //   await execute(
  //     "Sale1",
  //     { from: deployer, log: true },
  //     "setVesting",
  //     vesting.address
  //   );
  // }
};

func.id = "ctnd.sale.setVesting";
func.tags = ["ctnd", "ctnd.sale.setVesting"];
func.dependencies = ["ctnd.sale1", "ctnd.vesting"];

export default func;
