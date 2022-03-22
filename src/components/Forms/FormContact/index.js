import './style.scss';
import Field from 'src/components/Forms/Field';
import TextArea from 'src/components/Forms/TextArea';
import Button from 'src/components/Button';

//! faire les propTypes du formContact

//* composant Field: élément HTML *form* réutilisable via les props className et la méthode onSubmit
const FormContact = ({ className, onSubmit }) => {
  const handleClickButton = () => {
    console.log('click button formContact temporaire');
  };
  return (
  <form onSubmit={onSubmit} className={`form-contact ${className}`}>
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
      className="btn--submit-contact-assoc"
    />
  </form>
)};

export default FormContact;
