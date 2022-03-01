/* eslint-disable spaced-comment */
import './style.scss';
import Button from 'src/components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import backgroundForm from 'src/assets/img/form-dogs.jpg';
import Select from '../Select';
import {
  setDepartment,
  setRegion,
  setZipcode,
  sendSearchQueryByRegion,
  sendSearchQueryByDepartment,
  sendSearchQueryByZipcode,
} from '../../../store/actions/associations';
import Field from '../Field';

const FormSearch = () => {
  //* on récupère useDispatch() de react-redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* on récupère depuis le store les régions et les departements
  const regionsList = useSelector((state) => state.associations.regionsList);
  const departmentList = useSelector((state) => state.associations.departmentList);
  const region = useSelector((state) => state.associations.formAssoc.region);
  const department = useSelector((state) => state.associations.formAssoc.department);
  const zipcode = useSelector((state) => state.associations.formAssoc.zipcode);

  //* event qui va charger la liste des departements en fonction de la région sélectionné
  const handleChangeRegion = (value) => {
    dispatch(setRegion(value));
  };

  //* event qui va envoyer dans le store le departement sélectionné
  const handleChangeDepartment = (value) => {
    dispatch(setDepartment(value));
  };

  const changeFieldValue = (value, name) => {
    dispatch(setZipcode(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //todo si zipcode n'est pas vide, on envoie la requête avec le zipcode
    if (zipcode !== '') {
      dispatch(sendSearchQueryByZipcode(zipcode));
    }
    //todo si departement n'est pas vide
    else if (department !== '') {
      dispatch(sendSearchQueryByDepartment(department));
    }
    //todo si region n'est pas vide
    else if (region !== '') {
      dispatch(sendSearchQueryByRegion(region));
    }
    else {
    //! mettre un message veuillez sélectionner une localisation
    }
    navigate('/search');
  };

  return (
    <div className="container__search">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <p>Cherchez une association :</p>

        <Select
          onChange={handleChangeRegion}
          array={regionsList}
          placeholder="Choisis une région"
          name="region"
          classNames="form__select"
        />

        <Select
          onChange={handleChangeDepartment}
          array={departmentList}
          placeholder="Choisis un département"
          name="departement"
          classNames="form__select"
        />
        <p>
          ou
          <br />
          Entrez votre code postal :
        </p>

        <Field
          type="number"
          placeholder="Code postal ..."
          name="zipcode"
          onChange={changeFieldValue}
          className="form__search"
        />

        <Button
          type="submit"
          name="Lancer la recherche"
          className="btn--search"
        />

      </form>
      <img className="form__background" src={backgroundForm} alt="test" />
    </div>

  );
};
export default FormSearch;
