import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useWebViewContext } from "../contexts/WebViewsContext";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const { isMobile } = useWebViewContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Buscar..."
      size="small"
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        sx: {
          backgroundColor: "#ffffff",
          borderRadius: "4px",
        },
      }}
      sx={{
        width: isMobile ? "100%" : "50%",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#cccccc",
          },
          "&:hover fieldset": {
            borderColor: "#42a96d",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#42a96d",
          },
        },
      }}
    />
  );
};

export default SearchInput;
