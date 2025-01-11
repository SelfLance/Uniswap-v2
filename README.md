# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
# Code Changes
    bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));
   Code for init Pair Hash


# Contracts on Amoy Testnet
# Deploy Uniswap V2 Factory
Swap Factory: 0x2ed2A8499d8b09BB78e6D6B23e1Fd342C2c2c7CA

Successfully verified contract UniswapV2Factory on the block explorer.
https://amoy.polygonscan.com/address/0x2ed2A8499d8b09BB78e6D6B23e1Fd342C2c2c7CA#code

# Update UniswapV2Library 
   In Libraries update UniswapV2Library change init hash by removeing 0x from Unswap Factory Contract that you deployed
# Deploy Uniswap V2 Router 02

