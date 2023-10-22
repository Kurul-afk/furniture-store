import React from "react";
import './style.css'
import { Link } from "react-router-dom";
const Main = () => {
  return (
  <div className="main">
    <section className="main__preview">
      <div className="main__preview-container">
        <h1 className="main__preview-title">Добро пожаловать в магазин мебели Comfort!<br/> Создайте комфорт и стиль в вашем доме с нашей коллекцией.</h1>
        <Link to={"https://t.me"} className="main__preview-btn">Контакты</Link>
      </div>
    </section>
    <section className="main__about">
      <div className="main__about-container"></div>
    </section>
    <section className="main__values">
      <div className="main__values-container"></div>
    </section>
    <section className="main__works">
      <div className="main__works-container"></div>
    </section>
    <section className="main__how">
      <div className="main__how-container"></div>
    </section>
    <section className="main__collabe">
      <div className="main__collabe-container"></div>
    </section>
    <section className="main__faq">
      <div className="main__faq-container"></div>
    </section>
  </div>
  );
};

export default Main;
