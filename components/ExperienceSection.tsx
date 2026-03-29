import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/theme";

const experiences = [
  {
    period: "09/2024 — 12/2025",
    role: "Software Developer",
    company: "Enspirit Technologies Pvt Ltd",
    location: "Hyderabad, India",
    description:
      "Developed REST APIs for mobile applications and integrated third-party APIs into backend systems to expand features and improve user experience. Implemented PostgreSQL database solutions to enhance data management and accessibility.",
    bullets: [
      "Developed REST APIs for mobile applications.",
      "Integrated third-party APIs into backend system to expand features and improve user experience.",
      "Implemented PostgreSQL database solutions to enhance data management.",
      "Conducted code reviews to uphold coding standards and improve overall code quality.",
      "Deployed software updates and bug fixes on production servers in a timely manner.",
      "Maintained source control repositories, such as Git, for versioning purposes.",
    ],
    tags: ["#rest-apis", "#postgresql", "#backend"],
  },
  {
    period: "08/2023 — 09/2024",
    role: "Software Developer",
    company: "Enterpi Software Solutions",
    location: "Hyderabad, India",
    description:
      "Developed RESTful APIs for seamless data communication between front-end and back-end systems. Built AI-powered projects including an intelligent PDF Q&A reader and a medical report analyser.",
    bullets: [
      "Developed RESTful APIs for seamless front-end and back-end data communication.",
      "Integrated user-facing elements with server-side logic in collaboration with front-end developers.",
      "Developed clean, maintainable code adhering to industry best practices.",
      "Executed testing and debugging to swiftly identify and resolve software issues.",
      "Enhanced program performance by analyzing code and applying necessary modifications.",
      "Maintained source control repositories such as Git for versioning purposes.",
    ],
    tags: ["#langchain", "#rag", "#ai-systems"],
  },
];

export default function ExperienceSection() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: 16,
        px: { xs: 3, md: 4 },
        backgroundColor: colors.surfaceContainerLow,
      }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { md: "flex-end" },
              gap: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.04em",
              }}
            >
              Systemic Impact
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: colors.onSurfaceVariant, letterSpacing: "0.2em", fontSize: "0.75rem" }}
            >
              A timeline of optimization
            </Typography>
          </Box>

          {/* Timeline */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {experiences.map((exp) => (
              <Box
                key={exp.company}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "3fr 9fr" },
                  gap: 4,
                  alignItems: "start",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      color: colors.primary,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {exp.period}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.onSurfaceVariant,
                      fontSize: "0.8rem",
                      mt: 0.5,
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    }}
                  >
                    {exp.location}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: colors.onSurface, fontSize: "1.35rem" }}
                  >
                    {exp.role}{" "}
                    <Box component="span" sx={{ color: colors.onSurfaceVariant, fontWeight: 400 }}>
                      @ {exp.company}
                    </Box>
                  </Typography>
                  <Box
                    component="ul"
                    sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {exp.bullets.map((b, i) => (
                      <Box key={i} component="li" sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            backgroundColor: colors.primary,
                            mt: "8px",
                            flexShrink: 0,
                          }}
                        />
                        <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "0.95rem", lineHeight: 1.7 }}>
                          {b}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {exp.tags.map((tag) => (
                      <Typography
                        key={tag}
                        sx={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          backgroundColor: colors.surface,
                          color: colors.secondary,
                          px: 1.5,
                          py: 0.25,
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
