import DashboardLayout from "../layouts/DashboardLayout";

export default function TenantDashboard() {
  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          Tenant Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Manage your rent, lease, and payment history
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white border rounded-lg p-5">
          <p className="text-sm text-gray-500">Monthly Rent</p>
          <h2 className="text-xl font-semibold mt-2">$700</h2>
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
            5th May
          </h2>
        </div>

      </div>

      {/* Payments Section */}
      <div className="bg-white border rounded-lg">

        <div className="p-4 border-b">
          <h3 className="font-medium">
            Payment History
          </h3>
        </div>

        <table className="w-full text-sm">

          <thead className="text-left text-gray-500 bg-gray-50">
            <tr>
              <th className="p-4">Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Reference</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td className="p-4">Jan 2026</td>
              <td>$700</td>
              <td>
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                  paid
                </span>
              </td>
              <td className="text-gray-500">
                0x9a3f...d21
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-4">Feb 2026</td>
              <td>$700</td>
              <td>
                <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">
                  pending
                </span>
              </td>
              <td className="text-gray-500">
                -
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}