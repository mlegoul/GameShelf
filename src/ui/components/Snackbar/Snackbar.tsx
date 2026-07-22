import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { color, radius, typography } from "../../theme";

export type SnackbarType = "succes" | "erreur" | "undo";

const DOT: Record<SnackbarType, string> = {
  succes: color.status.success,
  erreur: color.status.error,

  undo: color.status.success,
};

export interface SnackbarProps {
  type?: SnackbarType;
  message: React.ReactNode;

  actionLabel?: string;
  onAction?: () => void;
}

export const Snackbar = ({
  type = "succes",
  message,
  actionLabel = "Annuler",
  onAction,
}: SnackbarProps) => (
  <Box
    role="status"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      px: "16px",
      py: "12px",
      borderRadius: `${radius.sm}px`,
      backgroundColor: color.accent.default,
      color: color.accent.on,
    }}
  >
    <Box
      sx={{
        width: 8,
        height: 8,
        flexShrink: 0,
        borderRadius: "50%",
        backgroundColor: DOT[type],
      }}
    />

    <Box sx={{ ...typography.body, fontWeight: 500, whiteSpace: "nowrap" }}>
      {message}
    </Box>

    {type === "undo" && (
      <ButtonBase
        onClick={onAction}
        disableRipple
        sx={{
          ...typography.label,
          fontSize: 13,
          fontWeight: 600,
          color: color.accent.on,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {actionLabel}
      </ButtonBase>
    )}
  </Box>
);
