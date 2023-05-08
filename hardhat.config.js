require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: "https://sepolia.infura.io/v3/2d70b12bcadb4ad1a354dc70aebf0211",
      accounts: ["d2364317cf4a858f3bb6e7ce89e6b4041780d39fab8e7b60cdb7a754819081cc"],
    },
  },
};
