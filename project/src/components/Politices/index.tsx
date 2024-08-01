import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import PolicyCard from "./Card";
import { formatDate } from "../../utils/formatData";
import PolicyProps from "../../interfaces/politices";
import { politices } from "../../service/politices";

const Panel: React.FC = () => {
  const [policies, setPolicies] = useState<PolicyProps[]>([]);

  const fetchPolicies = async () => {
    try {
      const res = await politices.all();
      setPolicies(res);
    } catch (error) {
      console.error("Erro ao carregar as políticas.", error);
    }
  };

  useEffect(() => {
    fetchPolicies();
  }, []);

  return (
    <div id="policies">
      <Typography variant="h5" gutterBottom>
        Ultimas Políticas
      </Typography>
      <Grid container spacing={2}>
        {policies.map((policy) => (
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
