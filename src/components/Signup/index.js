import "./style.scss";
import Page from "src/components/Page";
import RadioType from "./radioType";
import Button from "src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeFormSignupStatus, setTypeSignupForm } from "../../store/actions/user";
import { useState } from "react";
import classNames from "classnames";
import Field from "src/components/Forms/Field";
import Select from "../Forms/Select";

const Signup = () => {
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const statusForm = useSelector((state) => state.user.signup.status);
  const userType = useSelector((state) => state.user.signup.userType);
  const regionList = useSelector((state) => state.associations.regionsList);
  console.log(userType);

  const handleShowNextForm = (evt) => {
    evt.preventDefault();
    if (userType !== '') {
      dispatch(changeFormSignupStatus(2));
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleChange = (evt) => {
    dispatch(setTypeSignupForm(evt.target.value));
  };

  const handleSignup = (evt) => {
    evt.preventDefault();
    console.log('signup');
  };

  const classNamesError = classNames('signup__error', {'none': !isError});

  return (
    <Page>
      <section className="signup">
        {statusForm === 1 && (
          <>
            <div className="signup__title">
              <h1>Vous êtes :</h1>
            </div>
            <form onSubmit={handleShowNextForm}>
              <div className="signup__radio">
                <RadioType onChange={handleChange} />
              </div>
              <div className="signup__button">
                <Button
                  type="submit"
                  name="Suivant"
                  className="btn--next-form"
                  onClick={handleShowNextForm}
                />
              </div>
              <div className={classNamesError}>
                Veuillez remplir tous les champs !
              </div>
            </form>
          </>
        )}
        {statusForm === 2 && (
          <>
            <div className="signup__title">
              {userType === 'Particular' ? 'Vous êtes un particulier' : 'Vous êtes une association'}
            </div>
            <form className="signup__form" onSubmit={handleSignup}>
              <div className="form__container form__mail">
                <label className="signup__label form__mail-label">Adresse mail</label>
                <Field
                  type="text"
                  placeholder="Adresse Email"
                  name="mail"
                  onChange=""
                  className="signup__field form__mail-field"
                />
              </div>
              <div className="form__container form__password">
                <label className="signup__label form__password-label">Mot de passe</label>
                <Field
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  onChange=""
                  className="signup__field form__password-field"
                />
              </div>
              <div className="form__container form__password_confirm">
                <label className="signup__label form__password_confirm-label">Confirmer votre mot de passe</label>
                <Field
                  type="password"
                  placeholder="Confirmer votre mot de passe"
                  name="password_confirm"
                  onChange=""
                  className="signup__field form__password_confirm-field"
                />
              </div>
              <div className="form__container form__region">
                <label className="signup__label form__region-label">Région</label>
                <Select
                  array={regionList}
                  name="region"
                  classNames="signup__field form__region-field"
                  onChange=""
                  placeholder="Votre région"
                  value=""
                />
              </div>
            </form>
          </>
        )}
        
      </section>
    </Page>
  );
};

export default Signup;
