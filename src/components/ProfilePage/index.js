import "./style.scss";

//* import composants
import Page from 'src/components/Page';
import { Segment, Icon, Image } from 'semantic-ui-react';
import Button from 'src/components/Button';
import { useSelector, useDispatch } from "react-redux";
import Field from 'src/components/Forms/Field';
import TextArea from 'src/components/Forms/TextArea';

//* import actions
import {
  changeEditionMode,
  setFieldValueProfileForm,
} from "../../store/actions/user";


//* composant ProfilePage : page de profil
const ProfilePage = () => {

  const dispatch = useDispatch();

  const {
    userType,
    name,
    firstname,
    lastname,
    siret,
    mail,
    address,
    zipcode,
    city,
    department,
    region,
    phone_number,
    description,
    picture,
    website,
  } = useSelector((state) => state.user.currentUser);

  const { editionMode } = useSelector((state) => state.user.profile);
  
  const handleEditionMode = () => {
    dispatch(changeEditionMode());
  }

  const handleChangeField = (value, name) => {
    dispatch(setFieldValueProfileForm(value, name));
  }

  return (
  <Page>
    <Segment className="profile">
      <div className="profile__picture">
        <Image src="https://placekitten.com/500/600" size="medium" rounded />
      </div>
      <div className="profile__content">
        {/* //* en fonction du type user, afficher le nom ou prénom/nom */}
        <div className="profile__title">
          <span className={editionMode ? 'none' : ''}>{name}</span>
          <Field
            className={editionMode ? '' : 'none'}
            type="text"
            placeholder="nom"
            name="name"
            value={name}
            onChange={handleChangeField}
            />
        </div>
        
        {/* //* si type user est particulier, on affiche pas description */}
        <div className="profile__description">
          <p className={editionMode ? 'none' : ''}>{description}</p>
          <TextArea
            className={editionMode ? '' : 'none'}
            placeholder=""
            name="description"
            value={description}
            onChange={handleChangeField}
          />
        </div>
        <div className="profile__contact">
          <div className="profile__contact-coord">
            
            <span className="profile__contact-coord-item">
              <Icon name="mail outline" size="large" />
              <a className={editionMode ? 'none' : ''} href={`mailto:${mail}`}>{mail}</a>
              <Field
                className={editionMode ? '' : 'none'}
                type="email"
                placeholder="nom"
                name="name"
                value={mail}
                onChange={handleChangeField}
              />
            </span>
            
            <span className="profile__contact-coord-item">
              <Icon name="phone" size="large" />
              <a className={editionMode ? 'none' : ''} href={`tel:${phone_number}`}>{phone_number}</a>
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="numéro de téléphone"
                name="phone"
                value={phone_number}
                onChange={handleChangeField}
              />
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="at" size="large" />
              <a className={editionMode ? 'none' : ''} href={website}>{website}</a>
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="site web"
                name="website"
                value={website}
                onChange={handleChangeField}
              />
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="home" size="large" />
              <p className={editionMode ? 'none' : ''}>{address}</p> 
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="adresse"
                name="address"
                value={address}
                onChange={handleChangeField}
              />         
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="home" size="large" />
              <p className={editionMode ? 'none' : ''}>{zipcode}</p> 
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="code postal"
                name="zipcode"
                value={zipcode}
                onChange={handleChangeField}
              />         
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="home" size="large" />
              <p className={editionMode ? 'none' : ''}>{city}</p>
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="ville"
                name="city"
                value={city}
                onChange={handleChangeField}
              />          
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="home" size="large" />
              <p className={editionMode ? 'none' : ''}>{department}</p>
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="département"
                name="department"
                value={department}
                onChange={handleChangeField}
              />          
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="home" size="large" />
              <p className={editionMode ? 'none' : ''}>{region}</p>
              <Field
                className={editionMode ? '' : 'none'} type="text"
                placeholder="région"
                name="region"
                value={region}
                onChange={handleChangeField}
              />          
            </span>

            <span className="profile__contact-coord-item">
              <Icon name="file outline" size="large" />
              <p>N° Siret:</p>
              <p className={editionMode ? 'none' : ''}>{siret}</p>
              <Field
                className={editionMode ? '' : 'none'}
                type="text"
                placeholder="siret"
                name="siret"
                value={siret}
                onChange={handleChangeField}
              />
            </span>            
          </div>
        </div>
      </div>
      <div className="profile__buttons">
        <Button
          type="button"
          name="Modifier"
          className="btn__edit btn--update-profile"
          onClick={handleEditionMode}
        />
        {/* //* à afficher en remplacement du bouton jaune "Modifier" */}
        <Button
          type="button"
          name="Appliquer les modifications"
          className="btn__edit btn--send_update"
          onClick=""
        />
        <Button
          type="button"
          name="Supprimer le compte"
          className="btn__edit btn--delete-profile"
          onClick=""
        />
      </div>
    </Segment>
  </Page>
  )
};

export default ProfilePage;
