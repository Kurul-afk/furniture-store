import { Link } from "react-router-dom";
import logo from '../../img/logo.svg';
import CustomMenu from '../CustomMenu';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <Link className='header__logo' to={'/'}>
          C
          <img src={logo} alt="Логотип" /> 
          mfort
        </Link>
        <div className="header__links">
          <Link className='header__link' to={'/about'}>О нас</Link>
          <Link className='header__link' to={'/our-work'}>Наши продукты</Link>
          <Link className='header__link' to={'/reviews'}>Статьи</Link>
          <Link className='header__link' to={'/contacts'}>Контакты</Link>
        </div>
        <div className='header__auth'>
          <CustomMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;
