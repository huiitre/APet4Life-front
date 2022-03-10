import "./style.scss";

//* import composants
import Page from 'src/components/Page';
import { Segment, Icon, Image } from 'semantic-ui-react';
import Button from 'src/components/Button';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Field from 'src/components/Forms/Field';
import TextArea from 'src/components/Forms/TextArea';
import ModalDelete from "./modalDelete";
// import ModalSuccess from 'src/components/ModalSuccess';

//* import actions
import {
  changeEditionMode,
  setFieldValueProfileForm,
  updateUserInfos,
  deleteUserInfos,
  openModal,
  setModalSuccess,
} from "../../store/actions/user";


//* composant ProfilePage : page de profil
const ProfilePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const { editionMode } = useSelector((state) => state.user.profile);
  
  const handleChangeField = (value, name) => {
    dispatch(setFieldValueProfileForm(value, name));
  }

  const handleEditionMode = () => {
    dispatch(changeEditionMode());
  }
  
  const handleUpdateInfos = () => {
    dispatch(changeEditionMode());
    dispatch(updateUserInfos());
  }
  
  const handleDeleteInfos = () => {
    dispatch(deleteUserInfos());
    navigate('/');
  }

  const closeModalElement = () => {
    dispatch(openModal(false));
  }

  const openModalElement = () => {
    dispatch(openModal(true));
  }

  // const handleCloseModal = () => {
  //   dispatch(setModalSuccess(false));
  //   navigate('/');
  // };

  // const modalText = `Ton compte a bien été supprimé`;

  return (
  <Page>
    <ModalDelete
      handleModalYES={handleDeleteInfos}
      handleModalNO={closeModalElement}
    />
    {/* <ModalSuccess closeModal={handleCloseModal} modalText={modalText} /> */}

    <Segment className="profile">
      <div className="profile__picture">
        <Image src="https://placekitten.com/500/600" size="medium" rounded />
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
              className={editionMode ? 'field' : 'field none'}
              type="text"
              placeholder="prénom"
              name="firstname"
              value={firstname}
              onChange={handleChangeField}
            />
            <Field
              className={editionMode ? 'field' : 'field none'}
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
                  onChange={handleChangeField}
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
                <Field
                  className={editionMode ? 'field' : 'field none'}
                  type="text"
                  placeholder="département"
                  name="department"
                  value={department}
                  onChange={handleChangeField}
                />          
              </span>

              <span className="profile__contact-coord-item">
                <span className="profile__contact-coord-item-title">
                  {/* <Icon name="home" size="large" /> */}
                  <span>Région</span>
                </span>
                <p className={editionMode ? 'none' : ''}>{region}</p>
                <Field
                  className={editionMode ? 'field' : 'field none'} type="text"
                  placeholder="région"
                  name="region"
                  value={region}
                  onChange={handleChangeField}
                />          
              </span>

            </div>
          </div>
        </div>
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
