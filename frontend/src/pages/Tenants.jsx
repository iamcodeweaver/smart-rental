import DashboardLayout from "../layouts/DashboardLayout";

export default function Tenants() {
  const tenants = [
    { id: 1, name: "John Doe", unit: "Apt 3B", status: "active" },
    { id: 2, name: "Mary Smith", unit: "Villa 1A", status: "inactive" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-6">Tenants</h1>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

        {/* Table */}
        <table className="w-full text-sm">

          {/* Header */}
          <thead className="bg-gray-50 text-gray-500 text-left">
            <tr>
              <th className="p-4">Name</th>
              <th>Unit</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {tenants.map((t) => (
              <tr key={t.id} className="border-t">

                <td className="p-4 font-medium">
                  {t.name}
                </td>

                <td>{t.unit}</td>

                <td>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      t.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </DashboardLayout>
  );
}