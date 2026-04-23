export default function Button({ children, onClick, variant = "primary" }) {
  const styles = {
    primary: "bg-black text-white",
    secondary: "border border-gray-300 text-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm ${styles[variant]}`}
    >
      {children}
    </button>
  );
}