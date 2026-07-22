import type { Meta, StoryObj } from "@storybook/react-vite";
import { GameCard } from "./GameCard";
import { FIGMA_NODES, figmaDesign } from "../../storybook/figmaDesign";

const meta = {
  title: "Design System/GameCard",
  component: GameCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    ...figmaDesign(FIGMA_NODES.GameCard),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Hollow Knight",
    platform: "Switch",
    year: 2017,
    rating: 4.5,
    statut: "en-cours",
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SansNote: Story = { args: { rating: undefined } };

export const Grille: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  decorators: [(Story) => <Story />],
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 290px)",
        gap: 24,
      }}
    >
      <GameCard
        title="Hollow Knight"
        platform="Switch"
        year={2017}
        rating={4.5}
        statut="en-cours"
      />
      <GameCard
        title="Elden Ring"
        platform="PS5"
        year={2022}
        rating={5}
        statut="termine"
      />
      <GameCard
        title="Zelda : TotK"
        platform="Switch"
        year={2023}
        rating={4.5}
        statut="termine"
      />
      <GameCard
        title="Stardew Valley"
        platform="Switch"
        year={2016}
        rating={4.5}
        statut="a-jouer"
      />
    </div>
  ),
};
