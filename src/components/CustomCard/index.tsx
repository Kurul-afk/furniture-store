import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CustomCard = () => {
  return (
    <li className="card">
      <Link className="card__link" to={"/"}>
        <img
          className="card__img"
          src="https://www.scandesigns.com/wp-content/uploads/2020/04/Space-5100S-Trend-Graphite-Angle-300x300.jpg"
          alt="img"
        />
        <div className="card__text">
          <h3 className="card__title">Lorem</h3>
          <p className="card__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            delectus sequi corrupti tenetur numquam aliquid.
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CustomCard;
