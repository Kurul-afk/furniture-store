import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
  <footer>
    <div className="footer__container">
      <nav>
        <Link to={'/'}>Главная</Link> 
        <Link to={'/about'}>О нас</Link>
        <Link to={'/our-work'}>Наши продукты</Link>
        <Link to={'/articles'}>Статьи</Link>
        <Link to={'/contacts'}>Контакты</Link>
      </nav>
    </div>
  </footer>
  );
};

export default Footer;
