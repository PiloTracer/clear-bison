type IconName =
  | "check"
  | "minus"
  | "user"
  | "shield"
  | "lock"
  | "eye"
  | "scale"
  | "spark"
  | "file"
  | "globe"
  | "terminal"
  | "wrench"
  | "arrow"
  | "plus"
  | "seat"
  | "doc";

const PATHS: Record<IconName, string> = {
  check: "M5 12.5l4.2 4.2L19 7",
  minus: "M6 12h12",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0",
  shield: "M12 3l7 3v5.5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V6l7-3zm-3 9l2.2 2.2L15.5 10",
  lock: "M7 11V8a5 5 0 0110 0v3M5.5 11h13v9.5h-13zM12 15v2.5",
  eye: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12zM12 15a3 3 0 100-6 3 3 0 000 6z",
  scale: "M12 4v16M6 20h12M4 8h16M7 8l-3 6a3 3 0 006 0L7 8zm10 0l-3 6a3 3 0 006 0l-3-6z",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6",
  file: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zm0 0v5h5M9 13h6M9 17h4",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  terminal: "M4 5h16v14H4zM8 10l3 2.5L8 15M13 15h3",
  wrench: "M14.5 6.5a4 4 0 00-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 005.3-5.3l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  plus: "M12 5v14M5 12h14",
  seat: "M12 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5 20v-1a7 7 0 0114 0v1M17 4.5l1.5 1.5L21 3.5",
  doc: "M8 3h8l4 4v14H4V3h4zM8 12h8M8 16h8M8 8h4",
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

export type { IconName };
