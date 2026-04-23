import DashboardLayout from "../layouts/DashboardLayout";

export default function Payments() {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold">Payments (On-chain)</h1>

      <div className="mt-6 bg-white border p-4 rounded-lg">
        Blockchain payment history will appear here ⛓️
      </div>
    </DashboardLayout>
  );
}