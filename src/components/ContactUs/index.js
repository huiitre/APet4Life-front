import "./style.scss";
import Page from "src/components/Page";
import backgroundContact from 'src/assets/img/team-background.jpg';
import exemple1 from 'src/assets/img/exemple1.jpg';
import exemple2 from 'src/assets/img/exemple2.jpg';
import exemple3 from 'src/assets/img/exemple3.jpg';
import exemple4 from 'src/assets/img/exemple4.jpg';

const ContactUs = () => {
  console.log('here')
  
  return (
    <Page>
      <div className="contact-container">
        <div className="contact-title">La Dream Team</div>
        <div className="contact">
          <div className="contact__team">
            <div className="contact__team-item">
              <div className="contact__team-item-name">YANIS</div>
              <div className="contact__team-item-title">Développeur Frontend</div>
              <div className="contact__team-picture picture1"></div>
            </div>
            <div className="contact__team-item">
              <div className="contact__team-item-name">SAMANTHA</div>
              <div className="contact__team-item-title">Développeuse Backend</div>
              <div className="contact__team-picture picture2"></div>
            </div>
            <div className="contact__team-item">
              <div className="contact__team-item-name">MORGANE</div>
              <div className="contact__team-item-title">Développeuse Backend</div>
              <div className="contact__team-picture picture3"></div>
            </div>
            <div className="contact__team-item">
              <div className="contact__team-item-name">AUDREY</div>
              <div className="contact__team-item-title">Développeuse Frontend</div>
              <div className="contact__team-picture picture4"></div>
            </div>
          </div>

          <div className="contact__form">
          Le formulaire de contact
          </div>

          <img className="contact__background" src={backgroundContact} alt="image fond d'écran" />
        </div>
      </div>
    </Page>
  );
};

export default ContactUs;
