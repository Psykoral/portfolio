import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "AI-Assisted Modernization",
  description: "An anonymized case study of how I used AI to upgrade legacy applications, restore workflows, and add automation around delivery."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <head>
        <style>{`
          :root {
            --font-body: ${bodyFont.style.fontFamily};
            --font-heading: ${headingFont.style.fontFamily};
          }

          a {
            color: #7dd3fc;
            text-decoration: underline;
            text-decoration-color: rgba(125, 211, 252, 0.45);
            text-decoration-thickness: 1px;
            text-underline-offset: 0.16em;
            transition: color 160ms ease, text-decoration-color 160ms ease;
          }

          a:hover {
            color: #e0f2fe;
            text-decoration: none;
          }

          a:focus-visible,
          button:focus-visible,
          [role="tabpanel"]:focus-visible {
            outline: 2px solid #facc15;
            outline-offset: 3px;
          }

          body {
            font-family: var(--font-body), sans-serif;
            line-height: 1.5;
          }

          h1, h2, h3 {
            font-family: var(--font-heading), serif;
            font-weight: 600;
            letter-spacing: -0.02em;
          }
        `}</style>
      </head>
      <body style={{
        margin: 0,
        background: "#020617",
        color: "#f8fafc"
      }}>
        {children}
      </body>
    </html>
  );
}
