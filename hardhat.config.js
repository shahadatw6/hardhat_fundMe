require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomicfoundation/hardhat-verify")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("@nomicfoundation/hardhat-toolbox")
require("hardhat/config")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        rinkbey: {
            url: process.env.RB_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainID: 4,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainID: 31337,
        },
    },
    solidity: "0.8.7",
    etherscan: {
        apiKey: process.env.ETHERSCAN_API,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
    gasReporter: {
        enabled: false,
        outputFile: "GasReport.txt",
        noColors: true,
        currency: "usd",
        coinmarketcap: process.env.CMC_API,
    },
}
