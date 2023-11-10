import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <section className="about__preview">
        <div className="about__preview-container">
          <h1 className="about__preview-title">О нас</h1>
          <p className="about__preview-desc">
            Добро пожаловать в мир комфорта и стиля - это мир, в котором каждая
            деталь имеет значение. Мы - команда мастеров и профессионалов,
            увлеченных искусством создания мебели, которая не только обогатит
            ваш дом, но и удовлетворит ваши самые изысканные вкусы. Добро
            пожаловать в магазин мебели "Comfort"!
          </p>
        </div>
      </section>
      <section className="about__value">
        <div className="about__value-container">
          <h2 className="about__value-title">Наши ценности</h2>
          <p className="about__value-desc">
            В "Comfort" мы верим, что мебель - это не просто предметы интерьера,
            но и воплощение вашего стиля, комфорта и индивидуальности. Мы
            стремимся к тому, чтобы каждая деталь, каждая текстура, и каждый
            элемент нашей мебели соответствовали вашим ожиданиям и воплощали
            ваши мечты в реальность.
          </p>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default About;
