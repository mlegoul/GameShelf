import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=43-1006",
  {
    props: {
      kind: figma.enum("Kind", {
        Primary: "primary",
        Ghost: "ghost",
      }),
    },
    example: ({ kind }) => <Button kind={kind}>Ajouter un jeu</Button>,
  },
);
