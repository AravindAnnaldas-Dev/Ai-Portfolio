import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/theme";

const footerLinks = ["GitHub", "LinkedIn", "Twitter", "Source"];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.surfaceContainerLowest,
        borderTop: `1px solid ${colors.outlineVariant}1a`,
        py: 6,
        px: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: colors.onSurface,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Rishikar Babu
        </Typography>

        <Typography
          sx={{
            color: `${colors.onSurface}66`,
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          © 2025 Katikala Rishikar Babu. Built for the Monolith.
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {footerLinks.map((link) => (
            <Box
              key={link}
              component="a"
              href="#"
              sx={{
                color: `${colors.onSurface}66`,
                textDecoration: "none",
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: 0.8,
                transition: "color 0.2s, opacity 0.2s",
                "&:hover": { color: colors.secondary, opacity: 1 },
              }}
            >
              {link}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
