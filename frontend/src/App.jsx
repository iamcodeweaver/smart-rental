import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}