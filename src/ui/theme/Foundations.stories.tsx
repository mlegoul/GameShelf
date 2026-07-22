import type { Meta, StoryObj } from "@storybook/react-vite";
import Box from "@mui/material/Box";
import { color, radius, elevation, typography } from ".";
import { FIGMA_FILE_URL } from "../storybook/figmaDesign";

const meta = {
  title: "Design System/Fondations",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    design: {
      type: "figma",
      url: `${FIGMA_FILE_URL}?node-id=43-997&m=dev`,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: 5 }}>
    <Box
      sx={{
        ...typography.label,
        color: color.text.secondary,
        pb: 1,
        mb: 3,
        borderBottom: `1px solid ${color.border.default}`,
      }}
    >
      {title}
    </Box>
    {children}
  </Box>
);

const Swatch = ({ name, hex }: { name: string; hex: string }) => (
  <Box
    sx={{
      border: `1px solid ${color.border.default}`,
      backgroundColor: color.bg.paper,
    }}
  >
    <Box sx={{ height: 72, backgroundColor: hex }} />
    <Box sx={{ p: "12px", borderTop: `1px solid ${color.border.default}` }}>
      <Box sx={{ fontSize: 13, fontWeight: 600, color: color.text.primary }}>
        {name}
      </Box>
      <Box sx={{ ...typography.meta, color: color.text.secondary, mt: "4px" }}>
        {hex}
      </Box>
    </Box>
  </Box>
);

export const Couleurs: Story = {
  render: () => (
    <Section title="Couleurs — collection gs2">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "16px",
        }}
      >
        {Object.entries(color).flatMap(([group, values]) =>
          Object.entries(values).map(([name, hex]) => (
            <Swatch
              key={`${group}.${name}`}
              name={`${group}/${name}`}
              hex={hex}
            />
          )),
        )}
      </Box>
    </Section>
  ),
};

export const RayonEtElevations: Story = {
  render: () => (
    <Section title="Rayon et élévations">
      <Box sx={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <Box
          sx={{
            width: 200,
            height: 96,
            display: "grid",
            placeItems: "center",
            backgroundColor: color.bg.paper,
            border: `1px solid ${color.border.default}`,
            borderRadius: `${radius.sm}px`,
            ...typography.meta,
            color: color.text.secondary,
          }}
        >
          radius/sm — {radius.sm}px
        </Box>
        {Object.entries(elevation).map(([name, shadow]) => (
          <Box
            key={name}
            sx={{
              width: 200,
              height: 96,
              display: "grid",
              placeItems: "center",
              backgroundColor: color.bg.paper,
              boxShadow: shadow,
              ...typography.meta,
              color: color.text.secondary,
            }}
          >
            elevation/{name}
          </Box>
        ))}
      </Box>
    </Section>
  ),
};

export const Typographie: Story = {
  render: () => (
    <Section title="Typographie — Inter (UI) et JetBrains Mono (métadonnées)">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.entries(typography).map(([name, style]) => (
          <Box key={name}>
            <Box
              sx={{
                ...typography.meta,
                fontSize: 11,
                color: color.text.secondary,
                mb: "6px",
              }}
            >
              {name} — {style.fontSize}px / {style.fontWeight}
            </Box>
            <Box sx={{ ...style, color: color.text.primary }}>
              Hollow Knight · Switch · 2017
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  ),
};
