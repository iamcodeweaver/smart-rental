const { ethers } = require("ethers");
const abi = require("../abi/RentContract.json");

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  abi,
  provider
);

module.exports = contract;