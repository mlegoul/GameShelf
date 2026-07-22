import figma from "@figma/code-connect";
import { AppBar } from "./AppBar";

figma.connect(
  AppBar,
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf?node-id=43-1042",
  {
    example: () => <AppBar />,
  },
);
