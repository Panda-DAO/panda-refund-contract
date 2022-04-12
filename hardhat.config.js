require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  paths: {
    artifacts: './src/artifacts',
 },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: "",
      accounts: []
    },
    mainnet: {
      url: "",
      accounts: []
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      mainnet: "YOUR_ETHERSCAN_API_KEY",
      ropsten: "YOUR_ETHERSCAN_API_KEY",
      rinkeby: "YOUR_ETHERSCAN_API_KEY",
      goerli: "YOUR_ETHERSCAN_API_KEY",
      kovan: "YOUR_ETHERSCAN_API_KEY",
      // binance smart chain
      bsc: "YOUR_BSCSCAN_API_KEY",
      bscTestnet: "YOUR_BSCSCAN_API_KEY",
  }
  }
};
