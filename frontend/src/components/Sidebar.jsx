export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">

      <h1 className="text-xl font-semibold mb-8">
        Smart Rental
      </h1>

      <nav className="space-y-4 text-sm">

        <p className="font-medium">Dashboard</p>
        <p className="text-gray-500">Properties</p>
        <p className="text-gray-500">Tenants</p>
        <p className="text-gray-500">Leases</p>
        <p className="text-gray-500">Payments ⛓️</p>

      </nav>

    </div>
  );
}