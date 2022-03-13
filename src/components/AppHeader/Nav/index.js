import "./style.scss";
import logo from "src/assets/img/logo.png";

//*imports react
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/actions/user";

const Nav = () => {
  const dispatch = useDispatch();
  const { userLogged } = useSelector((state) => state.user);

  //* hook d'état gérant l'ouverture et fermeture du burger menu
  const [showLinks, setShowLinks] = useState(false);

  const {
    currentUser: { roleUser },
  } = useSelector((state) => state.user);
  console.log(roleUser, roleUser === "ROLE_ASSO");

  //* fonction inversant l'état d'ouverture du burger menu
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const closeBurger = () => {
    setShowLinks(false);
  };

  const closeBurgerLogout = () => {
    closeBurger();
    dispatch(logout());
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <img className="navbar__title" src={logo} alt="title" />
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link to="/" className="navbar__link" onClick={closeBurger}>
            Accueil
          </Link>
        </li>
        <li className="navbar__item slideInDown-2">
          <Link
            to="/associations"
            className="navbar__link"
            onClick={closeBurger}
          >
            Associations
          </Link>
        </li>
        <li className="navbar__item slideInDown-3">
          <Link to="/adoptes" className="navbar__link" onClick={closeBurger}>
            Adoptés
          </Link>
        </li>

        {!userLogged ? (
          <>
            <li className="navbar__item slideInDown-4">
              <Link
                to="/connexion"
                className="navbar__link"
                onClick={closeBurger}
              >
                Connexion
              </Link>
            </li>
            <li className="navbar__item slideInDown-5">
              <Link
                to="/inscription"
                className="navbar__link"
                onClick={closeBurger}
              >
                Inscription
              </Link>
            </li>
          </>
        ) : (
          <>
            {roleUser === "ROLE_ADMIN" && (
              <li className="navbar__item slideInDown-4">
                <a
                  href="http://localhost:3000/back"
                  className="navbar__link"
                  onClick={closeBurger}
                >
                  Backoffice
                </a>
              </li>
            )}
            <li className="navbar__item slideInDown-5">
              <Link to="/" className="navbar__link" onClick={closeBurgerLogout}>
                Déconnexion
              </Link>
            </li>
            <li className="navbar__item slideInDown-6">
              <Link to="/profil" className="navbar__link" onClick={closeBurger}>
                Mon profil
              </Link>
            </li>
          </>
        )}
      </ul>
      <button
        type="button"
        className="navbar__burger"
        onClick={handleShowLinks}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
};

export default Nav;
