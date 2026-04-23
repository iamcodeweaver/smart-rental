export default function TenantDashboard({ user }) {
  return (
    <div className="dashboard">

      <div className="panel">
        <h2>Tenant Dashboard</h2>
        <p>Welcome {user.name}</p>
      </div>

      <div className="panel">
        <button>View Rent</button>
        <button>Pay Rent</button>
        <button>History</button>
      </div>

    </div>
  );
}