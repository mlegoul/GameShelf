import Box from "@mui/material/Box";
import MuiDialog from "@mui/material/Dialog";
import { color, elevation, radius, typography } from "../../theme";
import { Button } from "../Button/Button";

export interface DialogProps {
  open: boolean;
  title: string;
  description?: React.ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;

  destructive?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Dialog = ({
  open,
  title,
  description,
  cancelLabel = "Annuler",
  confirmLabel = "Supprimer",
  destructive = true,
  onCancel,
  onConfirm,
}: DialogProps) => (
  <MuiDialog
    open={open}
    onClose={onCancel}
    aria-labelledby="gs-dialog-title"
    slotProps={{
      paper: {
        sx: {
          width: 440,
          maxWidth: "100%",
          m: 0,
          p: "28px",
          gap: "12px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: color.bg.paper,
          border: `1px solid ${color.border.default}`,
          borderRadius: `${radius.sm}px`,
          boxShadow: elevation.lift,
        },
      },
    }}
  >
    <Box
      id="gs-dialog-title"
      sx={{ ...typography.title, color: color.text.primary }}
    >
      {title}
    </Box>

    {description && (
      <Box
        sx={{
          ...typography.body,
          color: color.text.secondary,
          lineHeight: 1.5,
        }}
      >
        {description}
      </Box>
    )}

    <Box
      sx={{
        display: "flex",
        gap: "10px",
        justifyContent: "flex-end",
        pt: "12px",
      }}
    >
      <Button kind="ghost" onClick={onCancel} sx={{ py: "10px" }}>
        {cancelLabel}
      </Button>
      <Button
        onClick={onConfirm}
        sx={{
          py: "10px",
          ...(destructive && {
            backgroundColor: color.status.error,
            "&:hover": {
              backgroundColor: color.status.error,
              filter: "brightness(0.9)",
            },
          }),
        }}
      >
        {confirmLabel}
      </Button>
    </Box>
  </MuiDialog>
);
