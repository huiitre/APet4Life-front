import "./style.scss";

//* import semantic
import { Checkbox } from 'semantic-ui-react'

//* import composants
import Page from 'src/components/Page';
import { Segment, Icon, Image, Message } from 'semantic-ui-react';
import Button from 'src/components/Button';
import Select from 'src/components/Forms/Select';
import Field from 'src/components/Forms/Field';
import TextArea from 'src/components/Forms/TextArea';
import ModalDelete from "./modalDelete";
// import ModalSuccess from 'src/components/ModalSuccess';

//* imports react
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import classNames from "classnames";

//* import actions
import {
  changeEditionMode,
  setFieldValueProfileForm,
  updateUserInfos,
  deleteUserInfos,
  setModalDelete,
  // setModalSuccess,
} from "../../store/actions/user";


//* composant ProfilePage : page de profil
const ProfilePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* hook custom qui gère l'affichage d'erreur
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //* infos depuis le state user de currentUser
  const {
    type,    // Association/Particular
    name,
    firstname,
    lastname,
    siret,
    username,    // email
    adress,
    zipcode,
    city,
    department,
    region,
    phone_number,
    description,
    picture,
    website,
  } = useSelector((state) => state.user.currentUser.data);

  const { species } = useSelector((state) => state.user.currentUser);

  const { editionMode } = useSelector((state) => state.user.profile);

  //* infos depuis le state associations
  const {
    departmentList,
    regionsList,
  } = useSelector((state) => state.associations);

  
  const handleChangeField = (value, name) => {
    dispatch(setFieldValueProfileForm(value, name));
  };

  const handleChangeDepartment = (value) => {
    dispatch(setFieldValueProfileForm(value, "department"));
  };

  const handleChangeRegion = (value) => {
    dispatch(setFieldValueProfileForm(value, "region"));
  };

  const handleChangeZipcode = (value, name) => {
    dispatch(setFieldValueProfileForm(Number(value), name))
  }

  const handleEditionMode = () => {
    dispatch(changeEditionMode(true));
    console.log(species);
  }

  //* regex de vérification d'email :
  //https://fr.w3docs.com/snippets/javascript/comment-valider-un-e-mail-en-utilisant-javascript.html
  //   Lettres anglaises majuscules (A-Z) et minuscules (a-z)
  // Chiffres (0-9)
  // Caractères ! # $ % & ' * + - / = ? ^ _ ` { | } ~
  // Caractère . ( point) fourni qu'il ne soit le premier ou le dernier caractère et ne va venir l'un après l'autre

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  const handleUpdateInfos = () => {

    if (username === "") {
      setIsError(true);
      setErrorMessage("Merci de renseigner un email");
    } else if (!regexEmail.test(username)) {
      setIsError(true);
      setErrorMessage("Merci de renseigner un email valide");
    } else if (region === "") {
      setIsError(true);
      setErrorMessage("Merci de renseigner une région");
    } else if (department === "") {
      setIsError(true);
      setErrorMessage("Merci de renseigner un département");
    }  else if (type === "Association") {
      if (name === "") {
        setIsError(true);
        setErrorMessage("Merci de renseigner un nom");
      } else {
        setIsError(false);
        setErrorMessage('');
        dispatch(changeEditionMode(false));
        dispatch(updateUserInfos());
      }
    } else if (type === "Particular") {
      if (firstname === "") {
        setIsError(true);
        setErrorMessage("Merci de renseigner un prénom");
      } else if (lastname === "") {
        setIsError(true);
        setErrorMessage("Merci de renseigner un nom");
      } else {
        setIsError(false);
        setErrorMessage('');
        dispatch(changeEditionMode(false));
        dispatch(updateUserInfos());
      }
    }
  }
  
  const handleDeleteInfos = () => {
    dispatch(deleteUserInfos());
    navigate('/');
  }

  const closeModalElement = () => {
    dispatch(setModalDelete(false));
  }

  const openModalElement = () => {
    dispatch(setModalDelete(true));
  }

  // const handleCloseModal = () => {
  //   dispatch(setModalSuccess(false));
  //   navigate('/');
  // };

  // const modalText = `Ton compte a bien été supprimé`;

  const classNamesError = classNames("error", { none: !isError });

  return (
  <Page>
    <ModalDelete
      handleModalYES={handleDeleteInfos}
      handleModalNO={closeModalElement}
    />
    {/* <ModalSuccess closeModal={handleCloseModal} modalText={modalText} /> */}

    <Segment className="profile">
      <div className="profile__picture">
        <Image src={picture} size="medium" rounded />
      </div>

      <div className="profile__content">

        { type === "Association" && ( <>     
          {/* en fonction du type user, afficher le nom ou prénom/nom */}
          <div className="profile__title">
            <span className={editionMode ? 'none' : ''}>{name}</span>
            <Field
              className={editionMode ? 'title-field' : 'title-field none'}
              type="text"
              placeholder="nom"
              name="name"
              value={name}
              onChange={handleChangeField}
              />
          </div>

          {/* si type user est particulier, on affiche pas description */}
          
          <div className="profile__description">
            <p className={editionMode ? 'none' : ''}>{description}</p>
            <TextArea
              className={editionMode ? 'description-field' : 'description-field none'}
              placeholder=""
              name="description"
              value={description}
              onChange={handleChangeField}
            />
          </div>      
        </> )}

        { type === "Particular" && (<>    
          {/* en fonction du type user, afficher le nom ou prénom/nom */}
          <div className="profile__title">
            <span className={editionMode ? 'none' : ''}>{firstname}</span>
            <span className={editionMode ? 'none' : ''}>{lastname}</span>
            <Field
              className={editionMode ? 'title-field' : 'title-field none'}
              type="text"
              placeholder="prénom"
              name="firstname"
              value={firstname}
              onChange={handleChangeField}
            />
            <Field
              className={editionMode ? 'title-field' : 'title-field none'}
              type="text"
              placeholder="nom"
              name="lastname"
              value={lastname}
              onChange={handleChangeField}
            />
          </div>      
        </> )}

        <div className="profile__contact">
          <div className="profile__contact-coord">
            <div className="profile__contact-coord-infos">
            
              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  <Icon name="mail outline" size="large" />
                  <span>E-mail</span>
                </span>
                <a className={editionMode ? 'none' : ''} href={`mailto:${username}`}>{username}</a>
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="email"
                  placeholder="nom"
                  name="username"
                  value={username}
                  onChange={handleChangeField}
                />
              </span>
              
              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">  
                  <Icon name="phone" size="large" />
                  <span>Téléphone</span>
                </span>
                <a className={editionMode ? 'none' : ''} href={`tel:${phone_number}`}>{phone_number}</a>
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="numéro de téléphone"
                  name="phone_number"
                  value={phone_number}
                  onChange={handleChangeField}
                />
              </span>

              { type === "Association" && (<>
                {/* website et siret pour associations uniquement */}
              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title"> 
                  <Icon name="at" size="large" />
                  <span>Site web</span>
                </span>
                <a className={editionMode ? 'none' : ''} href={website}>{website}</a>
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="site web"
                  name="website"
                  value={website}
                  onChange={handleChangeField}
                />
              </span>

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  <Icon name="file outline" size="large" />
                  <span>Siret</span>
                </span>
                <span className={editionMode ? 'none' : ''}>{siret}</span>
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="siret"
                  name="siret"
                  value={siret}
                  onChange={handleChangeField}
                />
              </span>
              </>)}
            </div>

            <div className="profile__contact-coord-location">

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  <Icon name="home" size="large" />
                  <span>Adresse</span>
                </span>
                <p className={editionMode ? 'none' : ''}>{adress}</p> 
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="adresse"
                  name="adress"
                  value={adress}
                  onChange={handleChangeField}
                />         
              </span>

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  {/* <Icon name="home" size="large" /> */}
                  <span>Code postal</span>
                </span>
                <p className={editionMode ? 'none' : ''}>{zipcode}</p> 
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="code postal"
                  name="zipcode"
                  value={zipcode}
                  onChange={handleChangeZipcode}
                />         
              </span>

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                {/* <Icon name="home" size="large" /> */}
                <span>Ville</span>
                </span>
                <p className={editionMode ? 'none' : ''}>{city}</p>
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="ville"
                  name="city"
                  value={city}
                  onChange={handleChangeField}
                />          
              </span>

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  {/* <Icon name="home" size="large" /> */}
                  <span>Département</span>
                </span>
                <p className={editionMode ? 'none' : ''}>{department}</p>
                {/* <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="département"
                  name="department"
                  value={department}
                  onChange={handleChangeField}
                /> */}

                <Select
                  classNames={editionMode ? 'field' : 'select-none'}
                  onChange={handleChangeDepartment}
                  array={departmentList}
                  placeholder="département"
                  name="department"
                  value={department}
                />          
              </span>

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  {/* <Icon name="home" size="large" /> */}
                  <span>Région</span>
                </span>
                <p className={editionMode ? 'none' : ''}>{region}</p>
                {/* <Field
                  className={editionMode ? 'field' : 'field none'} type="text"
                  placeholder="région"
                  name="region"
                  value={region}
                  onChange={handleChangeField}
                /> */}

                <Select
                  classNames={editionMode ? 'field' : 'select-none'}
                  onChange={handleChangeRegion}
                  array={regionsList}
                  placeholder="région"
                  name="region"
                  value={region}
                /> 

              </span>

            </div>

            <div className="profile__contact-coord-species">
            <p className="profile__contact-coord-species-title">Espèces</p>
              <Checkbox label='Cheval' defaultChecked/>
              <Checkbox label='Lapin' defaultChecked/>
              <Checkbox label='Chat' />
            </div>
          </div>
        </div>
      </div>

      <div className={classNamesError}>
        <Message
          error
          header={errorMessage}
          content=""
        />
      </div>

      <div className="profile__buttons">
        
        {!editionMode &&
        <Button
          type="button"
          name="Modifier"
          className="btn__edit btn--update-profile"
          onClick={handleEditionMode}
        />
        }
        
        {editionMode && 
        <Button
          type="button"
          name="Appliquer les modifications"
          className="btn__edit btn--send_update"
          onClick={handleUpdateInfos}
        />
        }
        <Button
          type="button"
          name="Supprimer le compte"
          className="btn__edit btn--delete-profile"
          onClick={openModalElement}
        />
      </div>
    </Segment>
  </Page>
  )
};

export default ProfilePage;
