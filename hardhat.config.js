require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", // BSC Testnet RPC URL
      accounts: [process.env.PK],
    },
  },
  etherscan: {
    apiKey: process.env.bscanKey, // Your Etherscan API key
  },
  solidity: "0.5.16",
};
