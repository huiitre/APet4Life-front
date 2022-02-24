import './style.scss';
import logo from 'src/assets/img/logo-pet.jpg';
import { useState } from 'react';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <img className="navbar__logo" src={logo} alt="logo" />
      <h1 className="navbar__title">A Pet 4 Life</h1>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <a href="/" className="navbar__link">Accueil</a>
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
          <a href="/" className="navbar__link">Inscription</a>
        </li>
      </ul>
      <button type="button" className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
};

export default Nav;