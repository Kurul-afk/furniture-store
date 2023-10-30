import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination";
import CustomCard from "../../components/CustomCard";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import "./style.css";
import DeleteConfirmationModal from "../../components/WarningToDelete";

const AdminProductList = () => {
  const { products, getProducts, isProductDeleted } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts(searchParams.get("_page") || 1);
  }, [searchParams, isProductDeleted]);

  return (
    <div className="adminProductList">
      <div className="adminProductList__container">
        <ul className="adminProductList__list">
          {products.map((item: any) => (
            <div className="admin__CustomCard">
              <CustomCard product={item} key={item.key} />
              <div className="settings__btns">
                <button className="settings__btn edit">Изменить</button>
                <DeleteConfirmationModal id={item.id} />
              </div>
            </div>
          ))}
        </ul>
        <CustomPagination />
      </div>
    </div>
  );
};

export default AdminProductList;
