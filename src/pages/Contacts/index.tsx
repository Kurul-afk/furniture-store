import React from "react";
import "./style.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <section className="contacts__preview">
        <div className="contacts__preview-container">
          <h1 className="contacts__preview-title">Контакты</h1>
          <p className="contacts__preview-desc">
            Мы всегда готовы помочь вам с выбором мебели или ответить на ваши
            вопросы. Ниже вы найдете наши контактные данные
          </p>
        </div>
      </section>
      <section className="contacts__info">
        <ul className="contacts__list">
          <li className="contacts__item">
            <h2 className="contacts__item-title">Адрес</h2>
            <p className="contacts__item-desc">
              Улица Примерная, 123
              <br /> Город Бишкек
              <br /> Кыргызстан
            </p>
          </li>
          <li className="contacts__item">
            <h2 className="contacts__item-title">Телефон</h2>
            <p className="contacts__item-desc">+996 555 123 456</p>
          </li>
          <li className="contacts__item">
            <h2 className="contacts__item-title">Электронная почта</h2>
            <p className="contacts__item-desc">example@gmail.com</p>
          </li>
          <li className="contacts__item">
            <h2 className="contacts__item-title">График работы</h2>
            <p className="contacts__item-desc">
              Понедельник - Пятница: 9:00 - 18:00
              <br />
              Суббота: 10:00 - 15:00
              <br />
              Воскресенье: Выходной
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contacts;
