import './style.scss';
// import logo from 'src/assets/img/logo-pet.jpg';
import FormLogin from 'src/components/Forms/FormLogin';
import Button from 'src/components/Button';
import title from 'src/assets/img/title.png';

const Header = () => (
  <div className="header">
    {/* <img className="header__logo" src={logo} alt="logo" /> */}
    {/* <h1 className="header__title">A Pet 4 Life</h1> */}
    <img className="header__title" src={title} alt="title" />
    <FormLogin />
    <div className="header__user">
      <Button type="" name="Connexion" className="btn--signin" />
      <Button type="" name="Inscription" className="btn--signup" />
    </div>
  </div>
);

export default Header;
