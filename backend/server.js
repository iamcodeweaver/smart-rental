const express = require("express");
const cors = require("cors");

const tenants = require("./routes/tenants");
const payments = require("./routes/payments");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tenants", tenants);
app.use("/payments", payments);

app.listen(4000, () => console.log("Server running"));