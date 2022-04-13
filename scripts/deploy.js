// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PandaRefund = await hre.ethers.getContractFactory("PandaRefund");
  const RinkebyOperatorStoreAddress = "0x5dA2E4Ba83569fb7A22a4aDE14bBEf1236168406";
  const RinkebyTerminalV1_1Address = "0xE7432E80A75F957121Cb523BA842Db27C6C25F69";
  const RinkebyPandaAddress = "0xb7AA51Cc7dc9A73D627c526A8b189B571F784228";
  const RinkebyJBXAddress = "0x58ad6eA4a02D7ff2D4Fc6A8F682e14459234300E";
  const pandaRefund = await PandaRefund.deploy(RinkebyPandaAddress, RinkebyTerminalV1_1Address);
  

  await pandaRefund.deployed();

  console.log("token deployed to:", pandaRefund.address);
  console.log("deployed transaction : ", pandaRefund.deployTransaction);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
