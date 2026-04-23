import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import { formatCurrency } from "../utils/formatCurrency";

export default function Dashboard() {
    const stats = [
    { label: "Total Revenue", value: 1245000, type: "currency" },
    { label: "Tenants", value: 24, type: "number" },
    { label: "Properties", value: 8, type: "number" },
    { label: "On-chain Payments", value: "98%", type: "text" },
    ];

  const payments = [
    {
      tenant: "John Doe",
      property: "Apt 3B",
      amount: 500000,
      status: "paid",
      tx: "0x8f3a...c21",
    },
    {
      tenant: "Mary Smith",
      property: "Apt 1A",
      amount: 700000,
      status: "pending",
      tx: "-",
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          landlord@smart-rental.com
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => (
          <Card key={i}>
            <p className="text-sm text-gray-500">{s.label}</p>
<h2 className="text-xl font-semibold mt-2">
  {s.type === "currency"
    ? formatCurrency(s.value)
    : s.value}
</h2>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white border rounded-xl">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Recent Payments</h2>
        </div>

        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="p-4">Tenant</th>
              <th>Property</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Tx Hash</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{p.tenant}</td>
                <td>{p.property}</td>
                <td>{formatCurrency(p.amount)}</td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      p.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="text-gray-500">{p.tx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}