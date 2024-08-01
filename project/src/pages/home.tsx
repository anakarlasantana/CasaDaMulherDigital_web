import { Grid } from "@mui/material";
import Header from "../components/Header";
import Panel from "../components/Politices";
import Units from "../components/Units";
import Services from "../components/Services";
import Contact from "../components/Form";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Panel />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Services />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Units />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Contact />
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
};

export default Home;
