import { Container, Typography, Grid, Button, Box } from "@mui/material";

function VacationSection() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1464278533981-50106e6176b1"
                alt="Mountain landscape"
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1511497584788-876760111969"
                alt="Forest path"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
                alt="Waterfall"
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h2">
            ¡Descubre lo que hace perfectas tus vacaciones!
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Ya sea que estés planeando unas vacaciones familiares con tu
            mascota, un relajante fin de semana o una excursión aventurera,
            nuestras propiedades son ideales para todo tipo de viajes.
            Encontrarás desde encantadoras cabañas en la montaña hasta
            alojamientos junto al lago con vistas impresionantes.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Reservar Ahora
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VacationSection;
