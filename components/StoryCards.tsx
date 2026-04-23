const cards = [
  {
    title: "Frontend modernization",
    text: "Frontend upgrades, structure cleanup, and a more reliable development workflow."
  },
  {
    title: "API and automation",
    text: "Backend refactors paired with recurring jobs, operational logging, and workflow automation."
  },
  {
    title: "Legacy platform recovery",
    text: "Compatibility fixes and workflow restoration work for an older PHP codebase."
  }
];

export function StoryCards() {
  return (
    <div style={{
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
    }}>
      {cards.map((card) => (
        <article
          key={card.title}
          style={{
            border: "1px solid #1e293b",
            borderRadius: 20,
            padding: 20,
            background: "#0f172a"
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "1.17em" }}>{card.title}</h2>
          <p style={{ marginBottom: 0, color: "#cbd5e1" }}>{card.text}</p>
        </article>
      ))}
    </div>
  );
}
