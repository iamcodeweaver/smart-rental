import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import heroImage from "../assets/images/hero.jpeg";
import blockchainImg from "../assets/images/blockchain.png";
import autoLeaseImg from "../assets/images/auto_leases.jpeg";
import keyImg from "../assets/images/key.jpeg";
import notifyImg from "../assets/images/notify.jpeg";
import agreeImg from "../assets/images/agreement.jpeg";
import paymentImg from "../assets/images/payment.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* NAVBAR */}
        {/* <Navbar /> */}

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">

        {/* TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold leading-tight">
            Smart Contract-BRAS
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            A modern rental platform where landlords and tenants interact securely
            using smart contracts, transparent payments, and automated lease tracking.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-black text-white px-5 py-3 rounded-lg"
            >
              Start Renting
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border px-5 py-3 rounded-lg"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* IMAGE PLACEHOLDER */}
        <div className="w-full md:w-1/2">
        <img
            src={heroImage}
            alt="Smart Rental Dashboard"
            className="h-72 w-full object-cover rounded-xl border shadow-sm"
        />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-10 py-16 bg-gray-50">

        <h3 className="text-2xl font-semibold text-center mb-10">
          Why Smart Rental?
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl border">
            <img
            src={blockchainImg}
            alt="Blockchain Payments"
            className="h-32 w-full object-cover mb-4 rounded-lg border"
            />
            <h4 className="font-semibold">Blockchain Payments</h4>
            <p className="text-sm text-gray-600 mt-2">
              Secure and transparent rent payments tracked on-chain.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <img
            src={autoLeaseImg}
            alt="Automated Leases"
            className="h-32 w-full object-cover mb-4 rounded-lg border"
            />
            <h4 className="font-semibold">Automated Leases</h4>
            <p className="text-sm text-gray-600 mt-2">
              Smart contracts enforce rental agreements automatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <img
            src={keyImg}
            alt="Dual Dashboards"
            className="h-32 w-full object-cover mb-4 rounded-lg border"
            />
            <h4 className="font-semibold">Dual Dashboards</h4>
            <p className="text-sm text-gray-600 mt-2">
              Separate landlord and tenant dashboards for clarity.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-10 py-20">

        <h3 className="text-2xl font-semibold text-center mb-10">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <img
            src={notifyImg}
            alt="Step 1 - Signup"
            className="h-40 w-full object-cover rounded-lg mb-4 border"
            />
            <h4 className="font-semibold">Sign Up</h4>
            <p className="text-sm text-gray-600">
              Register as landlord or tenant.
            </p>
          </div>

          <div>
            <img
            src={agreeImg}
            alt="Step 2 - Agreement"
            className="h-40 w-full object-cover rounded-lg mb-4 border"
            />
            <h4 className="font-semibold">Create Agreement</h4>
            <p className="text-sm text-gray-600">
              Smart contract automatically defines lease terms.
            </p>
          </div>

          <div>
            <img
            src={paymentImg}
            alt="Step 3 - Payment"
            className="h-40 w-full object-cover rounded-lg mb-4 border"
            />
            <h4 className="font-semibold">Pay & Track</h4>
            <p className="text-sm text-gray-600">
              Payments recorded securely on blockchain.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}