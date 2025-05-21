import { Container, Typography, Grid, Box } from "@mui/material";
import { MapPin, Headphones, Users } from "lucide-react";

const features = [
  {
    icon: <MapPin size={40} />,
    title: "Trail And Trusted",
    description: "With 10+ years of experience in adventure tourism",
  },
  {
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    description: "We're here to help you plan your perfect adventure",
  },
  {
    icon: <Users size={40} />,
    title: "One-stop Travel Partner",
    description: "Your trusted companion for all travel needs",
  },
];

function Features() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Reason For Choosing Us
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
