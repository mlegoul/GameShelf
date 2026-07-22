import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipPlateforme } from "./ChipPlateforme";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/Chip Plateforme",
  component: ChipPlateforme,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.ChipPlateforme),
  },
  args: { children: "PS5" },
} satisfies Meta<typeof ChipPlateforme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Plateformes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <ChipPlateforme>PC</ChipPlateforme>
      <ChipPlateforme>PS5</ChipPlateforme>
      <ChipPlateforme>SWITCH</ChipPlateforme>
      <ChipPlateforme>XBOX</ChipPlateforme>
    </div>
  ),
};
