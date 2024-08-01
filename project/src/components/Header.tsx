import { Button, Grid, Stack, TextField } from "@mui/material";
import logotipo from "../assets/logotipo-governo-do-ceara-2023.svg";
import { Link } from "react-scroll";
import SearchInput from "./Filter";

interface SearchInputProps {
  handleSearch: (searchTerm: string) => void;
}
const Header: React.FC<SearchInputProps> = ({handleSearch}) => {
  return (
    <Grid
      container
      width={"100%"}
      height={"5rem"}
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
      }}
    >
      <Grid item xs={12}>
        <Stack
          direction={"row"}
          textAlign={"center"}
          justifyContent={"space-between"}
          spacing={2}
        >
          <img
            src={logotipo}
            alt="Logotipo"
            style={{ width: "150px", height: "100%" }}
          />
          <SearchInput onSearch={handleSearch} />
          <Stack direction={"row"} spacing={2}>
            <Link to="policies" smooth={true} duration={300} offset={-120}>
              <Button variant="text" sx={{ color: "white" }}>
                Home
              </Button>
            </Link>
            <Link to="services" smooth={true} duration={300} offset={-120}>
              <Button variant="text" sx={{ color: "white" }}>
                Serviços
              </Button>
            </Link>
            <Link to="units" smooth={true} duration={300} offset={-100}>
              <Button variant="text" sx={{ color: "white" }}>
                Unidades
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={300} offset={-120}>
              <Button variant="text" sx={{ color: "white" }}>
                Contato
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
