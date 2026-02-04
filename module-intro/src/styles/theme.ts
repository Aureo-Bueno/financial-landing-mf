export const theme = {
  colors: {
    primary: "#2563EB",
    primaryLight: "#DBEAFE",
    primaryDark: "#1D4ED8",
    secondary: "#0F766E",
    secondaryLight: "#CCFBF1",
    secondaryDark: "#115E59",
    bg: "#F9FAFB",
    bgAlt: "#FFFFFF",
    text: "#111827",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    success: "#16A34A",
    successBg: "#DCFCE7",
    warning: "#F59E0B",
    warningBg: "#FEF3C7",
    danger: "#DC2626",
    dangerBg: "#FEE2E2",
  },
  radii: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    pill: "999px",
  },
  shadows: {
    sm: "0 6px 20px rgba(15, 23, 42, 0.08)",
    md: "0 18px 40px rgba(15, 23, 42, 0.12)",
  },
  typography: {
    fontFamily: "'Sora', 'Avenir Next', 'Segoe UI', sans-serif",
  },
} as const;

export type Theme = typeof theme;
