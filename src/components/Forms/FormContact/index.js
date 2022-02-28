import './style.scss';
import Field from 'src/components/Forms/Field';
import TextArea from 'src/components/Forms/TextArea';
import Button from 'src/components/Button';

const FormContact = ({ className, onSubmit }) => (
  <form onSubmit={onSubmit} className={`form-contact ${className}`}>
    <Field
      type="text"
      placeholder="Email"
      name="mail"
      className=""
    />
    <Field
      type="text"
      placeholder="Objet"
      name="object"
      className=""
    />
    <TextArea
      className=""
      placeholder="Votre message ici ..."
    />
    <Button
      type="submit"
      name="Envoyer"
    />
  </form>
);

export default FormContact;
