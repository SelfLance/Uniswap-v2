
const hre = require("hardhat");
async function main() {

    // Convert 30 GWEI to Wei
const gasPrice ="20000000000"

  let  feeSetterAddress ="0xC6C385dfe722557591f8e2e0297Ad06F2C083A2B"
  const Contract = await ethers.getContractFactory("MaticWETH", {
    gasPrice: gasPrice
  });
  const maticWETH = await Contract.deploy(feeSetterAddress);

  console.log("Matic WETHr:", maticWETH.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});