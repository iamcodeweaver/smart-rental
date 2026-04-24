import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../contracts/contractConfig";
import { RENTAL_ABI } from "../contracts/RentalAgreementABI";

function getContract(signer) {
  return new ethers.Contract(CONTRACT_ADDRESS, RENTAL_ABI, signer);
}

// 🔗 CONNECT WALLET
export async function connectWallet() {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);

  return accounts[0];
}

// 💸 PAY RENT (REAL ON-CHAIN CALL)
export async function payRent(amountEth) {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = getContract(signer);

  const tx = await contract.payRent({
    value: ethers.parseEther(amountEth.toString()),
  });

  await tx.wait();

  return tx.hash;
}

// 📊 GET CONTRACT DETAILS
export async function getLeaseDetails() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = getContract(provider);

  return await contract.getDetails();
}