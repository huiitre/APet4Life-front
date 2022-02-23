import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo">logo du site</div>
    <h1 className="header__title">A Pet 4 Life</h1>
    <div className="header__user">
      <button type="button" className="header__user-button">CONNEXION</button>
      <button type="button" className="header__user-button">INSCRIPTION</button>
    </div>
  </div>
);

export default Header;
