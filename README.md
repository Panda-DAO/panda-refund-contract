#  Hardhat Project

PandaDAO Refund

1. The user first authorizes the Refund contract to destroy PANDA tokens through the Juicebox's OperatorStore: "0xab47304D987390E27Ce3BC0fA4Fe31E3A98B0db2" contract's setOperator;
2. After authorization, the user destroys the user's PANDA token through the redeem function of the Refund contract and returns ETH. Before destroying, Refund will use the merkle tree to check whether the user is on the refund whitelist and the maximum number of refunds

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
