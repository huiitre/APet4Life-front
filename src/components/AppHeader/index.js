import './style.scss';
import Header from 'src/components/AppHeader/Header';
import Nav from 'src/components/AppHeader/Nav';

// import { useEffect } from 'react';

const AppHeader = () => (
  <header className="app-header">
    <Header />
    <Nav />
  </header>
  // <nav className="navbar">
  //   <div className="navbar__logo">Logo</div>
  //   <ul className="navbar__links">
  //     <li className="navbar__item">
  //       <a href="/" className="navbar__link">Accueil</a>
  //     </li>
  //     <li className="navbar__item">
  //       <a href="/" className="navbar__link">Accueil</a>
  //     </li>
  //     <li className="navbar__item">
  //       <a href="/" className="navbar__link">Accueil</a>
  //     </li>
  //     <li className="navbar__item">
  //       <a href="/" className="navbar__link">Connexion</a>
  //     </li>
  //     <li className="navbar__item">
  //       <a href="/" className="navbar__link">Inscription</a>
  //     </li>
  //   </ul>
  //   <button type="button" className="navbar__burger">
  //     <span className="burger-bar" />
  //   </button>
  // </nav>
);
export default AppHeader;
