import figma from "@figma/code-connect";
import { Dialog } from "./Dialog";

figma.connect(
  Dialog,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=54-2",
  {
    example: () => (
      <Dialog
        open
        title="Supprimer ce jeu ?"
        description="« Hollow Knight » sera définitivement supprimé de votre collection. Cette action est irréversible."
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    ),
  },
);
