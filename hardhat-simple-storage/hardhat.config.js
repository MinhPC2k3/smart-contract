require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY= process.env.PRIVATE_KEY
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      ChainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts:[PRIVATE_KEY],
      ChainId: 5,
    },
  },
  solidity: "0.8.8",

};
