import { fireEvent, render, screen } from "@testing-library/react";

import { ExampleTabs } from "@/components/ExampleTabs";
import { examples } from "@/data/examples";

describe("ExampleTabs", () => {
  test("renders the first example by default", () => {
    render(<ExampleTabs />);

    expect(screen.getByRole("heading", { name: examples[0].title })).toBeInTheDocument();
    expect(screen.getByText(examples[0].legacyLabel)).toBeInTheDocument();
    expect(screen.getByText(examples[0].modernLabel)).toBeInTheDocument();
    expect(screen.getByText(examples[0].summary[0])).toBeInTheDocument();
    expect(screen.getByText(examples[0].aiContribution[0])).toBeInTheDocument();
  });

  test("switches visible content when a different example tab is clicked", () => {
    render(<ExampleTabs />);

    fireEvent.click(screen.getByRole("tab", { name: examples[1].title }));

    expect(screen.getByRole("heading", { name: examples[1].title })).toBeInTheDocument();
    expect(screen.getByText(examples[1].legacyLabel)).toBeInTheDocument();
    expect(screen.getByText(examples[1].modernLabel)).toBeInTheDocument();
    expect(screen.getByText(examples[1].summary[1])).toBeInTheDocument();
    expect(screen.getByText(examples[1].aiContribution[1])).toBeInTheDocument();
  });
});
