import Carousel from "react-bootstrap/Carousel";

const carouselItems = [
  { src: "/images/clubemcali-incio.jpg", title: "Espacios Verdes" },
  { src: "/images/piscina-trampolin.jpg", title: "Piscina Trampolin" },
  { src: "/images/clubemcali-2.jpg", title: "Áreas de Esparcimiento" },
  { src: "/images/inicio.jpg", title: "Piscina Semiolímpica" },
  { src: "/images/salon-colonial.jpg", title: "Salón Para Eventos" },
  { src: "/images/salon-clubemcali.jpg", title: "Para Todas Las Ocasiones" },
];

export default function Carrusel() {
  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item
          key={index}
          interval={2500}
          style={{ maxHeight: 520, position: "relative" }}
        >
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.title}
            style={{
              width: "100%",
              height: 520,
              objectFit: "cover",
            }}
          />
          <Carousel.Caption
            style={{
              position: "absolute",

              left: "50%",
              transform: "translate( -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro semitransparente
                padding: "10px 20px",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {item.title}
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
