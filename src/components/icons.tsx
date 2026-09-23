type IconProps = { size?: number };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function FlameIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        {...stroke}
        d="M12 3c1 3-3 4.5-3 8a3 3 0 0 0 6 0c0-1.2-.6-2-.6-2s3.6 1.4 3.6 5a6 6 0 0 1-12 0c0-5 4.5-7 6-11Z"
      />
    </svg>
  );
}

export function SnowflakeIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        {...stroke}
        d="M12 3v18M12 3l-2.5 2.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M4.2 7.5l15.6 9M4.2 7.5 7.6 8M4.2 7.5 4.7 11M19.8 16.5 16.4 16M19.8 16.5 19.3 13M4.2 16.5l15.6-9M4.2 16.5 4.7 13M4.2 16.5 7.6 16M19.8 7.5 19.3 11M19.8 7.5 16.4 8"
      />
    </svg>
  );
}

export function AirIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        {...stroke}
        d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 12h15a2.5 2.5 0 1 1-2.5 2.5M3 16h8a2.5 2.5 0 1 1-2.5 2.5"
      />
    </svg>
  );
}

export function WrenchIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        {...stroke}
        d="M14.5 6.5a4 4 0 0 0-5.1 5L4 16.9V20h3.1l5.4-5.4a4 4 0 0 0 5-5.1L14.8 12 12 9.2l2.5-2.7Z"
      />
    </svg>
  );
}

export function CheckIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path {...stroke} strokeWidth={2.4} d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ShieldIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        {...stroke}
        d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z"
      />
    </svg>
  );
}

export function ClockIcon({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle {...stroke} cx="12" cy="12" r="8.5" />
      <path {...stroke} d="M12 7.5V12l3 2" />
    </svg>
  );
}
