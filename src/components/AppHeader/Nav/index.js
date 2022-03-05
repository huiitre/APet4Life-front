import './style.scss';
import logo from 'src/assets/img/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  //* hook d'état gérant l'ouverture et fermeture du burger menu
  const [showLinks, setShowLinks] = useState(false);

  //* fonction inversant l'état d'ouverture du burger menu
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const closeBurger = () => {
    setShowLinks(false);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <img className="navbar__title" src={logo} alt="title" />
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link
            to="/"
            className="navbar__link"
            onClick={closeBurger}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="/" className="navbar__link">Associations</a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/" className="navbar__link">Adoptés</a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/" className="navbar__link">Connexion</a>
        </li>
        <li className="navbar__item slideInDown-5">
          <Link
            to='/inscription'
            className='navbar__link'
            onClick={closeBurger}
          >
            Inscription
          </Link>
        </li>
      </ul>
      <button type="button" className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
};

export default Nav;
