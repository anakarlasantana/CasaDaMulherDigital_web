import React, { useEffect, useState } from "react";
import { Typography, useTheme, Box, IconButton } from "@mui/material";
import ListUnit from "./List";
import { UnitProps } from "../../interfaces/units";
import SwipeableViews from "react-swipeable-views";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { units } from "../../service/units";

const Units: React.FC = () => {
  const [unitsInfo, setUnitsInfo] = useState<UnitProps[]>([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const itemsPerSlide = 2;
  const maxSteps = Math.ceil(unitsInfo.length / itemsPerSlide);

  const fetchUnits = async () => {
    try {
      const res = await units.all();
      setUnitsInfo(res);
    } catch (error) {
      console.error("Erro ao carregar as unidades.", error);
    }
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  useEffect(() => {
    fetchUnits();
  }, []);

  return (
    <div id="units">
      <Typography variant="h5" gutterBottom>
        Unidades
      </Typography>
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {Array.from({ length: maxSteps }).map((_, stepIndex) => (
            <Box
              key={stepIndex}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                padding: 2,
              }}
            >
              {unitsInfo
                .slice(
                  stepIndex * itemsPerSlide,
                  (stepIndex + 1) * itemsPerSlide
                )
                .map((unit) => (
                  <Box
                    key={unit.id}
                    sx={{
                      flex: `1 0 ${100 / itemsPerSlide}%`,
                      pl: 4,
                      pt: 5,
                    }}
                  >
                    <ListUnit
                      name={unit.name}
                      address={unit.address}
                      email={unit.email}
                      phone={unit.phone}
                    />
                  </Box>
                ))}
            </Box>
          ))}
        </SwipeableViews>

        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ArrowBack />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </div>
  );
};

export default Units;
