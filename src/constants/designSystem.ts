export const DESIGN_SYSTEM = {
  app: {
    name: "VICA",
    tagline: "Build. Code. Grow.",
  },

  font: {
    family: "Manrope",
  },

  colors: {
    primary: {
      900: "#0D1B2A",
      700: "#1B2D4A",
      500: "#2E4A7D",
      300: "#5477A6",
      100: "#EBEEF7",
    },

    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#38AFDA",

    neutral: {
      900: "#0F172A",
      700: "#334155",
      500: "#64748B",
      300: "#CBD5E1",
      100: "#F1F5F9",
      white: "#FFFFFF",
    },
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
  },

  shadows: {
    none: "none",

    xs: "0 1px 2px rgba(15,23,42,0.05)",

    sm: "0 2px 4px rgba(15,23,42,0.06)",

    md: "0 6px 12px rgba(15,23,42,0.08)",

    lg: "0 12px 24px rgba(15,23,42,0.10)",

    xl: "0 24px 48px rgba(15,23,42,0.12)",
  },

  spacing: {
    8: "8px",
    16: "16px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
    64: "64px",
  },

  level: {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-yellow-100 text-yellow-700",
    advanced: "bg-red-100 text-red-700",
  },

  assignment: {
    exercise: "bg-blue-100 text-blue-700",
    challenge: "bg-orange-100 text-orange-700",
    project: "bg-purple-100 text-purple-700",
    capstone: "bg-green-100 text-green-700",
  },
} as const;