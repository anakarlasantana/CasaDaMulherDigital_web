import { Button, Grid, Stack } from "@mui/material";
import logotipo from "../assets/logotipo-governo-do-ceara-2023.svg";
import { Link } from "react-scroll";
import { useWebViewContext } from "../contexts/WebViewsContext";
import SearchInput from "./Filter";

interface SearchInputProps {
  handleSearch: (searchTerm: string) => void;
}

const Header: React.FC<SearchInputProps> = ({ handleSearch }) => {
  const { isMobile } = useWebViewContext();

  return (
    <Grid
      container
      width={"100%"}
      height={"auto"}
      position={"fixed"}
      sx={{
        borderBottom: "1px solid #42a96d",
        top: "0",
        left: "0",
        zIndex: "1000",
        backgroundColor: "#282C33",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "0 16px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        alignItems={isMobile ? "center" : "initial"}
        justifyContent={"space-between"}
        sx={{ width: "100%", mb: isMobile ? 1 : 0, p: 2 }}
      >
        <img
          src={logotipo}
          alt="Logotipo"
          style={{ width: isMobile ? "80px" : "150px", height: "auto" }}
        />
        <SearchInput onSearch={handleSearch} />
        {!isMobile && (
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Link to="policies" smooth={true} duration={300} offset={-120}>
              <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
                Home
              </Button>
            </Link>
            <Link to="services" smooth={true} duration={300} offset={-120}>
              <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
                Serviços
              </Button>
            </Link>
            <Link to="units" smooth={true} duration={300} offset={-100}>
              <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
                Unidades
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={300} offset={-120}>
              <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
                Contato
              </Button>
            </Link>
          </Stack>
        )}
      </Stack>

      {isMobile && (
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ textAlign: "center", mt: 1 }}
        >
          <Link to="policies" smooth={true} duration={300} offset={-120}>
            <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
              Home
            </Button>
          </Link>
          <Link to="services" smooth={true} duration={300} offset={-120}>
            <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
              Serviços
            </Button>
          </Link>
          <Link to="units" smooth={true} duration={300} offset={-100}>
            <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
              Unidades
            </Button>
          </Link>
          <Link to="contact" smooth={true} duration={300} offset={-120}>
            <Button variant="text" sx={{ color: "white", fontSize: "14px" }}>
              Contato
            </Button>
          </Link>
        </Stack>
      )}
    </Grid>
  );
};

export default Header;
