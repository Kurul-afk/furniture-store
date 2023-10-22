import React from "react";
import "./style.css";

interface CollabeCardI {
  title: string;
  desc: string;
  num: string;
}

const CollabeCard = ({ title, desc, num }: CollabeCardI) => {
  return (
    <li className="main__collabe-item">
      <h3 className="main__collabe-num">{num}</h3>
      <p className="main__collabe-item__title">{title}</p>
      <p className="main__collabe-item__desc">{desc}</p>
    </li>
  );
};

export default CollabeCard;
