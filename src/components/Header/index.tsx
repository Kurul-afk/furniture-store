import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import CustomMenu from "../CustomMenu";
import "./style.css";
import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext";
import { Button } from "@mui/material";

const Header = () => {
  const { currentUser, setCurrentUser } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, []);

  return (
    <header>
      <div className="header__container">
        <Link className="header__logo" to={"/"}>
          C
          <img src={logo} alt="Логотип" />
          mfort
        </Link>
        <div className="header__links">
          <Link className="header__link" to={"/about"}>
            О нас
          </Link>
          <Link className="header__link" to={"/our-work"}>
            Наши продукты
          </Link>
          <Link className="header__link" to={"/contacts"}>
            Контакты
          </Link>
        </div>
        <div className="header__auth">
          {currentUser ? (
            <CustomMenu />
          ) : (
            <Button
              className="header__btn"
              variant="contained"
              onClick={() => navigate("/sign-up")}
            >
              Зарегистрироваться
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
