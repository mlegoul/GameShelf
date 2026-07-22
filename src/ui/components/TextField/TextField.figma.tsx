import figma from "@figma/code-connect";
import { TextField } from "./TextField";

figma.connect(
  TextField,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=43-1032",
  {
    props: {
      error: figma.enum("State", {
        Error: "Le titre est requis",
      }),
    },
    example: ({ error }) => <TextField label="Titre" error={error} />,
  },
);
