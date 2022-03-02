import './style.scss';
import logoFb from 'src/assets/img/facebook.png';
import logoInsta from 'src/assets/img/insta.png';
import logoTwitter from 'src/assets/img/twitter.png';

const AppFooter = () => (

  <footer className="app-footer">
    <div className="footer">
      <div className="footer__links">
        <p>A Pet 4 Life 2022</p>
        <a href="">Mentions légales et CGU</a>
        <a href="">Nous contacter</a>
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
    </div>
  </footer>

);

export default AppFooter;
