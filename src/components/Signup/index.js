import "./style.scss";

//* import composants
import Page from "src/components/Page";
import Spinner from "src/components/Spinner";
import Button from "src/components/Button";
import Field from "src/components/Forms/Field";
import Select from "../Forms/Select";
import RadioType from "./radioType";
import ModalSuccess from "src/components/ModalSuccess";
import { Message } from "semantic-ui-react";

//* import react redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";

//* import actions
import {
  changeFormSignupStatus,
  clearSignupForm,
  sendSignUp,
  setErrorMessageOnSignupForm,
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

  //todo on récupère ce qu'on a besoin comme infos depuis le state
  //* infos depuis le state user
  const {
    loading,
    status,
    userType,
    mail,
    password,
    passwordConfirm,
    region,
    department,
    name,
    firstname,
    lastname,
    errorMessage
  } = useSelector((state) => state.user.signup);
  
  //* infos depuis le state associations
  const {
    regionsList,
    departmentList
  } = useSelector((state) => state.associations);

  //* fonction qui vérifie si un type est choisi et qui redirige vers un autre formulaire
  const handleShowNextForm = (evt) => {
    evt.preventDefault();
    if (userType === "Particular" || userType === "Association") {
      dispatch(changeFormSignupStatus(2));
      setIsError(false);
    } else {
      dispatch(setErrorMessageOnSignupForm('Pour continuer, merci de choisir une catégorie'));
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
    //* on clean le formulaire
    dispatch(clearSignupForm());
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
        dispatch(setErrorMessageOnSignupForm('Veuillez remplir tous les champs afin de finaliser votre inscription'));
      } else if (password.length < 5) {
        setIsError(true);
        dispatch(setErrorMessageOnSignupForm('Votre mot de passe doit contenir au minimum 6 caractères'));
      } else if (password !== passwordConfirm) {
        setIsError(true);
        dispatch(setErrorMessageOnSignupForm('Les deux mot de passe doivent correspondre !'));
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
        dispatch(setErrorMessageOnSignupForm('Veuillez remplir tous les champs afin de finaliser votre inscription'));
      } else if (password.length < 5) {
        setIsError(true);
        dispatch(setErrorMessageOnSignupForm('Votre mot de passe doit contenir au minimum 6 caractères'));
      } else if (password !== passwordConfirm) {
        setIsError(true);
        dispatch(setErrorMessageOnSignupForm('Les deux mot de passe doivent correspondre !'));
      } else {
        setIsError(false);
        dispatch(sendSignUp());
      }
    }
  };

  const handleCloseModal = () => {
    dispatch(setModalSuccess(false));
    navigate("/");
  };

  const modalText = `Ton inscription a bien été confirmée 😉.
  Nous t'invitons grandement à compléter ton profil une fois que tu te sera connecté !`;

  const classNamesError = classNames("signup__error", { none: !isError });

  return (
    <Page>
      <ModalSuccess closeModal={handleCloseModal} modalText={modalText} modalHeader="Merci !"/>
      {loading && <Spinner />}
      {!loading && (
        <section className="signup">
          {status === 1 && (
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
                  <Message
                    error
                    header={errorMessage}
                    content=""
                  />
                </div>
              </form>
            </>
          )}
          {status === 2 && (
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
                    array={regionsList}
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
                <div className="signup__button button-submit">
                  <Button
                    type="submit"
                    name="Envoyer"
                    className="btn--submit-signup"
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
                <div className={classNamesError}>
                  <Message
                    error
                    header={errorMessage}
                    content=""
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
