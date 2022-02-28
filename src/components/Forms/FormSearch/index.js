import './style.scss';
import Button from 'src/components/Button';

import { useDispatch, useSelector } from 'react-redux';
import backgroundForm from 'src/assets/img/form-dogs.jpg';
import Select from '../Select';
import {
  setDept,
  setRegion,
  setZipcode,
  sendSearchQueryByRegion,
  sendSearchQueryByDept,
  sendSearchQueryByZipcode,
} from '../../../store/actions/associations';
import Field from '../Field';

const FormSearch = () => {
  //* on récupère useDispatch() de react-redux
  const dispatch = useDispatch();

  //* on récupère depuis le store les régions et les depts
  const regionsList = useSelector((state) => state.associations.regionsList);
  const deptsList = useSelector((state) => state.associations.deptsList);
  console.log(deptsList);
  const region = useSelector((state) => state.associations.formAssoc.region);
  const dept = useSelector((state) => state.associations.formAssoc.dept);
  const zipcode = useSelector((state) => state.associations.formAssoc.zipcode);

  //* event qui va charger la liste des depts en fonction de la région sélectionné
  const handleChangeRegion = (value) => {
    dispatch(setRegion(value));
  };

  //* event qui va envoyer dans le store le dept sélectionné
  const handleChangeDept = (value) => {
    dispatch(setDept(value));
  };

  const changeFieldValue = (value, name) => {
    dispatch(setZipcode(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!zipcode) {
      dispatch(sendSearchQueryByZipcode(zipcode));
    }
    else if (!dept) {
      dispatch(sendSearchQueryByDept(dept));
    }
    else if (!region) {
      dispatch(sendSearchQueryByDept(region));
    }
    else {
    //! mettre un message veuillez sélectionner une localisation
    }
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
          onChange={handleChangeDept}
          array={deptsList}
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
        {/* <input className="form__submit" type="submit" value="Lancer la recherche" /> */}
      </form>
      <img className="form__background" src={backgroundForm} alt="test" />
    </div>

  );
};
export default FormSearch;
