import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import { formatCurrency } from "../utils/formatCurrency";

export default function MyLease() {
  const lease = {
    property: "Apartment 3B",
    landlord: "Smart Rental Landlord",
    rent: 700000,
    duration: "12 months",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    status: "active",
    contractAddress: "0xA12b...9f3c",
  };

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-6">My Lease</h1>

      <div className="grid grid-cols-2 gap-4">

        {/* Lease Info */}
        <Card>
          <h2 className="font-semibold text-lg mb-4">
            Lease Details
          </h2>

          <div className="space-y-2 text-sm text-gray-700">

            <p><strong>Property:</strong> {lease.property}</p>
            <p><strong>Landlord:</strong> {lease.landlord}</p>
            <p><strong>Status:</strong> {lease.status}</p>

            <p><strong>Start Date:</strong> {lease.startDate}</p>
            <p><strong>End Date:</strong> {lease.endDate}</p>

          </div>
        </Card>

        {/* Financial Info */}
        <Card>
          <h2 className="font-semibold text-lg mb-4">
            Rent Information
          </h2>

          <div className="space-y-2 text-sm text-gray-700">

            <p>
              <strong>Monthly Rent:</strong>{" "}
              {formatCurrency(lease.rent)}
            </p>

            <p>
              <strong>Contract Address:</strong>
            </p>

            <p className="text-xs text-gray-500 break-all">
              {lease.contractAddress}
            </p>

          </div>

          <div className="mt-5">
            <Button variant="primary">
              Pay Rent via Blockchain ⛓️
            </Button>
          </div>
        </Card>

      </div>
    </DashboardLayout>
  );
}