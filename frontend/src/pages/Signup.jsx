import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "landlord",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ Validate passwords
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    // 🧠 Mock user object (backend later replaces this)
    const user = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      mobile: form.mobile,
      role: form.role,
    };

    // 💾 Store temporarily
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", form.role);

    // 🚀 Redirect by role
    if (form.role === "landlord") {
      navigate("/dashboard");
    } else {
      navigate("/tenant-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg border w-full max-w-md shadow-sm"
      >

        <h2 className="text-xl font-semibold mb-6">
          Create Account
        </h2>

        {/* First Name */}
        <input
          name="firstName"
          placeholder="First Name"
          className="w-full border p-2 rounded mb-3"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name */}
        <input
          name="lastName"
          placeholder="Last Name"
          className="w-full border p-2 rounded mb-3"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* Mobile */}
        <input
          name="mobile"
          type="tel"
          placeholder="Mobile Number"
          className="w-full border p-2 rounded mb-3"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          value={form.password}
          onChange={handleChange}
          required
        />

        {/* Confirm Password */}
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded mb-3"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        {/* Role Selection */}
        <select
          name="role"
          className="w-full border p-2 rounded mb-4"
          value={form.role}
          onChange={handleChange}
        >
          <option value="landlord">Landlord</option>
          <option value="tenant">Tenant</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Sign Up
        </button>

      </form>
    </div>
  );
}