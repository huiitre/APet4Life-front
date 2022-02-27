import './style.scss';
import Button from 'src/components/Button';

import { useDispatch, useSelector } from 'react-redux';
import backgroundForm from 'src/assets/img/form-dogs.jpg';
import Select from '../Select';
import { loadDeptsFromApi } from '../../../store/actions/location';
import { setDept, setZipcodeFieldValue } from '../../../store/actions/associations';
import Field from '../Field';

const FormSearch = () => {
  const dispatch = useDispatch();
  const regionsList = useSelector((state) => state.associations.regionsList);
  const deptsList = useSelector((state) => state.associations.deptsList);

  const handleChangeRegion = (value, codeRegion) => {
    dispatch(loadDeptsFromApi(value, codeRegion));
  };

  const handleChangeDept = (value) => {
    dispatch(setDept(value));
  };

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
