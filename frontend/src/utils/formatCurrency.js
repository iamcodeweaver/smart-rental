export function formatCurrency(value) {
  if (!value && value !== 0) return "₦0";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}