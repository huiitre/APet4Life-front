import "./style.scss";
import backgroundContact from 'src/assets/img/team-background.jpg';

//* import composants
import Page from "src/components/Page";
import Field from 'src/components/Forms/Field';
import TextArea from 'src/components/Forms/TextArea';
import Button from 'src/components/Button';

const ContactUs = () => {
  console.log('here')

  //* fonction onSubmit, pour envoyer un mail à l'assoc via ce formulaire (pas implémenté pour l'instant, juste un event.preventDefault())
  const handleSubmitContact = (evt) => {
    evt.preventDefault();
  };
  
  //*click button pas encore géré
  const handleClickButton = () => {
    console.log('handleClickButton')
  }

  return (
    <Page>
      <div className="contact-container">
        <p className="contact-title">~ OUR DREAM TEAM ~</p>
        <div className="contact">
          <div className="contact__team">
            <div className="contact__team-item">
              <p className="contact__team-item-name">YANIS</p>
              <p className="contact__team-item-title">Développeur Frontend</p>
              <div className="contact__team-picture picture1"></div>
            </div>
            <div className="contact__team-item">
              <p className="contact__team-item-name">SAMANTHA</p>
              <p className="contact__team-item-title">Développeuse Backend</p>
              <div className="contact__team-picture picture2"></div>
            </div>
            <div className="contact__team-item">
              <p className="contact__team-item-name">MORGANE</p>
              <p className="contact__team-item-title">Développeuse Backend</p>
              <div className="contact__team-picture picture3"></div>
            </div>
            <div className="contact__team-item">
              <p className="contact__team-item-name">AUDREY</p>
              <p className="contact__team-item-title">Développeuse Frontend</p>
              <div className="contact__team-picture picture4"></div>
            </div>
          </div>

          <div className="contact__form">
            <p className="contact__form-title">Ecrivez-nous !</p>
            <form onSubmit={handleSubmitContact} className={`form-contact-team`}>
              <Field
                type="email"
                placeholder="Email"
                name="mail"
                className="contact__form-field"
              />
              <Field
                type="text"
                placeholder="Objet"
                name="object"
                className="contact__form-field"
              />
              <TextArea
                className="contact__form-textarea"
                placeholder="Votre message ici ..."
              />
              <Button
                type="submit"
                name="Envoyer"
                onClick={handleClickButton}
                className="btn--submit-contact-team"
              />
            </form>
          </div>

          <img className="contact__background" src={backgroundContact} alt="image fond d'écran" />
        </div>
      </div>
    </Page>
  );
};

export default ContactUs;
