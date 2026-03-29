import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { colors, gradients } from "@/lib/theme";

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        px: { xs: 3, md: 4 },
        backgroundColor: colors.surfaceContainerLow,
      }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 8,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                color: colors.onSurface,
              }}
            >
              The Core Logic
            </Typography>
            <Box
              sx={{
                height: 4,
                width: 96,
                background: gradients.monolith,
              }}
            />
          </Box>

          {/* Right */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                lineHeight: 1.4,
                color: colors.onSurface,
                fontStyle: "italic",
              }}
            >
              &ldquo;Dynamic Software Developer with a proven track record at
              Enspirit Technologies, specializing in PostgreSQL and API
              integration.&rdquo;
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: colors.onSurfaceVariant,
                lineHeight: 1.75,
              }}
            >
              Adept at writing clean, maintainable code and conducting thorough
              testing. Passionate about delivering high-quality solutions and
              collaborating effectively with teams to enhance software
              functionality and reliability. Experienced in building AI-powered
              systems using LangChain, OpenAI, and RAG techniques.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
