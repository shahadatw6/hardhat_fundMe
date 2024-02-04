const networkConfig = {
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
}

const developmentChain = ["hardhat", "localhost"]
const DECIMALLS = 8
const INITIAL_ANSWER = 20000000000

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALLS,
    INITIAL_ANSWER,
}
