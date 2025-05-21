import { Container, Typography, Grid, Box, Button } from "@mui/material";

function VideoInicio() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Video a la izquierda */}
        <Grid item xs={12} md={8}>
          <Box
            component="video"
            src="/images/video_01.mp4"
            autoPlay
            muted
            playsInline
            controls
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0px 8px 35px rgb(0, 0, 0)",
              overflow: "hidden",
            }}
          />
        </Grid>

        {/* Texto a la derecha */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Reserva nuestros salones
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Tenemos a su disposicion 6 salones para diferentes tipos de eventos,
            empresarial, familiar, recreativo, dotados de ayudas audiovisuales,
            música, wifi (internet), baños...
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
      </Grid>
    </Container>
  );
}

export default VideoInicio;
