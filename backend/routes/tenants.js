const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM tenants", (err, data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  const { name, email, houseAddress, rent } = req.body;

  db.query(
    "INSERT INTO tenants (name,email,houseAddress,rent) VALUES (?,?,?,?)",
    [name, email, houseAddress, rent],
    () => res.json({ success: true })
  );
});

router.put("/:id", (req, res) => {
  const { name, email, houseAddress, rent } = req.body;

  db.query(
    "UPDATE tenants SET name=?, email=?, houseAddress=?, rent=? WHERE id=?",
    [name, email, houseAddress, rent, req.params.id],
    () => res.json({ success: true })
  );
});

router.delete("/:id", (req, res) => {
  db.query("DELETE FROM tenants WHERE id=?", [req.params.id], () =>
    res.json({ success: true })
  );
});

module.exports = router;