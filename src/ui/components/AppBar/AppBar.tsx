import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { color, radius, typography } from "../../theme";
import { Button } from "../Button/Button";

export interface AppBarProps {
  title?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  actionLabel?: string;
  onAction?: () => void;
}

export const AppBar = ({
  title = "GameShelf",
  searchPlaceholder = "Rechercher un titre…",
  searchValue,
  onSearchChange,
  actionLabel = "Ajouter un jeu",
  onAction,
}: AppBarProps) => (
  <Box
    component="header"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      px: "24px",
      py: "14px",
      backgroundColor: color.bg.paper,
      borderBottom: `1px solid ${color.border.default}`,
    }}
  >
    <Box sx={{ ...typography.wordmark, color: color.text.primary }}>
      {title}
    </Box>

    <InputBase
      value={searchValue}
      onChange={(e) => onSearchChange?.(e.target.value)}
      placeholder={searchPlaceholder}
      inputProps={{ "aria-label": searchPlaceholder }}
      sx={{
        width: 420,
        maxWidth: "100%",
        px: "12px",
        py: "9px",
        borderRadius: `${radius.sm}px`,
        border: `1px solid ${color.border.default}`,
        "& .MuiInputBase-input": {
          p: 0,
          ...typography.body,
          color: color.text.primary,
          "&::placeholder": { color: color.text.secondary, opacity: 1 },
        },
      }}
    />

    <Button onClick={onAction} sx={{ py: "10px" }}>
      {actionLabel}
    </Button>
  </Box>
);
