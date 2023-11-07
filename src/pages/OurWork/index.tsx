// OurWork.js

import React, { useEffect, useState } from "react";
import "./style.css";
import CustomCard from "../../components/CustomCard";
import CustomPagination from "../../components/CustomPagination";
import { useProductContext } from "../../context/productContext";
import { useSearchParams } from "react-router-dom";
import CustomSearchInput from "../../components/CustomSearchInput";

const OurWork = () => {
  const { products, getProducts } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    getProducts(searchParams.get("_page") || 1);
  }, [searchParams]);

  return (
    <div className="ourWork">
      <div className="ourWork__container">
        <CustomSearchInput setProductList={setProductList} />
        <ul className="ourWork__list">
          {productList.map((item: any) => (
            <CustomCard product={item} key={item.key} />
          ))}
        </ul>
        <CustomPagination />
      </div>
    </div>
  );
};

export default OurWork;
