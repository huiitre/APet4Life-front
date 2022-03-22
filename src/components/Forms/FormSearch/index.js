/* eslint-disable spaced-comment */
import './style.scss';

//* appel des dépendances react pouvant gérer des hooks
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import backgroundForm from 'src/assets/img/form-dogs.jpg';

//* import des composants de formulaire réutilisables
import Button from 'src/components/Button';
import Select from '../Select';
import Field from '../Field';

//* import des actions
import {
  setDepartment,
  setRegion,
  setZipcode,
  sendSearchQueryByRegion,
  sendSearchQueryByDepartment,
  sendSearchQueryByZipcode,
} from '../../../store/actions/associations';

//* composant FormSearch : formulaire de recherche réutilisable (home page & search result page)

const FormSearch = () => {
  //* on récupère useDispatch() de react-redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* on récupère depuis le store les régions et les départements
  const regionsList = useSelector((state) => state.associations.regionsList);
  const departmentList = useSelector((state) => state.associations.departmentList);

  //* on récupère depuis le store les éléments que l'utilisateur a entré dans le formulaire
  const region = useSelector((state) => state.associations.formAssoc.region);
  const department = useSelector((state) => state.associations.formAssoc.department);
  const zipcode = useSelector((state) => state.associations.formAssoc.zipcode);

  //* on met en place un hook custom gérant le message d'erreur
  const [errorMessage, setErrorMessage] = useState('');

  //* event qui va charger la liste des départements en fonction de la région sélectionnée
  const handleChangeRegion = (value) => {
    dispatch(setRegion(value));
  };

  //* event qui va envoyer dans le store le département sélectionné
  const handleChangeDepartment = (value) => {
    dispatch(setDepartment(value));
  };

  //* event qui va envoyer dans le state le zipcode écrit par l'utilisateur
  const changeFieldValue = (value, name) => {
    dispatch(setZipcode(value, name));
  };

  //* au submit on envoie/dispatch la requête (zipcode OU département OU region)
  //* puis on redirige/navigate vers la route /search
  const handleSubmit = (event) => {
    event.preventDefault();

    //todo si zipcode n'est pas vide, on envoie la requête avec le zipcode
    if (zipcode !== '') {
      dispatch(sendSearchQueryByZipcode(zipcode));
      navigate('/search');
    }
    
    //todo si departement n'est pas vide
    else if (department !== '') {
      dispatch(sendSearchQueryByDepartment(department));
      navigate('/search');
    }
    
    //todo si region n'est pas vide
    else if (region !== '') {
      dispatch(sendSearchQueryByRegion(region));
      navigate('/search');
    }
    else {
      setErrorMessage('Veuillez entrer une localisation');
    }
  };

  return (
    <>
    <div className="container__search">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <p>Cherchez une association :</p>
        
        <div className="form__region-department">
        <Select
          onChange={handleChangeRegion}
          array={regionsList}
          placeholder="Choisis une région"
          name="region"
          classNames="form__select"
          value={region}
        />
        <p className="form__or">et / ou</p>
        <Select
          onChange={handleChangeDepartment}
          array={departmentList}
          placeholder="Choisis un département"
          name="departement"
          classNames="form__select"
          value={department}
        />
        </div>

        <p>et / ou entrez votre code postal :</p>

        <Field
          type="number"
          placeholder="Code postal ..."
          name="zipcode"
          onChange={changeFieldValue}
          className="form__search"
          value={zipcode}
        />

        <Button
          type="submit"
          name="Lancer la recherche"
          className="btn--search"
        />

      </form>
      <img className="form__background" src={backgroundForm} alt="test" />
    </div>
    <div className="form__error">{errorMessage}</div>
    </>

  );
};
export default FormSearch;
