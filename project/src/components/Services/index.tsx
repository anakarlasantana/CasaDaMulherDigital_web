import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "./Table";
import ServicesProps from "../../interfaces/services";
import { services } from "../../service/services";

const Services = () => {
  const [servicesInfo, setServicesInfo] = useState<ServicesProps[]>([]);

  const fetchServices = async () => {
    try {
      const res = await services.all();
      setServicesInfo(res);
    } catch (error) {
      console.error("Erro ao carregar as políticas.", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div id="services">
      <Typography variant="h5" gutterBottom>
        Serviços
      </Typography>
      <Grid container spacing={2}>
        {servicesInfo.map((service) => (
          <Grid item xs={12} sm={12} md={6} key={service.id}>
            <Table
              id={service.id}
              name={service.name}
              description={service.description}
              units={service.units}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
