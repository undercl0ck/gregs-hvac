type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  inverse?: boolean;
};

/** Steel circle + three chevrons (bottom copper) + wordmark. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="15" fill="#1E3A4C" />
      <path
        d="M9 12.5 L16 8.5 L23 12.5"
        fill="none"
        stroke="#F6F4F1"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18 L16 14 L23 18"
        fill="none"
        stroke="#F6F4F1"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 23.5 L16 19.5 L23 23.5"
        fill="none"
        stroke="#C17A3A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ size = 40, withWordmark = true, inverse = false }: LogoProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-sm)",
      }}
    >
      <LogoMark size={size} />
      {withWordmark && (
        <span
          className="brand-wordmark"
          style={inverse ? { color: "var(--color-surface)" } : undefined}
        >
          Greg's HVAC
        </span>
      )}
    </span>
  );
}
