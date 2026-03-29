import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import HubIcon from "@mui/icons-material/Hub";
import MicIcon from "@mui/icons-material/Mic";
import { colors, glassPanelSx, gradients, technicalGridSx } from "@/lib/theme";

function TechTag({ label }: { label: string }) {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 0.5,
        backgroundColor: `${colors.primary}1a`,
        color: colors.primary,
        fontSize: "0.65rem",
        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
        fontWeight: 600,
        letterSpacing: "0.05em",
        borderRadius: "2px",
      }}
    >
      {label}
    </Box>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surfaceContainer,
        p: 2,
        border: `1px solid ${colors.outlineVariant}1a`,
        borderRadius: "2px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-manrope), Manrope, sans-serif",
          fontSize: "1.75rem",
          fontWeight: 700,
          color: colors.primary,
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.6rem",
          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: colors.onSurfaceVariant,
          mt: 0.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 16,
        px: { xs: 3, md: 4 },
        backgroundColor: colors.surfaceContainerLowest,
        ...technicalGridSx,
      }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderBottom: `1px solid ${colors.outlineVariant}33`,
              pb: 4,
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "3rem", md: "4rem" },
                fontWeight: 800,
                letterSpacing: "-0.05em",
                color: colors.onSurface,
                lineHeight: 1,
              }}
            >
              Systemic <br />
              Architectures
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                color: colors.onSurfaceVariant,
                maxWidth: 280,
                textAlign: "right",
                fontSize: "0.85rem",
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              }}
            >
              Optimization Case Studies: A deep dive into engineering
              trade-offs and architectural decisions.
            </Typography>
          </Box>

          {/* ── Project 1: AI PDF Q&A Reader ── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "8fr 4fr" },
              gap: { xs: 6, lg: 8 },
            }}
          >
            {/* Left */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {/* Architecture diagram */}
              <Box
                sx={{
                  ...glassPanelSx,
                  borderRadius: "8px",
                  p: 4,
                  border: `1px solid ${colors.primary}33`,
                  backgroundColor: colors.surfaceContainerLowest,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: colors.primary, letterSpacing: "0.2em", display: "block", mb: 4 }}
                >
                  RAG Pipeline Architecture Visualization
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 3,
                    py: 4,
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", ...glassPanelSx, border: `1px dashed ${colors.outlineVariant}80`, width: 80, height: 80, borderRadius: "8px" }}>
                      <DescriptionIcon sx={{ fontSize: 32, color: colors.onSurfaceVariant }} />
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: "0.6rem", color: colors.onSurfaceVariant }}>PDF Upload</Typography>
                  </Box>
                  <TrendingFlatIcon sx={{ color: colors.primary, display: { xs: "none", sm: "block" } }} />
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: gradients.monolith, width: 96, height: 96, borderRadius: "12px", boxShadow: `0 10px 30px ${colors.primary}33` }}>
                      <AutoAwesomeIcon sx={{ fontSize: 40, color: colors.onPrimaryFixed }} />
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: "0.6rem", color: colors.onSurfaceVariant, textAlign: "center" }}>Text Chunking &amp; Embedding</Typography>
                  </Box>
                  <TrendingFlatIcon sx={{ color: colors.primary, display: { xs: "none", sm: "block" } }} />
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", ...glassPanelSx, border: `1px solid ${colors.secondary}4d`, width: 80, height: 80, borderRadius: "8px" }}>
                      <StorageIcon sx={{ fontSize: 32, color: colors.secondary }} />
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: "0.6rem", color: colors.onSurfaceVariant }}>FAISS Vector Store</Typography>
                  </Box>
                  <SyncAltIcon sx={{ color: colors.primary, display: { xs: "none", sm: "block" } }} />
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", ...glassPanelSx, border: `2px solid ${colors.primary}`, width: 96, height: 96, borderRadius: "50%", animation: "pulse 2s infinite", "@keyframes pulse": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.6 } } }}>
                      <PsychologyIcon sx={{ fontSize: 40, color: colors.primary }} />
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: "0.6rem", color: colors.onSurfaceVariant, textAlign: "center" }}>LLM RAG Retrieval</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Details */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1.5, color: colors.onSurface, fontWeight: 700 }}>
                    <Box sx={{ width: 32, height: 1, backgroundColor: colors.primary }} />
                    Technical Deep Dive
                  </Typography>
                  <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                    {[
                      "Implemented text extraction, chunking, and embedding pipelines converting PDF text into vector representations.",
                      "Utilized the FAISS vector database for similarity-based retrieval ensuring contextually accurate answers.",
                      "Built a scalable backend architecture for high-volume document processing and concurrent user queries.",
                      "Ensured context-aware Q&A with low latency and high precision using RAG techniques.",
                    ].map((item, i) => (
                      <Box key={i} component="li" sx={{ display: "flex", gap: 2 }}>
                        <Typography sx={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: colors.primary, fontWeight: 600, minWidth: 24 }}>0{i + 1}</Typography>
                        <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1.5, color: colors.onSurface, fontWeight: 700 }}>
                    <Box sx={{ width: 32, height: 1, backgroundColor: colors.secondary }} />
                    System Constraints
                  </Typography>
                  <Box sx={{ ...glassPanelSx, p: 3, borderRadius: "4px", borderLeft: `4px solid ${colors.secondary}`, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography variant="caption" sx={{ color: colors.secondary, letterSpacing: "0.1em" }}>Consistency vs Latency</Typography>
                    <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "0.85rem", lineHeight: 1.6 }}>
                      Faced a trade-off between real-time document indexing and search speed. Opted for an
                      asynchronous ingestion pattern prioritizing retrieval throughput over immediate consistency,
                      achieving low-latency semantic search.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right — Meta */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "inline-block", border: `1px solid ${colors.primary}4d`, px: 1, py: 0.5, fontSize: "0.65rem", fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: colors.primary, letterSpacing: "0.15em", textTransform: "uppercase", width: "fit-content" }}>
                  Case Study #01
                </Box>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: 900, color: colors.onSurface }}>
                  AI PDF Q&amp;A Reader
                </Typography>
                <Typography sx={{ color: colors.onSurfaceVariant, lineHeight: 1.7 }}>
                  Intelligent document reader using LangChain, OpenAI, and FAISS — allowing users to upload
                  PDFs and ask natural language questions about their contents.
                </Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <StatCard value="RAG" label="Architecture Pattern" />
                <StatCard value="Low" label="Query Latency" />
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {["LangChain", "OpenAI", "FAISS", "Node.js", "PostgreSQL"].map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </Box>
            </Box>
          </Box>

          {/* ── Project 2: AI Medical Report Analyser ── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "4fr 8fr" },
              gap: { xs: 6, lg: 8 },
              borderTop: `1px solid ${colors.outlineVariant}33`,
              pt: 12,
            }}
          >
            {/* Left — Meta */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4, order: { xs: 2, lg: 1 } }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "inline-block", border: `1px solid ${colors.primary}4d`, px: 1, py: 0.5, fontSize: "0.65rem", fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: colors.primary, letterSpacing: "0.15em", textTransform: "uppercase", width: "fit-content" }}>
                  Case Study #02
                </Box>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: 900, color: colors.onSurface }}>
                  AI Medical Report Analyser
                </Typography>
                <Typography sx={{ color: colors.onSurfaceVariant, lineHeight: 1.7 }}>
                  AI-driven medical data analysis system extracting blood pressure and diabetes metrics,
                  with voice-based Q&A and NLP-driven health insights.
                </Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <StatCard value="NLP" label="Core Technology" />
                <StatCard value="Voice" label="Input / Output" />
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {["LangChain", "NLP", "Speech Recognition", "PostgreSQL", "Express"].map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </Box>
            </Box>

            {/* Right — Architecture + Details */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6, order: { xs: 1, lg: 2 } }}>
              {/* Pipeline diagram */}
              <Box
                sx={{
                  ...glassPanelSx,
                  borderRadius: "8px",
                  p: 4,
                  border: `1px solid ${colors.secondary}33`,
                  backgroundColor: colors.surfaceContainerLowest,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography variant="caption" sx={{ color: colors.secondary, letterSpacing: "0.2em", display: "block", mb: 4 }}>
                  Medical AI Pipeline Diagram
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, position: "relative", zIndex: 1 }}>
                  {[
                    { label: "Input", title: "Medical Report Upload", span: 1, variant: "default" },
                    { label: "Processing", title: "NLP Entity Extraction & PII Scrubbing", span: 2, variant: "highlight" },
                    { label: "AI Layer", title: "Blood Pressure & Diabetes Analysis", span: 2, variant: "highlight" },
                    { label: "Voice I/O", title: "Speech Recognition Q&A", span: 1, variant: "export" },
                  ].map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        gridColumn: `span ${item.span}`,
                        p: 2,
                        border: item.variant === "export"
                          ? `1px solid ${colors.secondary}4d`
                          : item.variant === "highlight"
                          ? `1px solid ${colors.primary}4d`
                          : `1px solid ${colors.outlineVariant}4d`,
                        backgroundColor: item.variant === "highlight" ? `${colors.primary}1a` : colors.surfaceContainer,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="caption" sx={{ color: item.variant === "highlight" ? colors.primary : item.variant === "export" ? colors.secondary : colors.onSurfaceVariant, display: "block", mb: 0.5, fontSize: "0.6rem" }}>{item.label}</Typography>
                      <Typography sx={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: colors.onSurface }}>{item.title}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.08, pointerEvents: "none" }}>
                  <HubIcon sx={{ fontSize: 150, color: colors.onSurface }} />
                </Box>
              </Box>

              {/* Details */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1.5, color: colors.onSurface, fontWeight: 700 }}>
                    <Box sx={{ width: 32, height: 1, backgroundColor: colors.primary }} />
                    Technical Deep Dive
                  </Typography>
                  <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                    {[
                      "Designed AI-driven extraction system for blood pressure and diabetes metrics from medical reports.",
                      "Integrated speech recognition and voice-based Q&A for conversational health data interaction.",
                      "Used NLP and information extraction models to provide personalized health insights.",
                      "Combined voice I/O, AI summarization, and contextual medical interpretation for full accessibility.",
                    ].map((item, i) => (
                      <Box key={i} component="li" sx={{ display: "flex", gap: 2 }}>
                        <Typography sx={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: colors.primary, fontWeight: 600, minWidth: 24 }}>0{i + 1}</Typography>
                        <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1.5, color: colors.onSurface, fontWeight: 700 }}>
                    <Box sx={{ width: 32, height: 1, backgroundColor: colors.secondary }} />
                    System Constraints
                  </Typography>
                  <Box sx={{ ...glassPanelSx, p: 3, borderRadius: "4px", borderLeft: `4px solid ${colors.secondary}`, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography variant="caption" sx={{ color: colors.secondary, letterSpacing: "0.1em" }}>
                      HIPAA Compliance vs Intelligence
                    </Typography>
                    <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "0.85rem", lineHeight: 1.6 }}>
                      Maintaining PII security while using third-party LLMs required a local BERT-based
                      entity scrubbing layer before cloud transmission, prioritizing data sovereignty
                      over system simplicity.
                    </Typography>
                  </Box>
                  <Box sx={{ ...glassPanelSx, p: 2.5, borderRadius: "4px", border: `1px solid ${colors.tertiary}33`, display: "flex", alignItems: "center", gap: 2 }}>
                    <MicIcon sx={{ color: colors.tertiary, flexShrink: 0 }} />
                    <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "0.8rem", lineHeight: 1.5 }}>
                      Voice I/O layer required real-time streaming with &lt;200ms response budget
                      for natural conversation feel.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
