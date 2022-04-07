import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { execute, get, read } = hre.deployments;

  const vesting = await get("Vesting");

  const balance = await read(
    "Citizend",
    { from: deployer },
    "balanceOf",
    deployer
  );

  if (balance.gt(0)) {
    await execute(
      "Citizend",
      { from: deployer, log: true },
      "transfer",
      vesting.address,
      balance
    );
  }
};

func.id = "ctnd.transferToVesting";
func.tags = ["ctnd", "ctnd.transferToVesting"];
func.dependencies = ["ctnd.vesting", "ctnd.token"];

export default func;
