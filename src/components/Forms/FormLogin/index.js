import './style.scss';

//* import form components
import Field from 'src/components/Forms/Field';
import Button from 'src/components/Button';

//* import react
import { useDispatch, useSelector } from 'react-redux';

//* import action
import {
  setFieldValueLoginForm,
} from "../../../store/actions/user";


//* composant FormLogin: élément HTML *form* pour gérer la connexion des utilisateurs
const FormLogin = () => {

  //* on récupère useDispatch()
  const dispatch = useDispatch();

  //* on récupère l'email et le password du state
  const mail = useSelector((state) => state.user.loginForm.mail);
  const password = useSelector((state) => state.user.loginForm.password);

  // todo on Submit ?
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  //* champs contrôlé qui envoie l'email et le password dans le state
  const handleChangeField = (value, name) => {
    dispatch(setFieldValueLoginForm(value, name));
  }

  return (
    <div className="form__login">
      <form onSubmit={onSubmit} className="form__login-container">
        <Field
          type="email"
          placeholder="Email"
          name="mail"
          onChange={handleChangeField}
          className="form__login-field"
          value={mail}
        />
        <Field
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChangeField}
          className="form__login-field"
          value={password}
        />
        <Button
          type="submit"
          name="Go"
          className="form__login-button"
        />
      </form>
    </div>
  );
};

export default FormLogin;

