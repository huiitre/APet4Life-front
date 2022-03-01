import './style.scss';
import Field from 'src/components/Forms/Field';
import Button from 'src/components/Button';

const FormLogin = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <div className="form__login">
      <form onSubmit={onSubmit} className="form__login-container">
        <Field
          type="text"
          placeholder="Email"
          name="mail"
          className="form__login-field"
        />
        <Field
          type="password"
          placeholder="Mot de passe"
          name="password"
          className="form__login-field"
        />
        <Button
          type="submit"
          name="Envoyer"
          className="form__login-button"
        />
      </form>
    </div>
  );
};

export default FormLogin;
