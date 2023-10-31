import React, { useEffect } from "react";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import "./style.css";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { getProductById, product } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(parseInt(id));
    }
  }, [id]);

  return (
    <div className="detail">
      {product ? (
        <div className="detail__container">
          <img className="detail__img" src={product.url_img} alt="img" />
          <div className="detail__text">
            <h1 className="detail__title">{product.title}</h1>
            <p className="detail__cost">Цена: ${product.price}</p>
            <p className="detail__desc">{product.desc}</p>
            <button
              className="detail__btn"
              onClick={() =>
                toast.success("Спасибо за покупку товара", {
                  position: "top-center",
                })
              }
            >
              Купить
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
