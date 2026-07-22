import figma from "@figma/code-connect";
import { ChipStatut } from "./ChipStatut";

figma.connect(
  ChipStatut,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=43-1015",
  {
    props: {
      statut: figma.enum("Statut", {
        "À jouer": "a-jouer",
        "En cours": "en-cours",
        Terminé: "termine",
        Abandonné: "abandonne",
      }),
    },
    example: ({ statut }) => <ChipStatut statut={statut} />,
  },
);
