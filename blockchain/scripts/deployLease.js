const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const {
    tenant,
    rentAmount,
    leaseStart,
    leaseEnd,
    paymentInterval,
  } = require("../../backend/tempLease.json");

  console.log("🚀 Deploying lease contract...");

  const RentalAgreement =
    await hre.ethers.getContractFactory("RentalAgreement");

  const contract = await RentalAgreement.deploy(
    tenant,
    rentAmount,
    leaseStart,
    leaseEnd,
    paymentInterval
  );

  await contract.waitForDeployment();

  console.log("✅ Contract deployed:", await contract.getAddress());

  // export result for backend
  const fs = require("fs");

  fs.writeFileSync(
    "../../backend/deployedLease.json",
    JSON.stringify({
      contractAddress: await contract.getAddress(),
    })
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});