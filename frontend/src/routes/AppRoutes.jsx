import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Dashboard from "../pages/Dashboard";
import TenantDashboard from "../pages/TenantDashboard";

import Properties from "../pages/Properties";
import Tenants from "../pages/Tenants";
import Leases from "../pages/Leases";
import Payments from "../pages/Payments";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* LANDLORD ONLY */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="landlord">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/properties"
        element={
          <ProtectedRoute role="landlord">
            <Properties />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tenants"
        element={
          <ProtectedRoute role="landlord">
            <Tenants />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leases"
        element={
          <ProtectedRoute role="landlord">
            <Leases />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payments"
        element={
          <ProtectedRoute role="landlord">
            <Payments />
          </ProtectedRoute>
        }
      />

      {/* TENANT ONLY */}
      <Route
        path="/tenant-dashboard"
        element={
          <ProtectedRoute role="tenant">
            <TenantDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}