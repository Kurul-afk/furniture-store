import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination";
import CustomCard from "../../components/CustomCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import DeleteConfirmationModal from "../../components/WarningToDelete";
import CustomSearchInput from "../../components/CustomSearchInput";
import "./style.css";

const AdminProductList = () => {
  const { products, getProducts, isProductDeleted } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState(products);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts(searchParams.get("_page") || 1);
  }, [searchParams, isProductDeleted]);

  return (
    <div className="adminProductList">
      <div className="adminProductList__container">
        <CustomSearchInput setProductList={setProductList} />
        <ul className="adminProductList__list">
          {productList.map((item: any) => (
            <div className="admin__CustomCard">
              <CustomCard product={item} key={item.key} />
              <div className="settings__btns">
                <button
                  className="settings__btn edit"
                  onClick={() => navigate(`/edit-product/${item.id}`)}
                >
                  Изменить
                </button>
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
