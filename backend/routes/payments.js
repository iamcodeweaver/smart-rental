const express = require("express");
const router = express.Router();

const payments = [];

router.get("/", (req, res) => {
  res.json(payments);
});

router.post("/", (req, res) => {
  const { tenant, amount, txHash } = req.body;

  payments.push({
    tenant,
    amount,
    txHash,
    timestamp: Date.now(),
  });

  res.json({ message: "Payment recorded" });
});

module.exports = router;