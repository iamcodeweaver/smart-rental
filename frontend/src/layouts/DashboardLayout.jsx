import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        {/* <Topbar /> */}

        <main className="p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>

      </div>

    </div>
  );
}