export default function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">

      <p className="text-sm text-gray-500">{label}</p>

      <h3 className="text-2xl font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}