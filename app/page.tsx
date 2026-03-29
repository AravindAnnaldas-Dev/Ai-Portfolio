import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Hero */}
      <Box textAlign="center" mb={6}>
        <Chip label="Next.js App Router + MUI v5" color="primary" sx={{ mb: 3 }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Material UI with Next.js
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          SSR-ready theming with Emotion cache, custom palette, and App Router
          support.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" size="large">
            Get Started
          </Button>
          <Button variant="outlined" size="large">
            Learn More
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Feature Cards */}
      <Typography variant="h4" gutterBottom>
        Features
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "repeat(3, 1fr)" }}
        gap={3}
        mt={3}
      >
        {features.map((feature) => (
          <Card key={feature.title} variant="outlined">
            <CardContent>
              <Typography variant="h3" mb={1}>
                {feature.icon}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Color Palette Preview */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Theme Palette
        </Typography>
        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

const features = [
  {
    icon: "⚡",
    title: "App Router",
    description:
      "Built on Next.js 15 App Router with React Server Components for optimal performance.",
  },
  {
    icon: "🎨",
    title: "Custom Theme",
    description:
      "Fully customizable MUI theme with your brand colors, typography, and component overrides.",
  },
  {
    icon: "🖥️",
    title: "SSR Ready",
    description:
      "Emotion cache flushes styles server-side, eliminating flash of unstyled content.",
  },
];
