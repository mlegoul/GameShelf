import { useState } from "react";
import Box from "@mui/material/Box";
import { AppBar, ChipStatut, GameCard, type Statut } from "./ui/components";
import { color } from "./ui/theme";

const GAMES = [
  {
    title: "Hollow Knight",
    platform: "Switch",
    year: 2017,
    rating: 4.5,
    statut: "en-cours",
  },
  {
    title: "Elden Ring",
    platform: "PS5",
    year: 2022,
    rating: 5,
    statut: "termine",
  },
  {
    title: "Zelda : Tears of the Kingdom",
    platform: "Switch",
    year: 2023,
    rating: 4.5,
    statut: "termine",
  },
  {
    title: "Stardew Valley",
    platform: "Switch",
    year: 2016,
    rating: 4.5,
    statut: "a-jouer",
  },
] satisfies {
  title: string;
  platform: string;
  year: number;
  rating: number;
  statut: Statut;
}[];

export default function App() {
  const [search, setSearch] = useState("");

  const games = GAMES.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box sx={{ minHeight: "100%", backgroundColor: color.bg.default }}>
      <AppBar searchValue={search} onSearchChange={setSearch} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          px: "24px",
          py: "20px",
          borderBottom: `1px solid ${color.border.default}`,
        }}
      >
        <ChipStatut statut="a-jouer" />
        <ChipStatut statut="en-cours" />
        <ChipStatut statut="termine" />
        <ChipStatut statut="abandonne" />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "24px",
          p: "24px",
        }}
      >
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </Box>
    </Box>
  );
}
