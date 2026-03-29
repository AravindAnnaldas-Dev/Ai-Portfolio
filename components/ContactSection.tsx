"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { colors, glassPanelSx, gradients } from "@/lib/theme";

export default function ContactSection() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  const inputSx = {
    "& .MuiInput-root": {
      color: colors.onSurface,
      "&:before": { borderBottomColor: colors.outlineVariant },
      "&:hover:before": { borderBottomColor: colors.outline },
      "&:after": { borderBottomColor: colors.primary },
    },
    "& .MuiInputLabel-root": { color: colors.onSurfaceVariant },
    "& .MuiInputLabel-root.Mui-focused": { color: colors.primary },
    backgroundColor: colors.surfaceContainerLowest,
    px: 2,
    pt: 1,
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: 16, px: { xs: 3, md: 4 } }}
    >
      <Container maxWidth="xl" sx={{ px: "0 !important" }}>
        <Box
          sx={{
            ...glassPanelSx,
            borderRadius: "16px",
            p: { xs: 4, md: 6 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 8,
          }}
        >
          {/* Left — Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
              }}
            >
              Let&apos;s build the <br />
              next monolith.
            </Typography>
            <Typography sx={{ color: colors.onSurfaceVariant, fontSize: "1.1rem", lineHeight: 1.75 }}>
              Currently open to backend engineering roles, AI integration
              consulting, and high-performance systems projects.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box
                component="a"
                href="mailto:rishi7890123@gmail.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: colors.primary,
                  textDecoration: "none",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <MailIcon fontSize="small" />
                rishi7890123@gmail.com
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: colors.onSurfaceVariant,
                  fontSize: "1rem",
                }}
              >
                <PhoneIcon fontSize="small" />
                +91 8500731062
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: colors.onSurfaceVariant,
                  fontSize: "1rem",
                }}
              >
                <LocationOnIcon fontSize="small" />
                Hyderabad, India 500082
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <Box
                  key={social}
                  component="a"
                  href="#"
                  sx={{
                    color: `${colors.onSurface}99`,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                    "&:hover": { color: colors.primary },
                  }}
                >
                  {social}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right — Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <TextField
              name="name"
              label="Name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={inputSx}
            />
            <TextField
              name="email"
              label="Email"
              placeholder="john@company.com"
              type="email"
              value={form.email}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={inputSx}
            />
            <TextField
              name="message"
              label="Message"
              placeholder="How can I help you build?"
              value={form.message}
              onChange={handleChange}
              variant="standard"
              fullWidth
              multiline
              rows={4}
              sx={inputSx}
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                background: gradients.monolith,
                color: colors.onPrimaryFixed,
                py: 2,
                fontWeight: 700,
                fontSize: "0.95rem",
                borderRadius: "4px",
                "&:hover": { opacity: 0.9 },
              }}
            >
              Send Connection Request
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
