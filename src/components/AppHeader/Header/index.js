/* eslint-disable max-len */
import "./style.scss";
import logo from "src/assets/img/logo.png";
import { useNavigate } from "react-router";

//* import composants
import FormLogin from 'src/components/Forms/FormLogin';
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

  const isOpen = useSelector((state) => state.user.loginForm.isOpen);
  
  const handleNavigateToSignupPage = () => {
    navigate('/inscription');
  };

  const handleConnexionClick = () => {
    dispatch(changeLoginFormDisplay());
  }

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate('/');
  }

  const handleNavigateToProfilePage =() => {
    navigate('/profil');
  }

  const userLogged = useSelector((state) => state.user.userLogged);

  const handleCloseModalSuccess = () => {
    dispatch(setModalSuccess(false));
    navigate('/');
  };

  const handleCloseModalError = () => {
    dispatch(setModalError(false));
  };

  const modalTextSuccess = `Tu es connecté !`;
  const modalTextError = `Erreur de mail ou de mot de passe`;

  return (
    <div className="header">
    <ModalSuccess
      closeModal={handleCloseModalSuccess}
      modalText={modalTextSuccess}
      modalHeader="Hi !"
    />
    <ModalError
      closeModal={handleCloseModalError}
      modalText={modalTextError}
      modalHeader="Echec"
    />
      <img className="header__title" src={logo} alt="title" />
      {isOpen && <FormLogin />}
      <div className="header__user">
        {/* //* on importe le composant Button en lui passant en props (paramètres) des informations pour rendre le bouton "unique" par rapport aux autres */}
        
        {!userLogged &&
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
        }

        {userLogged &&
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
        }

      </div>
    </div>
  );
};

export default Header;
