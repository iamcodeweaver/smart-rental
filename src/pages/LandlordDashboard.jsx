import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { Pencil, Trash2 } from "lucide-react";

const API = "http://localhost:4000";

export default function LandlordDashboard({ user }) {
  const [tenants, setTenants] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", houseAddress: "", rent: "" });
  const [editId, setEditId] = useState(null);

  async function fetchTenants() {
    const res = await fetch(`${API}/tenants`);
    setTenants(await res.json());
  }

  useEffect(() => {
    fetchTenants();
  }, []);

  function startEdit(t) {
    setEditId(t.id);
    setForm(t);
  }

  async function saveTenant() {
    const url = editId ? `${API}/tenants/${editId}` : `${API}/tenants`;
    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", email: "", houseAddress: "", rent: "" });
    setEditId(null);
    fetchTenants();
  }

  async function deleteTenant(id) {
    await fetch(`${API}/tenants/${id}`, { method: "DELETE" });
    fetchTenants();
  }

  return (
    <div className="dashboard">

      <div className="panel">
        <h2>Landlord Dashboard</h2>
      </div>

      <div className="panel">
        <h3>{editId ? "Edit Tenant" : "Add Tenant"}</h3>

        <input placeholder="Name" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <input placeholder="Address" value={form.houseAddress}
          onChange={e => setForm({ ...form, houseAddress: e.target.value })} />

        <input placeholder="Rent" value={form.rent}
          onChange={e => setForm({ ...form, rent: e.target.value })} />

        <button onClick={saveTenant}>Save</button>
      </div>

      <div className="panel">
        {tenants.map(t => (
          <div key={t.id}>
            {t.name} - {formatCurrency(t.rent)}

            <Pencil onClick={() => startEdit(t)} />
            <Trash2 onClick={() => deleteTenant(t.id)} />
          </div>
        ))}
      </div>

    </div>
  );
}