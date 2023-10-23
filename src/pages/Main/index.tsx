import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/base";
import CustomCarousel from "../../components/CustomCarousel";
import CollabeCard from "../../components/MainElements/CollabeCard";
import CustomAccordion from "../../components/CustomAccordion";


// img
import firstValueImg from "../../img/eco.svg";
import secondValueImg from "../../img/Vector 4.svg";
import thirdValueImg from "../../img/Group.svg";
import fourthValueImg from "../../img/fluent_wrench-screwdriver-20-regular.svg";
import howImg1 from "../../img/how1.png";
import howImg2 from "../../img/how2.png";
import howImg3 from "../../img/how3.png";
import howImg4 from "../../img/how4.png";
interface howCardImg {
  how1: string;
  how2: string;
  how3: string;
  how4: string;
}

const howCardImages: howCardImg = {
  how1: howImg1,
  how2: howImg2,
  how3: howImg3,
  how4: howImg4,
};

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <section className="main__preview">
        <div className="main__preview-container">
          <h1 className="main__preview-title">
            Добро пожаловать в магазин мебели Comfort!
            <br /> Создайте комфорт и стиль в вашем доме с нашей коллекцией.
          </h1>
          <Button
            onClick={() => navigate("/contacts")}
            className="main__preview-btn"
          >
            Контакты
          </Button>
        </div>
      </section>
      <section className="main__about">
        <div className="main__about-container">
          <h2 className="main__about-title">о компании</h2>
          <p className="main__about-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            velit eius commodi? Maiores dolore assumenda ea magnam ducimus odio
            vel consequuntur, tempora libero, quisquam magni voluptatem,
            voluptatum ipsam temporibus fuga alias qui!
          </p>
          <div className="main__about-detail">
            <div className="main__about_list">
              <ul className="main__about-item">
                <div>9</div>
                <p>лет работы</p>
              </ul>
              <ul className="main__about-item">
                <div>2876</div>
                <p>выполненных проектов</p>
              </ul>
            </div>
            <button className="main__about-button">Подробнее о нас</button>
          </div>
        </div>
      </section>
      <section className="main__values">
        <div className="main__values-container">
          <h2 className="main__values-title">
            Ценность деревянных изделий из массива
          </h2>
          <ul className="main__values-list">
            <li className="main__values-item">
              <img src={firstValueImg} alt="img" />
              <p>Повышенная звуко и теплоизоляция</p>
            </li>
            <li className="main__values-item">
              <img src={secondValueImg} alt="img" />
              <p>Возможность использования лаков на водной основе</p>
            </li>
            <li className="main__values-item">
              <img src={thirdValueImg} alt="img" />
              <p>Экологичность и натуральность</p>
            </li>
            <li className="main__values-item">
              <img src={fourthValueImg} alt="img" />
              <p>Предварительная сборка простота монтажа</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="main__works">
        <div className="main__works-container">
          <div className="main__works-top">
            <h3 className="main__works-title">Наши работы</h3>
            <button className="main__works-btn">Посмотреть все работы</button>
          </div>
          <CustomCarousel />
        </div>
      </section>
      <section className="main__how">
        <div className="main__how-container">
          <h3 className="main__how-title">как создаются наши изделия</h3>
          <ul className="main__how-cards">
            <li className="main__how-card">
              <img src={howImg1} alt="img" />
              <p>Визуализация</p>
            </li>
            <li className="main__how-card">
              <img src={howImg2} alt="img" />
              <p>Визуализация</p>
            </li>
            <li className="main__how-card">
              <img src={howImg3} alt="img" />
              <p>Визуализация</p>
            </li>
            <li className="main__how-card">
              <img src={howImg4} alt="img" />
              <p>Визуализация</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="main__collabe">
        <div className="main__collabe-container">
          <h3 className="main__collabe-title">Как происходит сотрудничество</h3>
          <ol className="main__collabe-list">
            <CollabeCard
              num="1"
              title="Выбор изделия"
              desc="Вы выбираете понравившееся изделие, либо приходите со своим дизайн-проектом или своими идеями"
            />
            <CollabeCard
              num="2"
              title="Заявка"
              desc="Вы оставляете заявку, прикрепляя ссылки на понравившиеся работы или на Ваш дизайн-проект"
            />
            <CollabeCard
              num="3"
              title="уточнение деталей"
              desc="Наш менеджер обрабатывает заявку, связывается с Вами для уточнения деталей и консультирует по заказу"
            />
            <CollabeCard
              num="4"
              title="Замеры"
              desc="На Ваш адрес приезжает замерщик"
            />
            <CollabeCard
              num="5"
              title="Смета и сроки"
              desc="Мы составляем смету, оговариваются сроки"
            />
            <CollabeCard
              num="6"
              title="Чертежи и материалы"
              desc="Мы подготавливаем чертежи и согласовываем материалы"
            />
            <CollabeCard
              num="7"
              title="Изготовление изделия"
              desc="Мы изготавливаем мебель в срок, высылаем фото-видеоотчеты каждого этапа изготовления"
            />
            <CollabeCard
              num="8"
              title="доставка"
              desc="Мы бережно транспортируем и устанавливаем готовое изделие"
            />
          </ol>
        </div>
      </section>
      <section className="main__faq">
        <div className="main__faq-container">
          <h3 className="main__faq-title">Вопросы и ответы</h3>
          <div className="main__faq-accordions">
            <CustomAccordion title='Panel 1' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum blanditiis similique eligendi magnam debitis vitae doloremque? Delectus, eius neque? Pariatur at neque minus aliquam.'/>
            <CustomAccordion title='Panel 2' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum blanditiis similique eligendi magnam debitis vitae doloremque? Delectus, eius neque? Pariatur at neque minus aliquam.'/>
            <CustomAccordion title='Panel 3' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum blanditiis similique eligendi magnam debitis vitae doloremque? Delectus, eius neque? Pariatur at neque minus aliquam.'/>
            <CustomAccordion title='Panel 4' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum blanditiis similique eligendi magnam debitis vitae doloremque? Delectus, eius neque? Pariatur at neque minus aliquam.'/>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
