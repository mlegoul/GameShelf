import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { theme } from "./ui/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Hello World
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bienvenue sur GameShelf
          </Typography>
          <Button variant="contained" color="primary">
            Entrer
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
