type CodePanelProps = {
  label: string;
  code: string;
};

export function CodePanel({ label, code }: CodePanelProps) {
  return (
    <section aria-label={label} style={{ flex: 1, minWidth: 0 }}>
      <h3 style={{
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 8,
        color: "#cbd5e1"
      }}>
        {label}
      </h3>
      <pre style={{
        margin: 0,
        padding: 16,
        borderRadius: 16,
        overflowX: "auto",
        background: "#0f172a",
        color: "#e2e8f0",
        minHeight: 320,
        border: "1px solid #334155"
      }}>
        <code>{code}</code>
      </pre>
    </section>
  );
}
