import Box from "@mui/material/Box";
import { color, radius, typography } from "../../theme";

export interface ChipPlateformeProps {
  children: React.ReactNode;
}

export const ChipPlateforme = ({ children }: ChipPlateformeProps) => (
  <Box
    component="span"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      px: "10px",
      py: "5px",
      borderRadius: `${radius.sm}px`,
      border: `1px solid ${color.border.default}`,
      color: color.text.primary,
      whiteSpace: "nowrap",
      ...typography.meta,
    }}
  >
    {children}
  </Box>
);
