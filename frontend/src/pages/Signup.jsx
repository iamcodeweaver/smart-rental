import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState("landlord");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white p-8 rounded-lg border w-full max-w-md">

        <h2 className="text-xl font-semibold mb-6">
          Create Account
        </h2>

        {/* Role Selection */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setRole("landlord")}
            className={`flex-1 py-2 rounded ${
              role === "landlord"
                ? "bg-black text-white"
                : "border"
            }`}
          >
            Landlord
          </button>

          <button
            onClick={() => setRole("tenant")}
            className={`flex-1 py-2 rounded ${
              role === "tenant"
                ? "bg-black text-white"
                : "border"
            }`}
          >
            Tenant
          </button>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Sign Up as {role}
        </button>

      </div>
    </div>
  );
}