import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { connectWallet, payRent } from "../services/blockchain";

export default function PayRent() {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  // UI display (naira)
  const rent = 700000;

  // blockchain value (must match contract rentAmount)
  const rentInEth = 0.01;

  // 🔌 CONNECT WALLET
  const handleConnectWallet = async () => {
    try {
      const account = await connectWallet();
      setWallet(account);
    } catch (err) {
      alert(err.message);
    }
  };

  // 💸 PAY RENT (ON-CHAIN)
  const handlePay = async () => {
    if (!wallet) {
      alert("Connect wallet first");
      return;
    }

    setLoading(true);
    setTxHash("");

    try {
      const tx = await payRent(rentInEth);
      setTxHash(tx);
    } catch (err) {
      console.error(err);
      alert(err.message || "Transaction failed");
    }

    setLoading(false);
  };

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-6">
        Pay Rent
      </h1>

      <div className="grid grid-cols-2 gap-4">

        {/* 💰 PAYMENT SUMMARY */}
        <Card>
          <h2 className="font-semibold text-lg mb-4">
            Payment Summary
          </h2>

          <p className="text-sm text-gray-600 mb-2">
            Monthly Rent:
          </p>

          <h3 className="text-2xl font-bold mb-4">
            {formatCurrency(rent)}
          </h3>

          <p className="text-xs text-gray-500">
            Payment is processed via smart contract on local blockchain
          </p>
        </Card>

        {/* 🔗 WALLET + PAYMENT */}
        <Card>
          <h2 className="font-semibold text-lg mb-4">
            Blockchain Payment
          </h2>

          {/* Wallet status */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">
              Wallet Status
            </p>

            {wallet ? (
              <p className="text-xs text-green-600 break-all">
                Connected: {wallet}
              </p>
            ) : (
              <p className="text-xs text-red-500">
                Not connected
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button
              variant="secondary"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>

            <Button onClick={handlePay}>
              {loading ? "Processing..." : "Pay Rent ⛓️"}
            </Button>
          </div>

          {/* TX RESULT */}
          {txHash && (
            <div className="mt-4 text-xs text-gray-600">
              <p className="mb-1">Transaction Successful:</p>
              <p className="text-green-600 break-all">
                {txHash}
              </p>
            </div>
          )}
        </Card>

      </div>
    </DashboardLayout>
  );
}