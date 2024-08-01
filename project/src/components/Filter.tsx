import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
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
        width: "50%",
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
