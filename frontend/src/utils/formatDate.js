/**
 * Formats a date into a clean SaaS-friendly format
 * Example: 2026-04-23 → Apr 23, 2026
 */

export function formatDate(dateInput) {
  if (!dateInput) return "-";

  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return "-";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}