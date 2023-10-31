import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DeleteConfirmationModal from "../WarningToDelete";

const CustomCard = ({ product }: any) => {
  return (
    <>
      <li className="card">
        <Link className="card__link" to={`/product-page/${product.id}`}>
          <img className="card__img" src={product.url_img} alt="img" />
          <div className="card__text">
            <h3 className="card__title">{product.title}</h3>
            <p className="card__desc">{product.desc}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CustomCard;
