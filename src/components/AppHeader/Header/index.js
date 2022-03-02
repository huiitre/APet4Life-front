import './style.scss';
// import logo from 'src/assets/img/logo-pet.jpg';
import Button from 'src/components/Button';
import logo from 'src/assets/img/logo.png';

const Header = () => (
  <div className="header">
    {/* <img className="header__logo" src={logo} alt="logo" /> */}
    {/* <h1 className="header__title">A Pet 4 Life</h1> */}
    <img className="header__title" src={logo} alt="title" />
    <div className="header__user">
      <Button type="" name="Connexion" className="btn--signin" />
      <Button type="" name="Inscription" className="btn--signup" />
    </div>
  </div>
);

export default Header;
