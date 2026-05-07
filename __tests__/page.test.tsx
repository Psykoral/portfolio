import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage", () => {
  test("renders the main headline and supporting sections", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /jim o'harra-sutton builds the bridge/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText("AI transformation")).toBeInTheDocument();
    expect(screen.getByText("Platform engineering")).toBeInTheDocument();
    expect(screen.getByText("Team leadership")).toBeInTheDocument();
    expect(screen.getByText("Absorb Software")).toBeInTheDocument();
    expect(screen.getByText("Adobe")).toBeInTheDocument();
    expect(screen.getByText("AEM")).toBeInTheDocument();
    expect(screen.getByText("Figma")).toBeInTheDocument();
    expect(screen.getByText("Jira")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "This must have taken months, right?"
      })
    ).toBeInTheDocument();
  });

  test("renders the external linkedin calls to action", () => {
    render(<HomePage />);

    const links = screen
      .getAllByRole("link", { name: /jim o'harra-sutton/i })
      .filter((link) => link.getAttribute("href") === "https://www.linkedin.com/in/jimoharrasutton/");

    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/jimoharrasutton/");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    }
  });
});
