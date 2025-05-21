import { Container, Typography, Grid, Box } from "@mui/material";
import { MapPin, Headphones, Users } from "lucide-react";

const features = [
  {
    icon: <MapPin size={40} />,
    title: "Experiencia y Confianza",
    description: "Con más de 10 años de experiencia en turismo de aventura",
  },
  {
    icon: <Headphones size={40} />,
    title: "Soporte 24/7",
    description: "Estamos aquí para ayudarte a planificar tu aventura perfecta",
  },
  {
    icon: <Users size={40} />,
    title: "Tu Compañero de Viaje",
    description: "Tu aliado de confianza para todas tus necesidades de viaje",
  },
];

function Features() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Razones para Elegirnos
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Features;
