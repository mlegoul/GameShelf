import figma from "@figma/code-connect";
import { GameCard } from "./GameCard";

figma.connect(
  GameCard,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=43-1033",
  {
    example: () => (
      <GameCard
        title="Hollow Knight"
        platform="Switch"
        year={2017}
        rating={4.5}
        statut="en-cours"
      />
    ),
  },
);
