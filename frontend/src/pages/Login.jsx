import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🧠 MOCK AUTH (replace later with backend)
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // 🔥 Simple role detection (temporary logic)
    const user = {
      email,
      role: email.includes("tenant") ? "tenant" : "landlord",
    };

    // 💾 Save globally (context + localStorage inside context)
    login(user);

    // 🚀 Redirect based on role
    if (user.role === "landlord") {
      navigate("/dashboard");
    } else {
      navigate("/tenant-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg border w-full max-w-md shadow-sm"
      >

        <h2 className="text-xl font-semibold mb-6">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Login
        </button>

      </form>
    </div>
  );
}