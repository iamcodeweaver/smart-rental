const fs = require("fs");
const path = require("path");

// Hardhat output
const artifactPath = path.join(
  __dirname,
  "../artifacts/contracts/RentalAgreement.sol/RentalAgreement.json"
);

// Backend destination
const destPath = path.join(
  __dirname,
  "../../backend/contracts/RentalAgreement.json"
);

// Ensure folder exists
fs.mkdirSync(path.dirname(destPath), { recursive: true });

// Read artifact
const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

// Save ONLY ABI
const output = {
  abi: artifact.abi,
};

fs.writeFileSync(destPath, JSON.stringify(output, null, 2));

console.log("ABI synced to backend");