import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "./Snackbar";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.Snackbar),
  },
  argTypes: {
    type: { control: "inline-radio", options: ["succes", "erreur", "undo"] },
  },
  args: { type: "succes", message: "Jeu ajouté à la collection" },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Succes: Story = {};

export const Erreur: Story = {
  args: { type: "erreur", message: "Échec de la suppression" },
};

export const Undo: Story = {
  args: { type: "undo", message: "Jeu supprimé", actionLabel: "Annuler" },
};

export const TousLesTypes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      <Snackbar type="succes" message="Jeu ajouté à la collection" />
      <Snackbar type="erreur" message="Échec de la suppression" />
      <Snackbar type="undo" message="Jeu supprimé" actionLabel="Annuler" />
    </div>
  ),
};
