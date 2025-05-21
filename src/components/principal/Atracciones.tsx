import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Carrusel from "./Carrusel";

function Atracciones() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              marginBottom: "80px",
              textAlign: "center",
            }}
          >
            Visita nuestras atracciones
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Contamos con ambientes para diferentes actividades recreativas,
            familiares, empresariales y de esparcimiento. Piscinas, salones para
            eventos, servicio de restaurante...
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" size="large">
              Reserve
            </Button>
          </Box>
        </Grid>

        {/* Aquí se reemplaza la imagen por el carrusel */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              height: 500,
              boxShadow: "0px 8px 35px rgb(0, 0, 0)",
              overflow: "hidden", // Evita que la sombra afecte el contenido
            }}
          >
            <Carrusel />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Atracciones;
