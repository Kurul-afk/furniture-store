import React from "react";
import "./style.css";

const NotFoundPage = () => {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__desc">Страница не найдена!</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
