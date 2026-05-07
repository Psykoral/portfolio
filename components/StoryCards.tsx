const cards = [
  {
    title: "AI transformation",
    text: "Private LLMs, AI-assisted coding workflows, CMS automation, and legacy modernization."
  },
  {
    title: "Platform engineering",
    text: "React, Next.js, AEM, Contentful, CI/CD, analytics, SEO, and production web systems."
  },
  {
    title: "Team leadership",
    text: "Management across development, website, and marketing automation teams."
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
            borderRadius: 8,
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
