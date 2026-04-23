const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    success: true,
    message: "Will connect to blockchain next"
  });
});

module.exports = router;