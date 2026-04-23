import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // 🔥 prevents page reload

    // 🧠 MOCK AUTH (replace later with backend)
    const user = {
      email,
      role: email.includes("tenant") ? "tenant" : "landlord",
    };

    // 💾 Save role (for future use)
    localStorage.setItem("role", user.role);

    // 🚀 Redirect based on role
    if (user.role === "landlord") {
      navigate("/dashboard");
    } else {
      navigate("/tenant-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg border w-full max-w-md"
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
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

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