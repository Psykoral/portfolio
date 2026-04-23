"use client";

import { KeyboardEvent, useState } from "react";
import { examples } from "@/data/examples";
import { CodePanel } from "@/components/CodePanel";

function renderHighlightedText(text: string) {
  const parts = text.split(/(\[\[red:[^\]]+\]\])/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[\[red:(.+)\]\]$/);
    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <span
        key={`${match[1]}-${index}`}
        style={{ color: "#fca5a5", fontWeight: 700 }}
      >
        {match[1]}
      </span>
    );
  });
}

export function ExampleTabs() {
  const [activeId, setActiveId] = useState(examples[0].id);
  const active = examples.find((example) => example.id === activeId)!;
  const activeTabId = `example-tab-${active.id}`;
  const activePanelId = `example-panel-${active.id}`;

  function focusTab(nextIndex: number) {
    const nextExample = examples[nextIndex];
    setActiveId(nextExample.id);
    document.getElementById(`example-tab-${nextExample.id}`)?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab((currentIndex + 1) % examples.length);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab((currentIndex - 1 + examples.length) % examples.length);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab(examples.length - 1);
    }
  }

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div
        role="tablist"
        aria-label="Modernization examples"
        style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        {examples.map((example, index) => (
          <button
            key={example.id}
            id={`example-tab-${example.id}`}
            type="button"
            role="tab"
            aria-selected={activeId === example.id}
            aria-controls={`example-panel-${example.id}`}
            tabIndex={activeId === example.id ? 0 : -1}
            onClick={() => setActiveId(example.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            style={{
              borderRadius: 999,
              padding: "10px 16px",
              border: activeId === example.id ? "1px solid #7dd3fc" : "1px solid #475569",
              background: activeId === example.id ? "#0c4a6e" : "#0f172a",
              color: "#e2e8f0",
              cursor: "pointer"
            }}
          >
            {example.title}
          </button>
        ))}
      </div>

      <div
        id={activePanelId}
        role="tabpanel"
        aria-labelledby={activeTabId}
        tabIndex={0}
        style={{
          border: "1px solid #1e293b",
          borderRadius: 24,
          padding: 24,
          background: "#020617"
        }}
      >
        <h2 style={{ fontSize: 28, marginTop: 0 }}>{active.title}</h2>

        <div style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
        }}>
          <CodePanel label={active.legacyLabel} code={active.legacyCode} />
          <CodePanel label={active.modernLabel} code={active.modernCode} />
        </div>

        <div style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          marginTop: 24
        }}>
          <div>
            <h3>What changed</h3>
            <ul>
              {active.summary.map((item) => <li key={item}>{renderHighlightedText(item)}</li>)}
            </ul>
          </div>
          <div>
            <h3>How AI helped</h3>
            <ul>
              {active.aiContribution.map((item) => <li key={item}>{renderHighlightedText(item)}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
