const express = require("express");
const users = require("../data/users");
const generateId = require("../utils/generateId");

const router = express.Router();

// SIGNUP
router.post("/signup", (req, res) => {
  const { name, email, password, role, wallet } = req.body;

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "User exists" });
  }

  const user = {
    id: generateId(),
    name,
    email,
    password,
    role,
    wallet,
  };

  users.push(user);

  res.json({ message: "User created", user });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login success", user });
});

module.exports = router;