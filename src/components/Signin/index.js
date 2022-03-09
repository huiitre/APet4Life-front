import './style.scss';

//* import form components
import Field from 'src/components/Forms/Field';
import Button from 'src/components/Button';
import Page from 'src/components/Page';

//* import react
import { useDispatch, useSelector } from 'react-redux';

//* import action
import {
  setFieldValueLoginForm,
  login,
} from "../../store/actions/user";

//* composant Signin: élément HTML *form* pour gérer la connexion des utilisateurs
const Signin = () => {

  //* on récupère useDispatch()
  const dispatch = useDispatch();

  //* on récupère l'email et le password du state
  const mail = useSelector((state) => state.user.loginForm.mail);
  const password = useSelector((state) => state.user.loginForm.password);

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
      <Page className="form__page">
        <div className="form__login-page">
          <h1>Connexion</h1>
          <form onSubmit={onSubmit} className="form__login-page-container">
            <Field
              type="email"
              placeholder="Email"
              name="mail"
              onChange={handleChangeField}
              className="form__login-page-field"
              value={mail}
            />
            <Field
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={handleChangeField}
              className="form__login-page-field"
              value={password}
            />
            <Button
              type="submit"
              name="GO"
              className="form__login-page-button"
            />
          </form>
        </div>
      </Page>
  );
};

export default Signin;