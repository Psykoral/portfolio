import { ModernizationExample } from "@/data/examples";

export function countRiskSignals(code: string): number {
  const lower = code.toLowerCase();
  let score = 0;
  if (lower.includes("jquery") || lower.includes("$(")) score += 1;
  if (lower.includes("mysql_")) score += 2;
  if (lower.includes("$_get")) score += 1;
  if (lower.includes("toggleclass")) score += 1;
  return score;
}

export function modernizationSummary(example: ModernizationExample): string {
  return `${example.title}: ${example.summary.join(" ")}`;
}
