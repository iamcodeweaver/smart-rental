import { useEffect, useState } from "react";
import { getPayments } from "../services/api";

export default function usePayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments().then(setPayments);
  }, []);

  return payments;
}