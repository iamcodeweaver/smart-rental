const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const leaseRoutes = require("./routes/leases");
const paymentRoutes = require("./routes/payments");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Smart Rental Backend Running 🚀" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});