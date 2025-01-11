
const hre = require("hardhat");
async function main() {

  let  feeSetterAddress ="0xC6C385dfe722557591f8e2e0297Ad06F2C083A2B"
  const Contract = await ethers.getContractFactory("UniswapV2Router02");
  const uSwapRouter = await Contract.deploy(feeSetterAddress);

  console.log("Swap V2 Router:", uSwapRouter.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});