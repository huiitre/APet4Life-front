import './style.scss';
import Button from 'src/components/Button';

import { useDispatch, useSelector } from 'react-redux';
import backgroundForm from 'src/assets/img/form-dogs.jpg';
import Select from '../Select';
import { loadDeptsFromApi } from '../../../store/actions/location';
import { setDept, setZipcodeFieldValue } from '../../../store/actions/associations';
import Field from '../Field';

const FormSearch = () => {
  //* on récupère useDispatch() de react-redux
  const dispatch = useDispatch();

  //* on récupère depuis le store les régions et les depts
  const regionsList = useSelector((state) => state.associations.regionsList);
  const deptsList = useSelector((state) => state.associations.deptsList);

  //* event qui va charger la liste des depts en fonction de la région sélectionné
  const handleChangeRegion = (value, codeRegion) => {
    dispatch(loadDeptsFromApi(value, codeRegion));
  };

  //* event qui va envoyer dans le store le dept sélectionné
  const handleChangeDept = (value) => {
    dispatch(setDept(value));
  };

  //* event envoie le zipcode tapé par l'user dans le store
  const changeFieldValue = (value, name) => {
    dispatch(setZipcodeFieldValue(value, name));
  };

  return (
    <div className="container__search">
      <form className="form">
        <p>Cherchez une association :</p>

        <Select
          onChange={handleChangeRegion}
          array={regionsList}
          defaultOption="Choisir une région"
          name="Régions"
          classNames="form__select"
        />

        <Select
          onChange={handleChangeDept}
          array={deptsList}
          defaultOption="Choisir un département"
          name="Département"
          classNames="form__select"
        />
        <p>
          ou
          <br />
          Entrez votre code postal :
        </p>

        <Field
          type="text"
          placeholder="Code postal ..."
          name="zipcode"
          onChange={changeFieldValue}
        />

        <Button
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
