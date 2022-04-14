import './style.scss';

//* import form components
import Field from 'src/components/Forms/Field';
import Button from 'src/components/Button';

//* import react
import { useDispatch, useSelector } from 'react-redux';

//* import action
import {
  setFieldValueLoginForm,
  login,
} from "../../../store/actions/user";
import { Loader } from 'semantic-ui-react';


//* composant FormLogin: élément HTML *form* pour gérer la connexion des utilisateurs
const FormLogin = () => {

  //* on récupère useDispatch()
  const dispatch = useDispatch();

  //* on récupère l'email et le password du state
  const {mail, password, loading} = useSelector((state) => state.user.loginForm);

  //* submit
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    dispatch(login());
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
        {
          loading && <Loader active />
        }
        
      </form>
    </div>
  );
};

export default FormLogin;

