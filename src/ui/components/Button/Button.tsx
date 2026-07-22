import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";
import { color, radius, typography } from "../../theme";

export type ButtonKind = "primary" | "ghost";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  kind?: ButtonKind;
  children: React.ReactNode;
}

export const Button = ({
  kind = "primary",
  children,
  sx,
  ...rest
}: ButtonProps) => (
  <MuiButton
    disableElevation
    disableRipple
    {...rest}
    sx={{
      px: "20px",
      py: "12px",
      minWidth: 0,
      borderRadius: `${radius.sm}px`,
      textTransform: "none",
      fontFamily: typography.action.fontFamily,
      fontSize: typography.action.fontSize,
      fontWeight: typography.action.fontWeight,
      lineHeight: "normal",
      transition: "background-color 120ms ease, border-color 120ms ease",

      ...(kind === "primary"
        ? {
            backgroundColor: color.accent.default,
            color: color.accent.on,
            border: "none",
            "&:hover": { backgroundColor: color.accent.hover },
          }
        : {
            backgroundColor: "transparent",
            color: color.text.primary,
            border: `1.5px solid ${color.border.strong}`,
            "&:hover": { backgroundColor: color.bg.subtle },
          }),

      "&.Mui-disabled": {
        opacity: 0.4,
        ...(kind === "primary"
          ? { backgroundColor: color.accent.default, color: color.accent.on }
          : {
              color: color.text.primary,
              border: `1.5px solid ${color.border.strong}`,
            }),
      },

      ...sx,
    }}
  >
    {children}
  </MuiButton>
);
