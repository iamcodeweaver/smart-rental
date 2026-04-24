const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// 📦 ABI
router.get("/abi", (req, res) => {
  const file = path.join(__dirname, "../contracts/RentalAgreement.json");
  const data = JSON.parse(fs.readFileSync(file, "utf8"));

  res.json(data);
});

// 📍 CONTRACT ADDRESS
router.get("/address", (req, res) => {
  const file = path.join(__dirname, "../contracts/address.json");

  if (!fs.existsSync(file)) {
    return res.json({ address: null });
  }

  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  res.json(data);
});

module.exports = router;