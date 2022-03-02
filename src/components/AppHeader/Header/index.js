/* eslint-disable max-len */
import './style.scss';
import Button from 'src/components/Button';
import logo from 'src/assets/img/logo.png';

const Header = () => (
  <div className="header">
    <img className="header__title" src={logo} alt="title" />
    <div className="header__user">
      {/* //* on importe le composant Button en lui passant en props (paramètres) des informations pour rendre le bouton "unique" par rapport aux autres */}
      <Button type="" name="Connexion" className="btn--signin" />
      <Button type="" name="Inscription" className="btn--signup" />
    </div>
  </div>
);

export default Header;
