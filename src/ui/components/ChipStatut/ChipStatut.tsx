import Box from "@mui/material/Box";
import { color, radius, typography } from "../../theme";

export type Statut = "a-jouer" | "en-cours" | "termine" | "abandonne";

export const STATUT_LABELS: Record<Statut, string> = {
  "a-jouer": "À jouer",
  "en-cours": "En cours",
  termine: "Terminé",
  abandonne: "Abandonné",
};

const STYLES: Record<Statut, { bg: string; fg: string; border?: string }> = {
  "a-jouer": {
    bg: "transparent",
    fg: color.text.secondary,
    border: color.border.strong,
  },
  "en-cours": { bg: color.accent.default, fg: color.accent.on },
  termine: {
    bg: "transparent",
    fg: color.status.success,
    border: color.status.success,
  },
  abandonne: { bg: color.bg.subtle, fg: color.text.secondary },
};

export interface ChipStatutProps {
  statut?: Statut;

  children?: React.ReactNode;
}

export const ChipStatut = ({
  statut = "a-jouer",
  children,
}: ChipStatutProps) => {
  const s = STYLES[statut];
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: "10px",
        py: "5px",
        borderRadius: `${radius.sm}px`,
        backgroundColor: s.bg,
        color: s.fg,
        border: s.border ? `1px solid ${s.border}` : "none",
        whiteSpace: "nowrap",
        ...typography.chip,
      }}
    >
      {children ?? STATUT_LABELS[statut]}
    </Box>
  );
};
