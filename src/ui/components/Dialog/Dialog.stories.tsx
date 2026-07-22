import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "./Dialog";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.Dialog),
  },
  args: {
    open: true,
    title: "Supprimer ce jeu ?",
    description:
      "« Hollow Knight » sera définitivement supprimé de votre collection. Cette action est irréversible.",
    cancelLabel: "Annuler",
    confirmLabel: "Supprimer",
    destructive: true,
    onCancel: () => {},
    onConfirm: () => {},
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Suppression: Story = {};

export const NonDestructif: Story = {
  args: {
    title: "Quitter sans enregistrer ?",
    description: "Les modifications apportées à cette fiche seront perdues.",
    confirmLabel: "Quitter",
    destructive: false,
  },
};
