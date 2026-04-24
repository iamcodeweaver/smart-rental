import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Button from "../components/Button";

export default function CreateLease() {
  const [form, setForm] = useState({
    tenant: "",
    rentAmount: "",
    leaseStart: "",
    leaseEnd: "",
    paymentInterval: 30,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const res = await fetch("http://localhost:5000/api/leases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        landlord: user.wallet,
        tenant: form.tenant,
        rentAmount: Number(form.rentAmount),
        leaseStart: Number(new Date(form.leaseStart).getTime() / 1000),
        leaseEnd: Number(new Date(form.leaseEnd).getTime() / 1000),
        paymentInterval: Number(form.paymentInterval),
      }),
    });

    const data = await res.json();
    alert("Lease Created: " + data.lease.contractAddress);
  };

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-6">
        Create Lease
      </h1>

      <div className="space-y-3 max-w-md">

        <input
          name="tenant"
          placeholder="Tenant Wallet"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          name="rentAmount"
          placeholder="Rent Amount (wei)"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="date"
          name="leaseStart"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          type="date"
          name="leaseEnd"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <Button onClick={handleSubmit}>
          Deploy Lease ⛓️
        </Button>

      </div>
    </DashboardLayout>
  );
}