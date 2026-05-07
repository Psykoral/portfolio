import { capabilityGroups, focusAreas, recommendations } from "@/data/profile";

export function CapabilityMatrix() {
  return (
    <section style={{ marginTop: 28 }}>
      <div style={{
        display: "grid",
        gap: 18,
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
      }}>
        {focusAreas.map((area) => (
          <article
            key={area.title}
            style={{
              border: "1px solid #1e293b",
              borderRadius: 8,
              padding: 20,
              background: "#0f172a"
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: 22 }}>{area.title}</h2>
            <p style={{ marginBottom: 0, color: "#cbd5e1", lineHeight: 1.65 }}>{area.text}</p>
          </article>
        ))}
      </div>

      <div style={{
        marginTop: 28,
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))"
      }}>
        <div>
          <p style={{ color: "#38bdf8", fontWeight: 800, margin: "0 0 8px" }}>Tooling Range</p>
          <h2 style={{ fontSize: 34, lineHeight: 1.1, margin: "0 0 18px" }}>
            Comfortable from strategy room to source code.
          </h2>
          <div style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
          }}>
            {capabilityGroups.map((group) => (
              <section
                key={group.title}
                aria-label={group.title}
                style={{
                  border: "1px solid #1e293b",
                  borderRadius: 8,
                  padding: 18,
                  background: "#020617"
                }}
              >
                <h3 style={{ marginTop: 0 }}>{group.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        border: "1px solid #334155",
                        borderRadius: 999,
                        padding: "6px 10px",
                        color: "#e2e8f0",
                        background: "#0f172a",
                        fontSize: 13,
                        fontWeight: 700
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside style={{
          border: "1px solid #1e293b",
          borderRadius: 8,
          padding: 22,
          background: "#111827",
          alignSelf: "start"
        }}>
          <p style={{ color: "#38bdf8", fontWeight: 800, margin: "0 0 8px" }}>Peer Signal</p>
          <h2 style={{ marginTop: 0, fontSize: 26 }}>Recommended for pragmatic technical leadership.</h2>
          <ul style={{ color: "#cbd5e1", lineHeight: 1.7, paddingLeft: 20 }}>
            {recommendations.map((quote) => <li key={quote}>{quote}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
