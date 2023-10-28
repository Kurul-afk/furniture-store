import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";

const CustomPagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pages } = useProductContext();

  useEffect(() => {
    const current = parseInt(searchParams.get("_page") || "1");
    setCurrentPage(current);
  }, [searchParams, currentPage]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: any) => {
    searchParams.set("_page", page);
    setSearchParams(searchParams);
  };
  return (
    <>
      <Pagination
        count={pages}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePage}
      />
    </>
  );
};

export default CustomPagination;
