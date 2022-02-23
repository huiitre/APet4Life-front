import './style.scss';
import { slide as Menu } from 'react-burger-menu';

const Burger = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <div className="burger">
      <div>
        <Menu right>
          <a onClick={showSettings} id="home" className="burger__link" href="">Lien 1</a>
          <a onClick={showSettings} id="about" className="burger__link" href="">Lien 2</a>
          <a onClick={showSettings} id="contact" className="burger__link" href="">Lien 3</a>
          <a onClick={showSettings} className="burger__link" href="">Lien 4</a>
          <a onClick={showSettings} className="burger__link" href="">Connexion</a>
          <a onClick={showSettings} className="burger__link" href="">Inscription</a>
        </Menu>
      </div>
      <h1 className="burger__title">A Pet 4 Life</h1>
    </div>
  );
};

export default Burger;
