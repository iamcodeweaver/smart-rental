import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-8 py-5 border-b bg-white">
      
      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-semibold cursor-pointer"
      >
        Smart Rental
      </h1>

      {/* ACTIONS */}
      <div className="space-x-4 text-sm flex items-center">

        {!user ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-gray-600 hover:text-black"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Get Started
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        )}

      </div>
    </header>
  );
}