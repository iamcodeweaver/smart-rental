const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function saveAddress(address) {
  const filePath = path.join(
    __dirname,
    "../../backend/contracts/address.json"
  );

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  fs.writeFileSync(
    filePath,
    JSON.stringify({ address }, null, 2)
  );

  console.log("📍 Contract address saved:", address);
}

async function main() {
  console.log("🚀 Deploying RentalAgreement contract...");

  const RentalAgreement = await hre.ethers.getContractFactory(
    "RentalAgreement"
  );

  // ===============================
  // 🔥 SAMPLE DEPLOY VALUES (LOCAL TEST)
  // ===============================

  const tenant = "0x0000000000000000000000000000000000000001";
  const rentAmount = hre.ethers.parseEther("0.01"); // 0.01 ETH rent
  const leaseStart = Math.floor(Date.now() / 1000); // now
  const leaseEnd = leaseStart + 60 * 60 * 24 * 30; // 30 days
  const paymentInterval = 60 * 60 * 24 * 30; // monthly

  const contract = await RentalAgreement.deploy(
    tenant,
    rentAmount,
    leaseStart,
    leaseEnd,
    paymentInterval
  );

  await contract.waitForDeployment();

  const address = await contract.getAddress();

  console.log("✅ Contract deployed to:", address);

  await saveAddress(address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});