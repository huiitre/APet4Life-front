import './style.scss';
import logo from 'src/assets/img/logo-pet.jpg';
import Button from 'src/components/Button';

const Header = () => (
  <div className="header">
    <img className="header__logo" src={logo} alt="logo" />
    <h1 className="header__title">A Pet 4 Life</h1>
    <div className="header__user">
      <Button name="CONNEXION" className="header__user-button button--connexion" />
    </div>
  </div>
);

export default Header;
