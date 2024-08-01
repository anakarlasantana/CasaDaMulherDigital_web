import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ServicesProps from "../../interfaces/services";


const Table: React.FC<ServicesProps> = ({ name, description, units }) => {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontWeight: 600 }}
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>{description}</AccordionDetails>
        <Divider />
        <AccordionDetails>
          <Typography fontSize={14}>Onde encontrar:</Typography>
          <div>
            {units.map((unit) => (
              <Typography key={unit.name} color={"primary"}>
                {unit.name}
              </Typography>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Table;
