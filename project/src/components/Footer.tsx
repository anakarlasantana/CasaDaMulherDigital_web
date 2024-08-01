import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { useWebViewContext } from "../contexts/WebViewsContext";

const Footer = () => {

  const { isMobile } = useWebViewContext();

  return (
    <Grid
      container
      width={"100%"}
      height={"5rem"}
      position={"fixed"}
      direction={"column"}
      sx={{
        borderTop: "1px solid #42a96d",
        bottom: "0",
        left: "0",
        zIndex: "1000",
        backgroundColor: "#282C33",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        padding: "0 16px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack>
        <Stack direction="row" spacing={1} justifyContent={"center"}>
          <IconButton
            color="primary"
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="primary"
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="primary"
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </IconButton>
        </Stack>
        <Stack>
          <Typography fontSize={isMobile ? "10px" : "14px"} color="white">
            © 2024 Ana Karla Santana. Todos os direitos reservados.
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Footer;
