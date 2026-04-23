import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Properties from "../pages/Properties";
import Tenants from "../pages/Tenants";
import Leases from "../pages/Leases";
import Payments from "../pages/Payments";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/leases" element={<Leases />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}