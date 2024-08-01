import React from "react";
import { Grid, Typography } from "@mui/material";
import PolicyCard from "./Card";
import { formatDate } from "../../utils/formatData";
import PolicyProps from "../../interfaces/politices";

interface PanelProps {
  data: PolicyProps[];
}

const Panel: React.FC<PanelProps> = ({ data }) => {
  return (
    <div id="policies">
      <Typography variant="h5" gutterBottom>
        Ultimas Políticas
      </Typography>
      <Grid container spacing={2}>
        {data.map((policy) => (
          <Grid item xs={12} sm={12} md={6} key={policy.id}>
            <PolicyCard
              title={policy.name}
              description={policy.description}
              image={policy.image}
              date={formatDate(policy.data)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Panel;
