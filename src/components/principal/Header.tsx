import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// Definir el tema oscuro solo para este componente
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9da631",
    },
    background: {
      default: "#1a1a1a",
      paper: "#242424",
    },
    text: {
      primary: "#000000",
    },
  },
});

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon /> },
    { text: "Organización", icon: <BusinessIcon /> },
    { text: "Reserve", icon: <EventAvailableIcon /> },
    { text: "Contacto", icon: <ContactMailIcon /> },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.68)", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Título */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, mr: 4, color: "#ffffff" }}
          >
            <strong>Club de Emcali</strong>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Botones en pantallas grandes */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              color: "#ffffff",
            }}
          >
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit">
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Icono de menú en móviles */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>
        </Toolbar>

        {/* Drawer para móviles */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={toggleDrawer(false)}>
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: "#ffffff" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
