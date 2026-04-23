import { examples } from "@/data/examples";

describe("examples", () => {
  test("contains the expected modernization examples", () => {
    expect(examples.map((item) => item.id)).toEqual(
      expect.arrayContaining(["legacy-frontend", "api-workflows", "php-platform"])
    );
  });

  test("legacy php modernization example uses a current php label", () => {
    const php = examples.find((item) => item.id === "php-platform");
    expect(php?.modernLabel).toContain("PHP");
  });
});
