import { countRiskSignals, modernizationSummary } from "@/lib/analysis";
import { examples } from "@/data/examples";

describe("analysis helpers", () => {
  test("counts legacy risk signals", () => {
    expect(countRiskSignals(examples[0].legacyCode)).toBeGreaterThan(0);
    expect(countRiskSignals(examples[2].legacyCode)).toBeGreaterThan(0);
  });

  test("builds modernization summary", () => {
    expect(modernizationSummary(examples[0])).toContain("frontend");
  });
});
