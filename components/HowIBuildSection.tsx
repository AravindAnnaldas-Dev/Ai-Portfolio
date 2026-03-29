import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/theme";

const pillars = [
  {
    number: "01",
    title: "Performance First",
    body: "Minimizing overhead through optimized query patterns, efficient data serialization, and strategic caching at every layer.",
  },
  {
    number: "02",
    title: "Scalability by Design",
    body: "Implementing stateless services, load balancing, and containerization to ensure systems grow with user demand without breaking.",
  },
  {
    number: "03",
    title: "Intelligent Automation",
    body: "Leveraging LLMs and specialized AI models to automate complex decision-making processes within the backend flow.",
  },
];

export default function HowIBuildSection() {
  return (
    <Box
      component="section"
      sx={{ py: 16, px: { xs: 3, md: 4 } }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Header */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.04em",
                mb: 2,
              }}
            >
              How I Build Systems
            </Typography>
            <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "1.1rem", lineHeight: 1.7 }}>
              Architecture is about making decisions today that won&apos;t haunt you
              tomorrow. I focus on three core pillars.
            </Typography>
          </Box>

          {/* Pillars */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 0,
            }}
          >
            {pillars.map((pillar) => (
              <Box
                key={pillar.number}
                sx={{
                  backgroundColor: colors.surfaceContainerLow,
                  p: 5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  transition: "background-color 0.2s",
                  "&:hover": { backgroundColor: colors.surfaceContainer },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: colors.primary,
                    opacity: 0.1,
                    lineHeight: 1,
                  }}
                >
                  {pillar.number}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: colors.onSurface, fontSize: "1.35rem" }}
                >
                  {pillar.title}
                </Typography>
                <Typography sx={{ color: colors.onSurfaceVariant, lineHeight: 1.7 }}>
                  {pillar.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
