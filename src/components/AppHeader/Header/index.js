import './style.scss';

const Header = () => (
  <div className="head__top">
    <div className="head__top-logo">logo du site</div>
    <h1 className="head__top-h1">A Pet 4 Life</h1>
    <div className="head__top-user">
      <button type="button" className="head__top-user-button">CONNEXION</button>
      <button type="button" className="head__top-user-button">INSCRIPTION</button>
    </div>
  </div>
);

export default Header;
