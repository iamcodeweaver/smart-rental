import { Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Dashboard from "../pages/Dashboard";
import TenantDashboard from "../pages/TenantDashboard";

import Properties from "../pages/Properties";
import Tenants from "../pages/Tenants";
import Leases from "../pages/Leases";
import Payments from "../pages/Payments";

import MyLease from "../pages/MyLease";
import PayRent from "../pages/PayRent";

import CreateLease from "../pages/CreateLease";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route
        path="/"
        element={
          <AppLayout>
            <Home />
          </AppLayout>
        }
      />

      <Route
        path="/login"
        element={
          <AppLayout>
            <Login />
          </AppLayout>
        }
      />

      <Route
        path="/signup"
        element={
          <AppLayout>
            <Signup />
          </AppLayout>
        }
      />

      {/* ========================= */}
      {/* LANDLORD ROUTES */}
      {/* ========================= */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="landlord">
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/properties"
        element={
          <ProtectedRoute role="landlord">
            <AppLayout>
              <Properties />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/tenants"
        element={
          <ProtectedRoute role="landlord">
            <AppLayout>
              <Tenants />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/leases"
        element={
          <ProtectedRoute role="landlord">
            <AppLayout>
              <Leases />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/payments"
        element={
          <ProtectedRoute role="landlord">
            <AppLayout>
              <Payments />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* ========================= */}
      {/* TENANT ROUTES */}
      {/* ========================= */}

      <Route
        path="/tenant-dashboard"
        element={
          <ProtectedRoute role="tenant">
            <AppLayout>
              <TenantDashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-lease"
        element={
          <ProtectedRoute role="tenant">
            <AppLayout>
              <MyLease />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pay-rent"
        element={
          <ProtectedRoute role="tenant">
            <AppLayout>
              <PayRent />
            </AppLayout>
          </ProtectedRoute>
        }
      />

<Route
  path="/create-lease"
  element={
    <ProtectedRoute role="landlord">
      <AppLayout>
        <CreateLease />
      </AppLayout>
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}