const { ethers } = require("hardhat");

const main = async () => {
    const [deployer] = await ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const escrowContractFactory = await ethers.getContractFactory("Escrow");
    const escrowContract = await escrowContractFactory.deploy();
    await escrowContract.deployed();
    console.log("Escrow contract address: ", escrowContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
