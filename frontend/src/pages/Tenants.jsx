import DashboardLayout from "../layouts/DashboardLayout";

export default function Tenants() {
  const tenants = [
    { id: 1, name: "John Doe", unit: "Apt 3B", status: "active" },
    { id: 2, name: "Mary Smith", unit: "Villa 1A", status: "inactive" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-6">Tenants</h1>

      <div className="bg-white border rounded-lg">
        {tenants.map((t) => (
          <div
            key={t.id}
            className="flex justify-between p-4 border-b"
          >
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-gray-500">{t.unit}</p>
            </div>

            <span
              className={`text-xs px-2 py-1 rounded ${
                t.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}