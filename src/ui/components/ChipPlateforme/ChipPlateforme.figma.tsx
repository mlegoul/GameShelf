import figma from "@figma/code-connect";
import { ChipPlateforme } from "./ChipPlateforme";

figma.connect(
  ChipPlateforme,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=43-1016",
  {
    example: () => <ChipPlateforme>PS5</ChipPlateforme>,
  },
);
