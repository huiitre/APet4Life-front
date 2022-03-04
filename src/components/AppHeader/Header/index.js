/* eslint-disable max-len */
import "./style.scss";
import logo from "src/assets/img/logo.png";

//* import composants
import FormLogin from 'src/components/Forms/FormLogin';
import Button from "src/components/Button";

//* import action
import { changeLoginFormDisplay } from "../../../store/actions/user";

//* import gestion des hooks react
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.loginForm.isOpen);
  console.log(isOpen);

  const handleConnexionClick = () => {
    console.log('on va gérer la connexion');
    dispatch(changeLoginFormDisplay);
  }

  const handleClick = () => {
    console.log('click temporaire boutons header');
  };

  return (
    <div className="header">
      <img className="header__title" src={logo} alt="title" />
      <FormLogin />
      <div className="header__user">
        {/* //* on importe le composant Button en lui passant en props (paramètres) des informations pour rendre le bouton "unique" par rapport aux autres */}
        <Button
          onClick={handleConnexionClick}
          type=""
          name="Connexion"
          className="btn--signin"
        />
        <Button
          onClick={handleClick}
          type=""
          name="Inscription"
          className="btn--signup"
        />
      </div>
    </div>
  );
};

export default Header;
