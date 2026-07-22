import figma from "@figma/code-connect";
import { Snackbar } from "./Snackbar";

figma.connect(
  Snackbar,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=54-16",
  {
    props: {
      type: figma.enum("Type", {
        Succès: "succes",
        Erreur: "erreur",
        Undo: "undo",
      }),
      message: figma.enum("Type", {
        Succès: "Jeu ajouté à la collection",
        Erreur: "Échec de la suppression",
        Undo: "Jeu supprimé",
      }),
    },
    example: ({ type, message }) => <Snackbar type={type} message={message} />,
  },
);
