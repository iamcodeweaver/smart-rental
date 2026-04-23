import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block py-2 px-3 rounded ${
      isActive ? "bg-gray-100 text-black font-medium" : "text-gray-500"
    } hover:text-black`;

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">

      <h1 className="text-xl font-semibold mb-8">
        Smart Rental
      </h1>

      <nav className="space-y-2 text-sm">

        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/properties" className={linkClass}>
          Properties
        </NavLink>

        <NavLink to="/tenants" className={linkClass}>
          Tenants
        </NavLink>

        <NavLink to="/leases" className={linkClass}>
          Leases
        </NavLink>

        <NavLink to="/payments" className={linkClass}>
          Payments
        </NavLink>

      </nav>

    </div>
  );
}