import React, { useEffect, useState } from "react";
import "./style.css";
import { TextField } from "@mui/material";
import { useProductContext } from "../../context/productContext";

const CustomSearchInput = ({ setProductList }: any) => {
  const [search, setSearch] = useState<string>("");
  const { products } = useProductContext();

  const filterProducts = (search: string, products: any) => {
    if (!search) {
      return products;
    }
    return products.filter(({ title }: any) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredProducts = filterProducts(search, products);
      setProductList(filteredProducts);
    }, 300);
    return () => clearTimeout(debounce);
  }, [search, products]);

  return (
    <>
      <TextField
        className="custom-search-input"
        id="search-product"
        label="Поиск"
        variant="filled"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default CustomSearchInput;
