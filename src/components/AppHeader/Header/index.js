/* eslint-disable max-len */
import "./style.scss";
import logo from "src/assets/img/logo.png";
import { useNavigate } from "react-router";

//* import composants
import FormLogin from 'src/components/Forms/FormLogin';
import Button from "src/components/Button";

//* import action
import { changeLoginFormDisplay, logout } from "../../../store/actions/user";

//* import gestion des hooks react
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

  // version avec hook d'état :
  // const [isOpen, setIsOpen] = useState(false);
  // setIsOpen(!isOpen);

  const navigate = useNavigate();
  const handleNavigateToSignupPage = () => {
    navigate('/inscription');
  };

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.loginForm.isOpen);

  const handleConnexionClick = () => {
    dispatch(changeLoginFormDisplay());
  }

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  const userLogged = useSelector((state) => state.user.userLogged);

  return (
    <div className="header">
      <img className="header__title" src={logo} alt="title" />
      {isOpen && <FormLogin />}
      <div className="header__user">
        {/* //* on importe le composant Button en lui passant en props (paramètres) des informations pour rendre le bouton "unique" par rapport aux autres */}
        
        {!userLogged &&
        <Button
          onClick={handleConnexionClick}
          type=""
          name="Connexion"
          className="btn--signin"
        /> }

        {userLogged &&
        <Button
          onClick={handleLogoutClick}
          type=""
          name="Déconnexion"
          className="btn--signin"
        /> }

        <Button
          onClick={handleNavigateToSignupPage}
          type=""
          name="Inscription"
          className="btn--signup"
        />
      </div>
    </div>
  );
};

export default Header;
