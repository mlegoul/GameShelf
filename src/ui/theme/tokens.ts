export const color = {
  accent: {
    default: "#111111",

    hover: "#4A4A4A",

    on: "#FFFFFF",
  },
  bg: {
    default: "#FFFFFF",
    paper: "#FFFFFF",

    subtle: "#F5F1E8",
  },
  text: {
    primary: "#111111",
    secondary: "#808080",
  },
  border: {
    default: "#E5E5E5",
    strong: "#808080",
  },
  status: {
    success: "#2F6B4F",
    error: "#A6392F",
  },
} as const;

export const radius = {
  sm: 2,
} as const;

export const elevation = {
  card: "0px 2px 12px rgba(0, 0, 0, 0.06)",

  lift: "0px 4px 16px rgba(0, 0, 0, 0.10)",
} as const;

export const fontFamily = {
  sans: '"Inter", system-ui, sans-serif',

  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const typography = {
  wordmark: {
    fontFamily: fontFamily.sans,
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
  },

  title: {
    fontFamily: fontFamily.sans,
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.25px",
  },

  cardTitle: {
    fontFamily: fontFamily.sans,
    fontSize: 16,
    fontWeight: 600,
  },

  body: {
    fontFamily: fontFamily.sans,
    fontSize: 14,
    fontWeight: 400,
  },

  action: {
    fontFamily: fontFamily.sans,
    fontSize: 14,
    fontWeight: 600,
  },

  label: {
    fontFamily: fontFamily.sans,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
  },

  chip: {
    fontFamily: fontFamily.sans,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
  },

  helper: {
    fontFamily: fontFamily.sans,
    fontSize: 12,
    fontWeight: 400,
  },

  meta: {
    fontFamily: fontFamily.mono,
    fontSize: 12,
    fontWeight: 400,
  },
} as const;

export const tokens = {
  color,
  radius,
  elevation,
  fontFamily,
  typography,
} as const;

export type Tokens = typeof tokens;
