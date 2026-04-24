import DashboardLayout from "../layouts/DashboardLayout";

export default function TenantDashboard() {
  const payments = [
    {
      month: "January 2026",
      amount: 700000,
      status: "paid",
      ref: "0x9a3f...d21",
    },
    {
      month: "February 2026",
      amount: 700000,
      status: "pending",
      ref: "-",
    },
    {
      month: "March 2026",
      amount: 700000,
      status: "failed",
      ref: "-",
    },
  ];

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Tenant Dashboard</h1>
        <p className="text-sm text-gray-500">
          Manage rent payments and lease status
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white border rounded-lg p-5">
          <p className="text-sm text-gray-500">Monthly Rent</p>
          <h2 className="text-xl font-semibold mt-2">
            ₦700,000
          </h2>
        </div>

        <div className="bg-white border rounded-lg p-5">
          <p className="text-sm text-gray-500">Lease Status</p>
          <h2 className="text-xl font-semibold mt-2 text-green-600">
            Active
          </h2>
        </div>

        <div className="bg-white border rounded-lg p-5">
          <p className="text-sm text-gray-500">Next Due Date</p>
          <h2 className="text-xl font-semibold mt-2">
            5th May 2026
          </h2>
        </div>

      </div>

      {/* Payments Table */}
      <div className="bg-white border rounded-lg">

        <div className="p-4 border-b">
          <h3 className="font-medium">Payment History</h3>
        </div>

        <table className="w-full text-sm">

          <thead className="text-left text-gray-500 bg-gray-50">
            <tr>
              <th className="p-4">Month</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Reference</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-t">

                <td className="p-4">{p.month}</td>

                <td>₦{p.amount.toLocaleString()}</td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      p.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : p.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="text-gray-500">{p.ref}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </DashboardLayout>
  );
}