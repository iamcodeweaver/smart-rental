import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Properties() {
  const properties = [
    {
      id: 1,
      name: "Apartment 3B",
      location: "Lagos",
      rent: "$500",
      status: "active",
    },
    {
      id: 2,
      name: "Villa 1A",
      location: "Ibadan",
      rent: "$800",
      status: "vacant",
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Properties</h1>

        <Button>Add Property</Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {properties.map((p) => (
          <Card key={p.id}>
            <h2 className="font-semibold text-lg">{p.name}</h2>

            <p className="text-sm text-gray-500 mt-1">
              {p.location}
            </p>

            <p className="mt-3 font-medium">{p.rent}/month</p>

            <span
              className={`inline-block mt-3 text-xs px-2 py-1 rounded ${
                p.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {p.status}
            </span>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}