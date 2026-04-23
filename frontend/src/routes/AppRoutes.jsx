import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tenants from "../pages/Tenants";
import Properties from "../pages/Properties";
import Leases from "../pages/Leases";
import Payments from "../pages/Payments";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Landlord Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/leases" element={<Leases />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  );
}