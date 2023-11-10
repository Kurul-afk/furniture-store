import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import instagramIcon from "../../img/instagram.svg";
import vkIcon from "../../img/vk.svg";
import whatsAppIcon from "../../img/whats-app.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <nav>
          <Link className="nav__item" to={"/"}>
            Главная
          </Link>
          <Link className="nav__item" to={"/about"}>
            О нас
          </Link>
          <Link className="nav__item" to={"/our-work"}>
            Наши продукты
          </Link>
          <Link className="nav__item" to={"/contacts"}>
            Контакты
          </Link>
        </nav>
        <ul className="footer__contacts">
          <li className="footer__contacts-item">
            <Link className="contacts-link" to="tel: +996-700-123456">
              +996-700-123456
            </Link>
          </li>
          <li className="footer__contacts-item">
            <Link className="contacts-link" to="mailto: example@gmail.com">
              example@gmail.com
            </Link>
          </li>
          <li className="footer__contacts-item">
            <ul className="socials">
              <li className="social-item">
                <Link
                  className="social-link"
                  to={"tg://resolve?domain=mebelkondoor"}
                >
                  <img style={{ width: "30px" }} src={vkIcon} />
                </Link>
              </li>
              <li className="social-item">
                <Link
                  className="social-link"
                  to={"https://vk.com/kondoor_2004"}
                >
                  <img style={{ width: "30px" }} src={instagramIcon} />
                </Link>
              </li>
              <li className="social-item">
                <Link
                  className="social-link"
                  to={"https://vk.com/kondoor_2004"}
                >
                  <img style={{ width: "30px" }} src={whatsAppIcon} />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
