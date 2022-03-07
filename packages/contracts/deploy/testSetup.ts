import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";

const { parseUnits } = ethers.utils;

const func: DeployFunction = async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, execute } = hre.deployments;

  if (hre.network.live) {
    return;
  }

  await deploy("aUSD", {
    contract: "MockERC20",
    log: true,
    from: deployer,
    args: ["Acala USD", "aUSD"],
  });

  const [owner, alice, bob] = await ethers.getSigners();

  await execute(
    "aUSD",
    { from: deployer, log: true },
    "mint",
    alice.address,
    parseUnits("1000")
  );
  await execute(
    "aUSD",
    { from: deployer, log: true },
    "mint",
    bob.address,
    parseUnits("1000")
  );
};

func.id = "test_aUSD";
func.tags = ["test_aUSD"];

export default func;
