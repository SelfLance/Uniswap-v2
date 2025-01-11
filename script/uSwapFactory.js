// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("UniswapV2Factory", (m) => {
let feeSetter = "0xC6C385dfe722557591f8e2e0297Ad06F2C083A2B"

  const lock =  m.contract("UniswapV2Factory", [feeSetter]);

  console.log("UniswapV2Factory deployed at", lock
  );

  // return { lock };
});
