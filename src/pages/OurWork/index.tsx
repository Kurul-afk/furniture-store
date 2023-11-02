// OurWork.js

import React, { useEffect } from "react";
import "./style.css";
import CustomCard from "../../components/CustomCard";
import CustomPagination from "../../components/CustomPagination";
import { useProductContext } from "../../context/productContext";
import { useSearchParams } from "react-router-dom";
import CustomSearchInput from "../../components/CustomSearchInput";

const OurWork = () => {
  const { products, getProducts } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts(searchParams.get("_page") || 1);
  }, [searchParams]);

  return (
    <div className="ourWork">
      <div className="ourWork__container">
        <CustomSearchInput />
        <ul className="ourWork__list">
          {products.map((item: any) => (
            <CustomCard product={item} key={item.key} />
          ))}
        </ul>
        <CustomPagination />
      </div>
    </div>
  );
};

export default OurWork;
