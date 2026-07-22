import { createTheme } from "@mui/material/styles";
import { color, radius, elevation, fontFamily, typography } from "./tokens";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: color.bg.default,
      paper: color.bg.paper,
    },
    primary: {
      main: color.accent.default,
      dark: color.accent.hover,
      contrastText: color.accent.on,
    },
    success: { main: color.status.success },
    error: { main: color.status.error },
    text: {
      primary: color.text.primary,
      secondary: color.text.secondary,
    },
    divider: color.border.default,
  },

  shape: {
    borderRadius: radius.sm,
  },

  typography: {
    fontFamily: fontFamily.sans,
    h1: typography.title,
    h2: typography.cardTitle,
    h3: typography.wordmark,
    body1: typography.body,
    body2: typography.helper,
    button: typography.action,
    caption: typography.meta,
    overline: typography.label,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: color.bg.default,
          color: color.text.primary,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
        elevation1: { boxShadow: elevation.card },
      },
    },
  },
});
