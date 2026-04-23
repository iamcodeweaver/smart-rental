import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Leases() {
  const leases = [
    {
      id: 1,
      property: "Apartment 3B",
      tenant: "John Doe",
      rent: "$500",
      duration: "12 months",
      status: "active",
    },
    {
      id: 2,
      property: "Villa 1A",
      tenant: "Mary Smith",
      rent: "$800",
      duration: "6 months",
      status: "pending",
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Leases</h1>

        <Button>Create Lease</Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {leases.map((lease) => (
          <Card key={lease.id}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">
                  {lease.property}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Tenant: {lease.tenant}
                </p>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  lease.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {lease.status}
              </span>
            </div>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>Rent: {lease.rent}/month</p>
              <p>Duration: {lease.duration}</p>
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="secondary">View</Button>
              <Button variant="primary">Pay via Chain ⛓️</Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}