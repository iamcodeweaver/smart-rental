const BASE_URL = "http://localhost:5000/api";

export async function getPayments() {
  const res = await fetch(`${BASE_URL}/payments`);
  return res.json();
}