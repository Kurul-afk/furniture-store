import React from "react";
import "./style.css";

const CarouselCard = ({ product }: any) => {
  return (
    <li className="carousel__card">
      <img className="carousel__card__img" src={product.url_img} alt="logo" />
      <div className="carousel__card__text">
        <p className="carousel__card__title">{product.title}</p>
      </div>
    </li>
  );
};

export default CarouselCard;
