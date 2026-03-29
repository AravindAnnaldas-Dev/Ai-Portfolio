"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "@/lib/theme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = React.useState("#home");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(19, 19, 19, 0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid rgba(70, 69, 84, 0.15)`,
          boxShadow: `0 25px 50px -12px rgba(229, 226, 225, 0.05)`,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",
            width: "100%",
            mx: "auto",
            px: { xs: 3, md: 4 },
            py: 1,
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: colors.onSurface,
              fontSize: "1.2rem",
            }}
          >
            Rishikar Babu
          </Typography>

          {/* Desktop Nav Links */}
          <Box
            component="nav"
            sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.href}
                component="a"
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                sx={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                  color:
                    activeLink === link.href
                      ? colors.primary
                      : `${colors.onSurface}99`,
                  borderBottom:
                    activeLink === link.href
                      ? `2px solid ${colors.primary}`
                      : "2px solid transparent",
                  pb: "2px",
                  transition: "color 0.2s",
                  "&:hover": { color: colors.onSurface },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Resume Button */}
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", md: "flex" },
              background: colors.primary,
              color: colors.onPrimary,
              px: 3,
              py: 1,
              fontWeight: 700,
              "&:hover": { background: colors.primaryContainer, transform: "scale(0.97)" },
              transition: "transform 0.15s",
            }}
          >
            Resume
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: colors.onSurface }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: colors.surfaceContainerLow,
              width: 260,
              borderLeft: `1px solid ${colors.outlineVariant}30`,
            },
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: colors.onSurface }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: "var(--font-manrope), Manrope, sans-serif",
                        fontWeight: 700,
                        color:
                          activeLink === link.href
                            ? colors.primary
                            : colors.onSurface,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 2, pt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ background: colors.primary, color: colors.onPrimary, fontWeight: 700 }}
            >
              Resume
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
