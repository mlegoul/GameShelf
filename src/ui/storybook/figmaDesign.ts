export const FIGMA_FILE_URL =
  "https://www.figma.com/design/xBoFXhl21zM77kXiu44sOm/GameShelf";

export const FIGMA_NODES = {
  Button: "43-1006",
  ChipStatut: "43-1015",
  ChipPlateforme: "43-1016",
  TextField: "43-1032",
  GameCard: "43-1033",
  AppBar: "43-1042",
  Dialog: "54-2",
  Snackbar: "54-16",
} as const;

export type FigmaComponent = keyof typeof FIGMA_NODES;

export const figmaDesign = (nodeId: string) =>
  ({
    design: {
      type: "figma" as const,
      url: `${FIGMA_FILE_URL}?node-id=${nodeId}&m=dev`,
    },
  }) as const;

export const figmaNodeUrl = (nodeId: string) =>
  `${FIGMA_FILE_URL}?node-id=${nodeId}`;
