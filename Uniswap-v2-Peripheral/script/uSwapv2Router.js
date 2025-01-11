
const hre = require("hardhat");
async function main() {

    // Convert 30 GWEI to Wei
    const gasPrice ="10000000000"
  let factoryAddress = "0x2ed2A8499d8b09BB78e6D6B23e1Fd342C2c2c7CA"
  let WETHAddress="0x9A36366eEcd4D0Bd9A2ea176D6e6fC39D73f8d68"
  const Contract = await ethers.getContractFactory("UniswapV2Router02", {
    gasPrice: gasPrice
  } );
  const uSwapRouter = await Contract.deploy(factoryAddress, WETHAddress);

  console.log("Swap V2 Router:", uSwapRouter.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});