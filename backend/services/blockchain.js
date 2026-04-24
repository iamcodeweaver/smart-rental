const { execSync } = require("child_process");

function deployLeaseToChain(leaseData) {
  const fs = require("fs");

  // temporary handoff file
  fs.writeFileSync(
    "./tempLease.json",
    JSON.stringify(leaseData)
  );

  // run hardhat deploy script
  execSync(
    "cd ../blockchain && npx hardhat run scripts/deployLease.js --network localhost",
    { stdio: "inherit" }
  );

  const result = require("../deployedLease.json");

  return result.contractAddress;
}

module.exports = { deployLeaseToChain };