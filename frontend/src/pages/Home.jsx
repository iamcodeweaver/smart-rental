import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">

      <h1 className="text-3xl font-semibold mb-4">
        Smart Rental
      </h1>

      <p className="text-gray-600 mb-8 max-w-md">
        Manage properties, tenants, leases, and payments in one place.
        Built for modern landlords with blockchain-ready payments.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-5 py-2 bg-black text-white rounded-lg"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2 border rounded-lg"
        >
          Sign Up
        </Link>
      </div>

    </div>
  );
}