This aave flashloan v2 is deployed on sepolia testnet network, 
aiming to make it work for you, just add your wallet private key in   hardhat config  (  accounts: ["[private key"],)
and deploy in the terminal by using this way, .....................npx hardhat run --network goerli scripts/deployFlashLoan.js
and it will deploy a flash loan smart contract on sepolia
and this way you can verify your smart contract, //npx hardhat verify typedeployedaddresshere --network goerli    

dependencies   :
npm i @aave/core-v3

deployment  :
npx hardhat run --network goerli scripts/deployFlashLoan.js

npx hardhat verify typedeployedaddresshere --network goerli    




# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
