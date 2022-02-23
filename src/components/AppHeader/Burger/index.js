import './style.scss';
import { slide as Menu } from 'react-burger-menu';

const Burger = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <div className="burger">
      <Menu right>
        <a onClick={showSettings} id="home" className="menu-item" href="/">Homeee</a>
        <a onClick={showSettings} id="about" className="menu-item" href="/about">About</a>
        <a onClick={showSettings} id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
    </div>
  );
};

export default Burger;
