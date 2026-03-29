import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TerminalIcon from "@mui/icons-material/Terminal";
import { colors, glassPanelSx } from "@/lib/theme";

const skillCategories = [
  {
    icon: <StorageIcon sx={{ fontSize: 40, color: colors.primary }} />,
    title: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Socket.IO", "REST APIs"],
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40, color: colors.primary }} />,
    title: "AI / ML",
    skills: ["LangChain", "OpenAI", "FAISS", "RAG", "NLP", "Python"],
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 40, color: colors.primary }} />,
    title: "Systems",
    skills: ["API Integration", "Caching Strategies", "API Documentation"],
  },
  {
    icon: <TerminalIcon sx={{ fontSize: 40, color: colors.primary }} />,
    title: "Tools",
    skills: ["Git", "HTML & CSS", "Code Review", "Testing & Debugging"],
  },
];

function SkillTag({ label }: { label: string }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        backgroundColor: colors.surfaceContainerLow,
        px: 1.5,
        py: 0.5,
        borderRadius: "2px",
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: colors.secondary,
          flexShrink: 0,
        }}
      />
      <Typography
        variant="caption"
        sx={{
          color: colors.secondary,
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ py: 16, px: { xs: 3, md: 4 } }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Header */}
          <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              variant="caption"
              sx={{ color: colors.secondary, letterSpacing: "0.2em", fontSize: "0.8rem" }}
            >
              Tech Stack
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.04em",
              }}
            >
              The Toolkit
            </Typography>
          </Box>

          {/* Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {skillCategories.map((cat) => (
              <Box
                key={cat.title}
                sx={{
                  ...glassPanelSx,
                  p: 4,
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {cat.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: colors.onSurface,
                    fontSize: "1.1rem",
                  }}
                >
                  {cat.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {cat.skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
