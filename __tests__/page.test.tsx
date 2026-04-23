import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage", () => {
  test("renders the main headline and supporting sections", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /how i migrated failing, error ridden, legacy projects/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Frontend modernization")).toBeInTheDocument();
    expect(screen.getByText("API and automation")).toBeInTheDocument();
    expect(screen.getByText("Legacy platform recovery")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "This must have taken you months, right?"
      })
    ).toBeInTheDocument();
  });

  test("renders the external linkedin calls to action", () => {
    render(<HomePage />);

    const links = screen.getAllByRole("link", { name: /jim o'harra-sutton/i });

    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/jimoharrasutton/");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    }
  });
});
