import { ExampleTabs } from "@/components/ExampleTabs";
import { CapabilityMatrix } from "@/components/CapabilityMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { StoryCards } from "@/components/StoryCards";
import { githubUrl, impactStats, linkedinUrl } from "@/data/profile";

export default function HomePage() {
  const generatedAtDate = new Date();
  const generatedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(generatedAtDate);

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 80px" }}>
      <section style={{
        padding: 32,
        borderRadius: 8,
        background: "#0b1120",
        border: "1px solid #1e293b",
        marginBottom: 28
      }}>
        <div style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: 999,
          background: "#082f49",
          color: "#bae6fd",
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 16
        }}>
          AI Solutions Architect | Technical Product Leader
        </div>
        <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: "0 0 12px" }}>
          Jim O&apos;Harra-Sutton builds the bridge between AI transformation, platform engineering, and teams that ship.
        </h1>
        <p style={{ maxWidth: 820, fontSize: 20, color: "#cbd5e1", lineHeight: 1.5 }}>
          My recent AI modernization work is one part of a broader portfolio: 20+ years leading
          Adobe.com engineering, managing web and marketing automation teams at Absorb, and
          combining architecture, product judgment, SEO, analytics, design collaboration, and
          delivery systems into production web experiences.
        </p>
        <div style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          margin: "24px 0"
        }}>
          {impactStats.map((stat) => (
            <div key={stat.label} style={{
              border: "1px solid #1e293b",
              borderRadius: 8,
              padding: 14,
              background: "#020617"
            }}>
              <strong style={{ display: "block", fontSize: 28, lineHeight: 1 }}>{stat.value}</strong>
              <span style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 700 }}>{stat.label}</span>
            </div>
          ))}
        </div>
        <p style={{ marginBottom: 0 }}>
          <a href={linkedinUrl} target={"_blank"} rel={"noreferrer"} aria-label={"Jim O'Harra-Sutton on LinkedIn"}>LinkedIn</a>
          {" | "}
          <a href={githubUrl} target={"_blank"} rel={"noreferrer"} aria-label={"Jim O'Harra-Sutton on GitHub"}>GitHub</a>
        </p>
      </section>

      <StoryCards />

      <CapabilityMatrix />

      <ExperienceTimeline />

      <section style={{ marginTop: 28 }}>
        <div style={{ marginBottom: 18 }}>
          <p style={{ color: "#38bdf8", fontWeight: 800, margin: "0 0 8px" }}>Featured Case Study</p>
          <h2 style={{ fontSize: 34, lineHeight: 1.1, margin: 0 }}>
            Recent AI-assisted modernization work.
          </h2>
        </div>
        <ExampleTabs />
      </section>

      <section style={{
        marginTop: 28,
        padding: 24,
        borderRadius: 8,
        border: "1px solid #1e293b",
        background: "#0f172a"
      }}>
        <h2 style={{ marginTop: 0 }}>This must have taken months, right?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          Not even close. The full frontend migration into Next.js took about 10 hours between two days, and the
          PHP modernization work took about 4 hours to not only resolve all the out of date functions,
          but also to add new functionality to bring the project up to modern standards. The longest part of the
          whole effort was probably waiting for DNS servers to finally agree that I really did create
          a new email domain and yes, it should be allowed to verify already so I can send out my emails.
        </p>
        <h2 style={{ marginTop: 0 }}>Ah, emails! Now there&apos;s a problem, right? How long did that take you?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          Let me tell you, with modern day standards that can format beautiful HTML emails from Node scripts...
          in a matter of seconds, I was done with the actual code to write the emails before DNS even knew what hit it.
        </p>
        <h2 style={{ marginTop: 0 }}>So you just &quot;talked to AI&quot; and it did it all for you?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          Not exactly, no. It&apos;s much more than that. The part that really speeds things up is knowing the state of the project,
          what you want it to do, what you want it to look like, and then working with AI right in your development
          environment (In my case, The &quot;new-at-the-time-of-this-article&quot; Codex 5.4 agent) over the course of lots of
          questions back and forth. It does take some trial and error, and it certainly does still help to have the
          knowledge of what it&apos;s supposed to do if you were to write it by hand.
        </p>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          With my 20+ years of professional development, I was able to work with Codex to show it what the site <i>was</i>,
          what the errors I&apos;m seeing are, what it&apos;s supposed to do now, what my services are, all the connection settings
          for those services, and a strong idea of what the code should look like, as well as what the CMS components
          should do in order to share them across multiple cases. Otherwise, if left completely to its own devices, it
          might not create the most efficient code or CMS components.
        </p>
        <h2 style={{ marginTop: 0 }}>Sure it looks nice, but the code is probably sloppy</h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          Well, you have to be careful, because it <i>can be</i>, but that&apos;s where the developers and architects still come
          into play. I make sure the code is concise, clean, reusable and developer friendly. I refine the prompts to
          ask Codex further questions that help identify any issues there and keep doing so until it&apos;s in a state that
          I&apos;m happy with. I also make sure the site is user friendly to devices, accessibility readers, and even page
          load speeds are kept in the 90+ range. Any major issues that would slow the page down (which also affects SEO
          value, by the way) are identified and addressed.
        </p>
        <h2 style={{ marginTop: 0 }}>OK, so it was fast because you already had something to work with?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          Well, in the case of those whole-site conversion projects, yes. However, I can also just start completely
          from scratch and build an entire application by asking Codex the right questions and pointing to the proper
          services. I mean, you didn&apos;t think I built this portfolio site by <i>hand</i> after just boasting about
          AI&apos;s capabilities, did you?
        </p>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
          And how can this be? For he IS...
        </p>
        <h2 style={{ marginTop: 0 }}><a href={"https://www.linkedin.com/in/jimoharrasutton/"} target={"_blank"} rel={"noreferrer"} aria-label={"Jim O'Harra-Sutton, AI Solutions Architect on LinkedIn"}>Jim O&apos;Harra-Sutton, AI Solutions Architect</a></h2>
      </section>

      <footer style={{
        marginTop: 20,
        fontSize: 12,
        color: "#cbd5e1",
        textAlign: "right"
      }}>
        <time dateTime={generatedAtDate.toISOString()}>
          Generated {generatedAt}
        </time>
      </footer>
    </main>
  );
}
