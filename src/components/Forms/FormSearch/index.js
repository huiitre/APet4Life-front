import './style.scss';
import Button from 'src/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../Select';
import { loadDeptsFromApi } from '../../../store/actions/location';
import { setDept } from '../../../store/actions/associations';

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

  return (
    <div className="form-search">
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

        <input className="form__search" type="text" placeholder="Search..." />

        <Button
          type="submit"
          name="Lancer la recherche"
          className="form__button"
        />
        {/* <input className="form__submit" type="submit" value="Lancer la recherche" /> */}
      </form>
    </div>
  );
};
export default FormSearch;
