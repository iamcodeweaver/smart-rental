import Badge from "./Badge";

export default function Table() {

  const data = [
    {
      tenant: "John Doe",
      property: "Apt 3B",
      amount: "$500",
      status: "paid",
      tx: "0x8f3a...c21"
    },
    {
      tenant: "Mary Smith",
      property: "Apt 1A",
      amount: "$700",
      status: "pending",
      tx: "-"
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-6">

      <div className="p-4 border-b">
        <h3 className="font-medium">Recent Payments</h3>
      </div>

      <table className="w-full text-sm">

        <thead className="text-gray-500 text-left">
          <tr>
            <th className="p-4">Tenant</th>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Tx Hash</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-t">

              <td className="p-4">{item.tenant}</td>
              <td>{item.property}</td>
              <td>{item.amount}</td>

              <td>
                <Badge status={item.status} />
              </td>

              <td className="text-gray-500">
                {item.tx}
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}