import { Grid, Typography } from "@mui/material";
import Table from "./Table";
import ServicesProps from "../../interfaces/services";

interface ServicesDataProps {
  data: ServicesProps[];
}

const Services: React.FC<ServicesDataProps> = ({ data }) => {
  return (
    <div id="services">
      <Typography variant="h5" gutterBottom>
        Serviços
      </Typography>
      <Grid container spacing={2}>
        {data.map((service) => (
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
