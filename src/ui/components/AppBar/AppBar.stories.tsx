import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppBar } from "./AppBar";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    ...figmaDesign(FIGMA_NODES.AppBar),
  },
  args: {
    title: "GameShelf",
    searchPlaceholder: "Rechercher un titre…",
    actionLabel: "Ajouter un jeu",
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AvecRecherche: Story = {
  args: { searchValue: "hollow" },
};
