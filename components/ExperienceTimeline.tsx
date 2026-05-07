import { experience, projects } from "@/data/profile";

export function ExperienceTimeline() {
  return (
    <section style={{ marginTop: 28 }}>
      <div style={{ marginBottom: 18 }}>
        <p style={{ color: "#38bdf8", fontWeight: 800, margin: "0 0 8px" }}>Career Depth</p>
        <h2 style={{ fontSize: 34, lineHeight: 1.1, margin: 0 }}>
          AI is the newest chapter, built on years of platform leadership.
        </h2>
      </div>

      <div style={{ display: "grid", gap: 18 }}>
        {experience.map((job) => (
          <article
            key={job.company}
            style={{
              border: "1px solid #1e293b",
              borderRadius: 8,
              padding: 22,
              background: "#0f172a"
            }}
          >
            <div style={{ display: "flex", gap: 12, justifyContent: "space-between", flexWrap: "wrap" }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 24 }}>{job.company}</h3>
                <p style={{ margin: "4px 0 0", color: "#bae6fd", fontWeight: 700 }}>{job.role}</p>
              </div>
              <p style={{ margin: 0, color: "#cbd5e1", fontWeight: 700 }}>{job.years}</p>
            </div>
            <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>{job.description}</p>
            <ul style={{ marginBottom: 0, color: "#e2e8f0", lineHeight: 1.7 }}>
              {job.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <p style={{ color: "#38bdf8", fontWeight: 800, margin: "0 0 8px" }}>Selected Work</p>
        <div style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
        }}>
          {projects.map((project) => (
            <article
              key={project.name}
              style={{
                border: "1px solid #1e293b",
                borderRadius: 8,
                padding: 18,
                background: "#020617"
              }}
            >
              <p style={{ margin: "0 0 6px", color: "#94a3b8", fontWeight: 700 }}>{project.date}</p>
              <h3 style={{ margin: "0 0 8px", fontSize: 20 }}>{project.name}</h3>
              <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>{project.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
