import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [step, setStep] = useState(1);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "tenant",
    password: "",
    confirmPassword: "",
    propertyCount: "",
    preferredLocation: "",
    budgetRange: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isEmpty = (v) => !v || v.trim() === "";

  // STEP VALIDATION
  const validateStep = (step) => {
    if (step === 1) {
      if (isEmpty(form.firstName)) return "First name is required";
      if (isEmpty(form.lastName)) return "Last name is required";
      if (isEmpty(form.email)) return "Email is required";
      if (isEmpty(form.phone)) return "Phone number is required";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) return "Invalid email format";

      const phoneRegex = /^[0-9+]{7,15}$/;
      if (!phoneRegex.test(form.phone)) return "Invalid phone number";
    }

    if (step === 2) {
      if (isEmpty(form.role)) return "Please select a role";
    }

    if (step === 3) {
      if (isEmpty(form.password)) return "Password is required";
      if (form.password.length < 6)
        return "Password must be at least 6 characters";
      if (form.password !== form.confirmPassword)
        return "Passwords do not match";
    }

    return null;
  };

  const nextStep = () => {
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setStep((s) => s + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((s) => s - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateStep(3);
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    // DUPLICATE CHECK
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.find(
      (u) => u.email.toLowerCase() === form.email.toLowerCase()
    );

    if (userExists) {
      setLoading(false);
      setError("User with this email already exists");
      return;
    }

    const userData = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.toLowerCase().trim(),
      phone: form.phone.trim(),
      role: form.role,
    };

    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    login(userData);

    setLoading(false);
    setSuccess("Account created successfully!");

    setTimeout(() => {
      navigate(
        form.role === "landlord"
          ? "/dashboard"
          : "/tenant-dashboard"
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="w-full max-w-md bg-white p-6 rounded-xl border">

        {/* MESSAGES */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm">
            {success}
          </div>
        )}

        <div className="text-sm text-gray-500 mb-4">
          Step {step} of 3
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold">Personal Info</h2>

              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={form.firstName}
                className="w-full border p-2 rounded"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={form.lastName}
                className="w-full border p-2 rounded"
              />

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
                className="w-full border p-2 rounded"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={form.phone}
                className="w-full border p-2 rounded"
              />

              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-black text-white p-2 rounded"
              >
                Next
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold">Role Selection</h2>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="tenant">Tenant (Default)</option>
                <option value="landlord">Landlord</option>
              </select>

              {form.role === "landlord" && (
                <input
                  name="propertyCount"
                  placeholder="Property Count (optional)"
                  onChange={handleChange}
                  value={form.propertyCount}
                  className="w-full border p-2 rounded"
                />
              )}

              {form.role === "tenant" && (
                <>
                  <input
                    name="preferredLocation"
                    placeholder="Preferred Location"
                    onChange={handleChange}
                    value={form.preferredLocation}
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="budgetRange"
                    placeholder="Budget Range"
                    onChange={handleChange}
                    value={form.budgetRange}
                    className="w-full border p-2 rounded"
                  />
                </>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 border p-2 rounded"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-1/2 bg-black text-white p-2 rounded"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold">Security</h2>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={form.password}
                  className="w-full border p-2 rounded pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={form.confirmPassword}
                  className="w-full border p-2 rounded pr-10"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-2 top-2 text-gray-500"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 border p-2 rounded"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-1/2 bg-green-600 text-white p-2 rounded disabled:opacity-50"
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>
              </div>
            </>
          )}

        </form>
      </div>
    </div>
  );
}