import { useState } from "react";
import LandlordDashboard from "./pages/LandlordDashboard";
import TenantDashboard from "./pages/TenantDashboard";

export default function App() {
  const [user] = useState({
    id: 1,
    name: "John Doe",
    role: "landlord"
  });

  return (
    <div>
      {user.role === "landlord" ? (
        <LandlordDashboard user={user} />
      ) : (
        <TenantDashboard user={user} />
      )}
    </div>
  );
}