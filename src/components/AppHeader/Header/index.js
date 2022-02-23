import './style.scss';
import logo from 'src/assets/img/logo-pet.jpg';

const Header = () => (
  <div className="header">
    <img className="header__logo" src={logo} alt="logo" />
    <h1 className="header__title">A Pet 4 Life</h1>
    <div className="header__user">
      <button type="button" className="header__user-button">CONNEXION</button>
      <button type="button" className="header__user-button">INSCRIPTION</button>
    </div>
  </div>
);

export default Header;
