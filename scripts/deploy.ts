import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const Lock = await ethers.getContractFactory("Lock");
  
  // Deploy the contract
  const lock = await Lock.deploy(1893456000);
  
  // Wait for the contract to be deployed
  await lock.deploymentTransaction()?.wait();
  
  console.log(`Contract deployed to: ${await lock.getAddress()}`);
}

// Recommended pattern for handling async errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });