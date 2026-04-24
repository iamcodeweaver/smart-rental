const express = require("express");
const leases = require("../data/leases");
const generateId = require("../utils/generateId");
const { deployLeaseToChain } = require("../services/blockchain");

const router = express.Router();

/**
 * CREATE LEASE (FULL FLOW)
 */
router.post("/", (req, res) => {
  try {
    const {
      landlord,
      tenant,
      rentAmount,
      leaseStart,
      leaseEnd,
      paymentInterval,
    } = req.body;

    // 1. deploy contract on blockchain
    const contractAddress = deployLeaseToChain({
      tenant,
      rentAmount,
      leaseStart,
      leaseEnd,
      paymentInterval,
    });

    // 2. store lease in backend
    const lease = {
      id: generateId(),
      landlord,
      tenant,
      contractAddress,
      rentAmount,
      leaseStart,
      leaseEnd,
    };

    leases.push(lease);

    res.json({
      message: "Lease created successfully",
      lease,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lease creation failed" });
  }
});

/**
 * GET ALL LEASES
 */
router.get("/", (req, res) => {
  res.json(leases);
});

module.exports = router;