import { Box, Typography, Container, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        backgroundImage: 'url("/images/inicio.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h1" component="h1" color="white" sx={{ mb: 4 }}>
            Bienvenido al Club de Emcali
          </Typography>
          {/* Imagen que solo se muestra en PC */}
          <Box
            component="img"
            src="/images/logo-blanco.png" // Asegúrate de que la imagen esté en la ruta correcta
            alt="Logo Club de Emcali"
            sx={{
              width: 360,
              height: 330,
              display: { xs: "none", md: "block" }, // Oculta en móviles
            }}
          />
        </Box>
        <Typography
          variant="h5"
          color="white"
          sx={{ mb: 4, maxWidth: "600px" }}
        >
          La imagen de una gran empresa
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#ffffff" }}
            size="large"
          >
            Instalaciones
          </Button>
          <Button variant="outlined" size="large" style={{ color: "#ffffff" }}>
            Contactenos
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
