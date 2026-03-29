import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import { colors, glassPanelSx, gradients } from "@/lib/theme";

const education = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    institution: "SreeVidyanikethan Engineering College",
    location: "Tirupati",
    year: "2022",
    grade: "GPA: 7.5",
  },
  {
    degree: "Intermediate — MPC",
    institution: "Sri Chaitanya Junior College",
    location: "Kurnool",
    year: "2018",
    grade: "89%",
  },
  {
    degree: "Matriculation",
    institution: "AVR High School",
    location: "Gooty",
    year: "2016",
    grade: "GPA: 9.5",
  },
];

export default function EducationSection() {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: 16,
        px: { xs: 3, md: 4 },
        backgroundColor: colors.surface,
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  fontWeight: 800,
                  color: colors.onSurface,
                  letterSpacing: "-0.04em",
                }}
              >
                Education
              </Typography>
              <Box sx={{ height: 4, width: 96, background: gradients.monolith }} />
            </Box>
            <Typography
              variant="caption"
              sx={{ color: colors.onSurfaceVariant, letterSpacing: "0.2em", fontSize: "0.75rem" }}
            >
              Academic Foundation
            </Typography>
          </Box>

          {/* Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {education.map((edu, index) => (
              <Box
                key={edu.institution}
                sx={{
                  ...glassPanelSx,
                  borderRadius: "8px",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  position: "relative",
                  overflow: "hidden",
                  border: index === 0
                    ? `1px solid ${colors.primary}33`
                    : "1px solid rgba(144, 143, 160, 0.1)",
                }}
              >
                {/* Year badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor:
                      index === 0 ? `${colors.primary}1a` : `${colors.outlineVariant}33`,
                    px: 1.5,
                    py: 0.25,
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: index === 0 ? colors.primary : colors.onSurfaceVariant,
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {edu.year}
                  </Typography>
                </Box>

                {/* Icon */}
                <SchoolIcon
                  sx={{
                    fontSize: 36,
                    color: index === 0 ? colors.primary : colors.onSurfaceVariant,
                  }}
                />

                {/* Content */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: colors.onSurface,
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      pr: 4,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    sx={{ color: colors.onSurfaceVariant, fontSize: "0.9rem" }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: `${colors.onSurfaceVariant}99`, fontSize: "0.75rem" }}
                  >
                    {edu.location}
                  </Typography>
                </Box>

                {/* Grade */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    mt: "auto",
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor:
                        index === 0 ? colors.primary : colors.secondary,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: index === 0 ? colors.primary : colors.secondary,
                    }}
                  >
                    {edu.grade}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
