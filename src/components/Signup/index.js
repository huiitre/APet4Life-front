import "./style.scss";

//* import composants
import Page from "src/components/Page";
import Spinner from "src/components/Spinner";
import Button from "src/components/Button";
import Field from "src/components/Forms/Field";
import Select from "../Forms/Select";
import RadioType from "./radioType";
import ModalSuccess from "src/components/ModalSuccess";

//* import react redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";

//* import actions
import {
  changeFormSignupStatus,
  sendSignUp,
  setFieldValueSignupForm,
  setModalSuccess,
  setTypeSignupForm,
} from "../../store/actions/user";
import {
  loadDepartmentsFromApi,
  loadRegionsFromApi,
} from "../../store/actions/location";


const Signup = () => {
  //* hook custom qui gère l'affichage d'erreur si un ou plusieurs champs ne sopnt pas rempli
  const [isError, setIsError] = useState(false);

  //* useEffect qui va charger la liste des régions et des depts depuis une api public
  useEffect(() => {
    dispatch(loadRegionsFromApi());
    dispatch(loadDepartmentsFromApi());
  }, []);

  //* on récupère useDispatch()
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //* on récupère ce qu'on a besoin comme infos depuis le state
  const loading = useSelector((state) => state.user.signup.loading);
  // const modalSuccess = useSelector((state) => state.user.signup.modalSuccess);
  const statusForm = useSelector((state) => state.user.signup.status);
  const regionList = useSelector((state) => state.associations.regionsList);
  const departmentList = useSelector(
    (state) => state.user.signup.departmentList
  );
  const userType = useSelector((state) => state.user.signup.userType);
  const mail = useSelector((state) => state.user.signup.mail);
  const password = useSelector((state) => state.user.signup.password);
  const passwordConfirm = useSelector(
    (state) => state.user.signup.passwordConfirm
  );
  const region = useSelector((state) => state.user.signup.region);
  const department = useSelector((state) => state.user.signup.department);
  const name = useSelector((state) => state.user.signup.name);
  const firstname = useSelector((state) => state.user.signup.firstname);
  const lastname = useSelector((state) => state.user.signup.lastname);

  //* fonction qui vérifie si un type est choisi et qui redirige vers un autre formulaire
  const handleShowNextForm = (evt) => {
    evt.preventDefault();
    if (userType !== "") {
      dispatch(changeFormSignupStatus(2));
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  //* fonction qui insère le type dans le state
  const handleChangeType = (evt) => {
    dispatch(setTypeSignupForm(evt.target.value));
  };

  //* fonction qui insère la value du field dans le state
  const handleChangeField = (value, name) => {
    dispatch(setFieldValueSignupForm(value, name));
  };

  //* fonction qui insère la région sélectionnée dans le state
  const handleChangeRegion = (value) => {
    dispatch(setFieldValueSignupForm(value, "region"));
  };

  //* fonction qui insère le département sélectionnée dans le state
  const handleChangeDepartment = (value) => {
    dispatch(setFieldValueSignupForm(value, "department"));
  };

  //* fonction qui fait un retour en arrière vers le premier formulaire
  const handleShowPreviousForm = () => {
    dispatch(changeFormSignupStatus(1));
    //* on met l'erreur à false si l'user revient en arrière
    setIsError(false);
  };

  //* fonction qui submit le formulaire
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //* on fait nos vérifications
    if (userType === "Association") {
      if (
        mail === "" ||
        password === "" ||
        passwordConfirm === "" ||
        region === "" ||
        department === "" ||
        name === ""
      ) {
        setIsError(true);
        console.log("error");
      } else if (password.length < 5) {
        setIsError(true);
        console.log("error");
      } else if (password !== passwordConfirm) {
        setIsError(true);
        console.log("error");
      } else {
        setIsError(false);
        dispatch(sendSignUp());
      }
    } else if (userType === "Particular") {
      if (
        mail === "" ||
        password === "" ||
        passwordConfirm === "" ||
        region === "" ||
        department === "" ||
        firstname === "" ||
        lastname === ""
      ) {
        setIsError(true);
        console.log("error");
      } else if (password.length < 5) {
        setIsError(true);
        console.log("error");
      } else if (password !== passwordConfirm) {
        setIsError(true);
        console.log("error");
      } else {
        setIsError(false);
        dispatch(sendSignUp());
      }
    }
  };

  const handleCloseModal = () => {
    console.log('here');
    dispatch(setModalSuccess(false));
    navigate('/');
  };

  const modalText = `Ton inscription a bien été confirmée. En cliquant sur le bouton en bas, tu seras redirigé vers la page d'accueil, il te suffira ensuite de te connecter via le bouton "connexion" en haut à droite du site 😉.`

  const classNamesError = classNames("signup__error", { none: !isError });

  return (
    <Page>
      <ModalSuccess closeModal={handleCloseModal} modalText={modalText} />
      {loading && <Spinner />}
      {!loading && (
        <section className="signup">
          {statusForm === 1 && (
            <>
              <div className="signup__title">
                <h1>Vous êtes :</h1>
              </div>
              <form onSubmit={handleShowNextForm}>
                <div className="signup__radio">
                  <RadioType onChange={handleChangeType} />
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
                {userType === "Particular"
                  ? "Vous êtes un particulier"
                  : "Vous êtes une association"}
              </div>
              <form className="signup__form" onSubmit={handleSubmit}>
                <div className="form__container form__mail">
                  <label className="signup__label form__mail-label">
                    Adresse mail
                  </label>
                  <Field
                    type="email"
                    placeholder="Adresse Email"
                    name="mail"
                    onChange={handleChangeField}
                    className="signup__field form__mail-field"
                    value={mail}
                  />
                </div>
                <div className="form__container form__password">
                  <label className="signup__label form__password-label">
                    Mot de passe
                  </label>
                  <Field
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    onChange={handleChangeField}
                    className="signup__field form__password-field"
                    value={password}
                  />
                </div>
                <div className="form__container form__password_confirm">
                  <label className="signup__label form__password_confirm-label">
                    Confirmer votre mot de passe
                  </label>
                  <Field
                    type="password"
                    placeholder="Confirmer votre mot de passe"
                    name="passwordConfirm"
                    onChange={handleChangeField}
                    className="signup__field form__password_confirm-field"
                    value={passwordConfirm}
                  />
                </div>
                {/* //* si c'est un particulier ... */}
                {userType === "Particular" && (
                  <>
                    <div className="form__container form__firstname">
                      <label className="signup__label form__firstname-label">
                        Votre prénom
                      </label>
                      <Field
                        type="text"
                        placeholder="Votre prénom"
                        name="firstname"
                        onChange={handleChangeField}
                        className="signup__field form__firstname-field"
                        value={firstname}
                      />
                    </div>
                    <div className="form__container form__lastname">
                      <label className="signup__label form__lastname-label">
                        Votre nom
                      </label>
                      <Field
                        type="text"
                        placeholder="Votre nom"
                        name="lastname"
                        onChange={handleChangeField}
                        className="signup__field form__lastname-field"
                        value={lastname}
                      />
                    </div>
                  </>
                )}
                {/* //* si c'est une association ... */}
                {userType === "Association" && (
                  <div className="form__container form__name">
                    <label className="signup__label form__name-label">
                      Nom de l'association
                    </label>
                    <Field
                      type="text"
                      placeholder="Nom de l'association"
                      name="name"
                      onChange={handleChangeField}
                      className="signup__field form__name-field"
                      value={name}
                    />
                  </div>
                )}
                <div className="form__container form__region">
                  <label className="signup__label form__region-label">
                    Région
                  </label>
                  <Select
                    array={regionList}
                    name="region"
                    classNames="signup__field form__region-field"
                    onChange={handleChangeRegion}
                    placeholder="Votre région"
                    value={region}
                  />
                </div>
                <div className="form__container form__department">
                  <label className="signup__label form__department-label">
                    Département
                  </label>
                  <Select
                    array={departmentList}
                    name="department"
                    classNames="signup__field form__department-field"
                    onChange={handleChangeDepartment}
                    placeholder="Votre département"
                    value={department}
                  />
                </div>
                <div className="signup__button button-return">
                  <Button
                    type="submit"
                    name="Retour"
                    className="btn--return-form"
                    onClick={handleShowPreviousForm}
                  />
                </div>
                <div className="signup__button button-submit">
                  <Button
                    type="submit"
                    name="Envoyer"
                    className="btn--submit-signup"
                  />
                </div>
              </form>
            </>
          )}
        </section>
      )}
    </Page>
  );
};

export default Signup;
