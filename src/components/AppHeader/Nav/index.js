import './style.scss';
import { useState } from 'react';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className="navbar__logo">Logo</div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="/" className="navbar__link">Accueil</a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link">Accueil</a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link">Accueil</a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__link">Connexion</a>
        </li>
        <li className="navbar__item">
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
