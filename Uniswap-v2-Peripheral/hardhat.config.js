require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", // BSC Testnet RPC URL
      accounts: [process.env.Private_Key],
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology/", // Amoy Polygon  tTestnet RPC URL
      accounts: [process.env.Private_Key],
    },
  },
  etherscan: {
    apiKey: process.env.Verification_Key, // Verification key of related network
  },
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
    // "0.6.6",

};
