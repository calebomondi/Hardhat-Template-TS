# HARDHAT TEMPLATE

CLONE.CODE.DEPLOY

This hardHat template was created to shorten the hardhat setup and configuration time.
All you need is to clone it then follow the below steps;

1. Run the following commands:

  ```shell
  git clone <repository-url>
  cd <repository-folder>
  npm install
  npm install @nomicfoundation/hardhat-toolbox@latest
  npm install --save-dev hardhat@latest
  npm install dotenv@latest
  ```

2. Create a .env file and add WALLET_PRIVATE_KEY and ALCHEMY_RPC_SEPOLIA as environment variables, give them appropriate values, you can change the network RPC URL to that of Infura if you are not using Alchemy

  ![hh](https://github.com/user-attachments/assets/be7e3bf2-e223-4df6-9064-bb55a0b0479a)

  
The template has the default Lock smart contract that comes with the initial Hardhat setup. 
To test the setup and to interact with the Lock smart contract and deploy, follow the following steps;

1. Compile the contract
  ``` shell
  npx hardhat compile
  ```

2. Test the contract
  ```shell
  npx hardhat test
  ```

3. Deploying locally
  ```shell
  npx hardhat run scripts/deploy.ts
  ```
4. Deploying to sepolia testnet
  ```shell
  npx hardhat run scripts/deploy.ts --network sepolia
  ```

UPDATE AND MATCH THE SOLIDITY VERSIONS IN YOU HARDHAT CONFIG FILE WITH THOSE IN THE CONTRACTS

NB:// This template comes with the sepolia testnet added to the networks in hardhat.config.ts, you can add other networks or change to you preffered network.

LETS DECENTRALIZE THE INTERNET ;-)
