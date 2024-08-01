// src/containers/MainContainer.js
import { Box, CssBaseline } from "@mui/material";

interface ResponsiveApplication {
  children: React.ReactElement;
}

function MainContainer({ children }: ResponsiveApplication) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", 
        padding: "16px", 
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px", 
          backgroundColor: "white", 
          borderRadius: "8px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainContainer;
