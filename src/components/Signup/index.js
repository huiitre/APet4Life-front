import "./style.scss";
import Page from "src/components/Page";
import RadioType from "./radioType";
import Button from "src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeFormSignupStatus, setTypeSignupForm } from "../../store/actions/user";
import { useState } from "react";
import classNames from "classnames";

const Signup = () => {
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const statusForm = useSelector((state) => state.user.signup.status);
  const userType = useSelector((state) => state.user.signup.userType);
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
            <form onSubmit={handleSignup}>

            </form>
          </>
        )}
        
      </section>
    </Page>
  );
};

export default Signup;
