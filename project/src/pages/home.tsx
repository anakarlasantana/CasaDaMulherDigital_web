import { Grid } from "@mui/material";
import Header from "../components/Header";
import Panel from "../components/Politices";
import Units from "../components/Units";
import Services from "../components/Services";
import Contact from "../components/Form";
import Footer from "../components/Footer";
import MenuImag from "../components/MenuImag";
import { useEffect, useState } from "react";
import { politices } from "../service/politices";
import { services } from "../service/services";
import { units } from "../service/units";
import ServicesProps from "../interfaces/services";
import PolicyProps from "../interfaces/politices";
import { UnitProps } from "../interfaces/units";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPolitices, setFilteredPolitices] = useState<PolicyProps[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServicesProps[]>([]);
  const [filteredUnits, setFilteredUnits] = useState<UnitProps[]>([]);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    try {
      const politicesData = await politices.all(term);
      const servicesData = await services.all(term);
      const unitsData = await units.all(term);

      setFilteredPolitices(politicesData);
      setFilteredServices(servicesData);
      setFilteredUnits(unitsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <MenuImag />
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Panel data={filteredPolitices} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Services data={filteredServices} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Units data={filteredUnits} />
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
