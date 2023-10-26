import { Pagination } from "@mui/material";
import React from "react";

const CustomPagination = () => {
  return (
    <div>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
};

export default CustomPagination;
