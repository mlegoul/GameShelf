import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.Button),
  },
  argTypes: {
    kind: { control: "inline-radio", options: ["primary", "ghost"] },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Ajouter un jeu",
    kind: "primary",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Ghost: Story = { args: { kind: "ghost" } };

export const Disabled: Story = { args: { disabled: true } };

export const AllKinds: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Button kind="primary">Ajouter un jeu</Button>
      <Button kind="ghost">Annuler</Button>
    </div>
  ),
};
