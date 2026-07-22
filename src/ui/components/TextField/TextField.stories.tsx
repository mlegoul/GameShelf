import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.TextField),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Titre",
    defaultValue: "Hollow Knight",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: { defaultValue: "", placeholder: "Hollow Knight" },
};

export const Focus: Story = {
  args: { autoFocus: true },
};

export const Error: Story = {
  args: { defaultValue: "", error: "Le titre est requis" },
};
