//* on importe la feuille de style, comme dans tous les composants
import "./style.scss";

//* imports react router
import { Link } from 'react-router-dom';

//* on importe les logo des réseaux sociaux
import logoFb from "src/assets/img/facebook.png";
import logoInsta from "src/assets/img/insta.png";
import logoTwitter from "src/assets/img/twitter.png";

//* composant footer présent sur toutes les pages
const AppFooter = () => (
  <footer className="footer">
    <div>
      <ul className="footer__links">
        <li><p>A Pet 4 Life 2022</p></li>
        <li><a href="">Mentions légales et CGU</a></li>
        <li><Link to='/contact'>Nous contacter</Link></li>
      </ul>
    </div>
    
    <div className="footer__socials">
      <a href="">
        <img
          className="footer__socials-item"
          src={logoFb}
          alt="logo facebook"
        />
      </a>
      <a href="">
        <img
          className="footer__socials-item"
          src={logoInsta}
          alt="logo instagram"
        />
      </a>
      <a href="">
        <img
          className="footer__socials-item"
          src={logoTwitter}
          alt="logo twitter"
        />
      </a>
    </div>
  </footer>
);

export default AppFooter;
