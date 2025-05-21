import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../../components/principal/Header";
import Hero from "../../components/principal/Hero";
import NatureCards from "../../components/principal/NatureCards";
import Features from "../../components/principal/Features";
import VacationSection from "../../components/principal/VacatioSection";
import Atracciones from "../../components/principal/Atracciones";
import VideoIncio from "../../components/principal/VideoInicio";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9da631",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBottom: "2rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <Hero />
        <Atracciones />
        <VideoIncio />
        <NatureCards />
        <Features />
        <VacationSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
