import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const linkClass = ({ isActive }) =>
    `block py-2 px-3 rounded text-sm transition ${
      isActive
        ? "bg-gray-100 text-black font-medium"
        : "text-gray-500 hover:text-black"
    }`;

  const landlordLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/properties", label: "Properties" },
    { to: "/tenants", label: "Tenants" },
    { to: "/leases", label: "Leases" },
    { to: "/payments", label: "Payments" },
  ];

  const tenantLinks = [
    { to: "/tenant-dashboard", label: "Dashboard" },
    { to: "/my-lease", label: "My Lease" },
    { to: "/pay-rent", label: "Pay Rent ⛓️" },
    { to: "/payments", label: "Payments" },
  ];

  const links =
    user?.role === "tenant" ? tenantLinks : landlordLinks;

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">

      {/* BRAND */}
      <h1 className="text-lg font-semibold mb-8">
        Smart Rental
      </h1>

      {/* NAV */}
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={linkClass}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* USER INFO */}
      <div className="mt-10 pt-4 border-t text-xs text-gray-500">
        Logged in as:{" "}
        <span className="font-medium">
          {user?.role || "guest"}
        </span>
      </div>

    </div>
  );
}