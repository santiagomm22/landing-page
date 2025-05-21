import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
    title: "Alpine Peaks",
    description: "Discover majestic mountain landscapes",
  },
  {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    title: "Mystic Forest",
    description: "Explore serene woodland paths",
  },
  {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    title: "Wildlife Safari",
    description: "Encounter amazing wildlife up close",
  },
  {
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
    title: "Mountain Vista",
    description: "Experience breathtaking views",
  },
];

function NatureCards() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        The Wonders Of Nature
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        paragraph
      >
        We take you to places for beautiful views of the world
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NatureCards;
