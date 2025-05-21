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
            Here's makes a vacation perfect for you!
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Whether you're planning a family vacation with your pet, a relaxing
            weekend getaway, or an adventurous excursion, vacation rentals are
            ideal for trips of all types. You can find everything from charming
            mountain cabins and lakeside lodges to breathtaking.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VacationSection;
