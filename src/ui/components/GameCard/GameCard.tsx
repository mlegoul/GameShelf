import Box from "@mui/material/Box";
import { color, elevation, typography } from "../../theme";
import { ChipStatut, type Statut } from "../ChipStatut/ChipStatut";

export interface GameCardProps {
  title: string;

  platform: string;
  year: number | string;

  rating?: number;
  statut?: Statut;

  coverUrl?: string;
  onClick?: () => void;
}

export const GameCard = ({
  title,
  platform,
  year,
  rating,
  statut = "en-cours",
  coverUrl,
  onClick,
}: GameCardProps) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minWidth: 240,
      backgroundColor: color.bg.paper,
      border: `1px solid ${color.border.default}`,
      boxShadow: elevation.card,
      cursor: onClick ? "pointer" : "default",
    }}
  >
    <Box
      sx={{
        position: "relative",
        height: 320,
        backgroundColor: color.bg.subtle,
        backgroundImage: coverUrl ? `url(${coverUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: 12, left: 12 }}>
        <ChipStatut statut={statut} />
      </Box>
    </Box>

    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "8px", p: "16px" }}
    >
      <Box sx={{ ...typography.cardTitle, color: color.text.primary }}>
        {title}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          ...typography.meta,
        }}
      >
        <Box component="span" sx={{ color: color.text.secondary }}>
          {platform.toUpperCase()} · {year}
        </Box>
        {rating !== undefined && (
          <Box component="span" sx={{ color: color.text.primary }}>
            ★ {rating.toLocaleString("fr-FR", { minimumFractionDigits: 1 })}
          </Box>
        )}
      </Box>
    </Box>
  </Box>
);
