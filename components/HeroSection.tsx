import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors, gradients, glassPanelSx } from "@/lib/theme";

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        minHeight: "921px",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, md: 4 },
        overflow: "hidden",
      }}
    >
      {/* Mist overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% -20%, rgba(210, 187, 255, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: "0 !important" }}>
        <Box sx={{ maxWidth: "66%", "@media (max-width:900px)": { maxWidth: "100%" } }}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 0.5,
              ...glassPanelSx,
              borderRadius: "999px",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: colors.secondary,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: colors.secondary,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
              }}
            >
              Available for high-stakes systems
            </Typography>
          </Box>

          {/* Name */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: colors.onSurfaceVariant,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              mb: 1,
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            }}
          >
            KATIKALA RISHIKAR BABU
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3.5rem", md: "5rem", lg: "6rem" },
              fontWeight: 800,
              lineHeight: 0.9,
              color: colors.onSurface,
              mb: 4,
              letterSpacing: "-0.04em",
            }}
          >
            Backend &amp; AI
            <br />
            Systems Developer
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: colors.onSurfaceVariant,
              lineHeight: 1.7,
              maxWidth: 560,
              mb: 4,
            }}
          >
            Software Developer specializing in PostgreSQL, API integration, and
            AI-powered backend systems. Building scalable, high-performance
            solutions with Node.js and LangChain.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              href="#projects"
              component="a"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: gradients.monolith,
                color: colors.onPrimaryFixed,
                px: 4,
                py: 1.75,
                fontWeight: 700,
                fontSize: "0.9rem",
                "&:hover": { opacity: 0.9 },
              }}
            >
              View Case Studies
            </Button>
            <Button
              href="#contact"
              component="a"
              sx={{
                ...glassPanelSx,
                color: colors.primary,
                px: 4,
                py: 1.75,
                fontWeight: 700,
                fontSize: "0.9rem",
                "&:hover": { backgroundColor: colors.surfaceContainerHigh },
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "-25%",
          width: 800,
          height: 800,
          background: "rgba(99, 102, 241, 0.05)",
          borderRadius: "50%",
          filter: "blur(120px)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
