import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">

      {/* HERO */}
      <h1 className="text-4xl font-semibold mb-4">
        Smart Rental Platform
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        A modern system for managing rental agreements, tenants, and payments —
        powered by secure smart contracts for transparency and trust.
      </p>

      {/* CTA */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-90"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Sign Up
        </Link>
      </div>

      {/* FEATURES */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">

        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-medium mb-2">Property Management</h3>
          <p className="text-sm text-gray-500">
            Track multiple properties, tenants, and leases in one dashboard.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-medium mb-2">Secure Payments</h3>
          <p className="text-sm text-gray-500">
            Enable transparent and verifiable rent payments.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="font-medium mb-2">Smart Contracts</h3>
          <p className="text-sm text-gray-500">
            Automate agreements with blockchain-backed security.
          </p>
        </div>

      </div>

    </div>
  );
}