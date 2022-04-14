/* eslint-disable max-len */
import "./style.scss";
import logo from "src/assets/img/logo.png";

//* imports react router
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

//* import composants
import FormLogin from "src/components/Forms/FormLogin";
import Button from "src/components/Button";
import ModalSuccess from "src/components/ModalSuccess";
import ModalError from "src/components/ModalError";

//* import action
import {
  changeLoginFormDisplay,
  logout,
  setModalSuccess,
  setModalError,
} from "../../../store/actions/user";

//* import gestion des hooks react
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  // version avec hook d'état :
  // const [isOpen, setIsOpen] = useState(false);
  // setIsOpen(!isOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* on récupère des informations du state
  const isOpen = useSelector((state) => state.user.loginForm.isOpen);
  const userLogged = useSelector((state) => state.user.userLogged);
  const {
    currentUser: { roleUser },
  } = useSelector((state) => state.user);

  //* méthodes handle
  const handleNavigateToSignupPage = () => {
    navigate("/inscription");
  };

  const handleConnexionClick = () => {
    dispatch(changeLoginFormDisplay());
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleNavigateToProfilePage = () => {
    navigate("/profil");
  };

  const handleCloseModalSuccess = () => {
    dispatch(setModalSuccess(false));
    navigate("/");
  };

  const handleCloseModalError = () => {
    dispatch(setModalError(false));
  };

  //* textes à afficher en modal
  const modalTextSuccess = `Vous êtes bien connecté`;
  const modalTextError = `Erreur de mail ou de mot de passe`;

  return (
    <div className="header">
      <ModalSuccess
        closeModal={handleCloseModalSuccess}
        modalText={modalTextSuccess}
        modalHeader="Bonjour !"
      />
      <ModalError
        closeModal={handleCloseModalError}
        modalText={modalTextError}
        modalHeader="Echec"
      />

      {/* //* logo cliquable qui ramène vers l'accueil */}
      <Link to="/">
        <img className="header__title" src={logo} alt="title" />
      </Link>

      {/* //* popup de login     */}
      {isOpen && <FormLogin />}
      <div className="header__user">
        {/* //* si l'utilisateur n'est pas connecté, on affiche les boutons de connexion et d'incription */}
        {/* //* on importe le composant Button en lui passant en props (paramètres) des informations pour rendre le bouton "unique" par rapport aux autres */}
        {!userLogged && (
          <>
            <Button
              onClick={handleConnexionClick}
              type=""
              name="Connexion"
              className="btn--signin"
            />
            <Button
              onClick={handleNavigateToSignupPage}
              type=""
              name="Inscription"
              className="btn--signup"
            />
          </>
        )}

        {/* //* si l'utilisateur est connecté, on affiche les boutons de profil et de déconnexion */}
        {userLogged &&
          (roleUser !== "ROLE_ADMIN" ? (
            <>
              <Button
                onClick={handleNavigateToProfilePage}
                type=""
                name="Profil"
                className="btn--signup"
              />
              <Button
                onClick={handleLogoutClick}
                type=""
                name="Déconnexion"
                className="btn--signin"
              />
            </>
          ) : (
            <>
              <a href="http://backoffice.apet4life.huiitre.fr/back">
                <Button type="" name="Back Office" className="btn--signup" />
              </a>
              <Button
                onClick={handleLogoutClick}
                type=""
                name="Déconnexion"
                className="btn--signin"
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default Header;
