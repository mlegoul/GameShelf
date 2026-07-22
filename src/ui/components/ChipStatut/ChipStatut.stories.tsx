import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipStatut, STATUT_LABELS } from "./ChipStatut";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/Chip Statut",
  component: ChipStatut,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.ChipStatut),
  },
  argTypes: {
    statut: {
      control: "inline-radio",
      options: Object.keys(STATUT_LABELS),
    },
  },
  args: { statut: "a-jouer" },
} satisfies Meta<typeof ChipStatut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AJouer: Story = { args: { statut: "a-jouer" } };
export const EnCours: Story = { args: { statut: "en-cours" } };
export const Termine: Story = { args: { statut: "termine" } };
export const Abandonne: Story = { args: { statut: "abandonne" } };

export const TousLesStatuts: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <ChipStatut statut="a-jouer" />
      <ChipStatut statut="en-cours" />
      <ChipStatut statut="termine" />
      <ChipStatut statut="abandonne" />
    </div>
  ),
};
