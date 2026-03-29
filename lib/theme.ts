import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d2bbff",
      contrastText: "#3f008e",
    },
    secondary: {
      main: "#adc6ff",
      contrastText: "#002e6a",
    },
    background: {
      default: "#131313",
      paper: "#201f1f",
    },
    text: {
      primary: "#e5e2e1",
      secondary: "#c7c4d7",
    },
    divider: "#464554",
    error: {
      main: "#ffb4ab",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    h1: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "var(--font-manrope), Manrope, sans-serif",
      fontWeight: 700,
    },
    caption: {
      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      fontSize: "0.75rem",
    },
    overline: {
      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
      letterSpacing: "0.2em",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          fontWeight: 700,
          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          letterSpacing: "0.05em",
          borderRadius: "4px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#131313",
          scrollbarWidth: "thin",
        },
      },
    },
  },
});

export default theme;

// Design tokens (for use in sx props / styled)
export const colors = {
  surface: "#131313",
  surfaceContainerLowest: "#0e0e0e",
  surfaceContainerLow: "#1c1b1b",
  surfaceContainer: "#201f1f",
  surfaceContainerHigh: "#2a2a2a",
  surfaceContainerHighest: "#353534",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#c7c4d7",
  outline: "#908fa0",
  outlineVariant: "#464554",
  primary: "#d2bbff",
  primaryContainer: "#a476ff",
  onPrimary: "#3f008e",
  onPrimaryFixed: "#25005a",
  secondary: "#adc6ff",
  secondaryContainer: "#0566d9",
  onSecondary: "#002e6a",
  tertiary: "#ffb783",
  tertiaryContainer: "#d97721",
  onTertiary: "#4f2500",
};

export const gradients = {
  monolith: "linear-gradient(135deg, #d2bbff 0%, #a476ff 100%)",
};

export const glassPanelSx = {
  background: "rgba(32, 31, 31, 0.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(144, 143, 160, 0.1)",
} as const;

export const technicalGridSx = {
  backgroundImage:
    "radial-gradient(rgba(144, 143, 160, 0.15) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
} as const;
