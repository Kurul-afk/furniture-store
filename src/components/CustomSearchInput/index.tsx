import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

const CustomSearchInput = () => {
  return (
    <>
      <TextField
        className="custom-search-input"
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
    </>
  );
};

export default CustomSearchInput;
