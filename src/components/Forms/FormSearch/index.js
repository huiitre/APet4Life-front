import './style.scss';
import Button from 'src/components/Button';
import { useSelector } from 'react-redux';

const FormSearch = () => {
  const regionsList = useSelector((state) => state.associations.regionsList);
  return (
    <div className="form-search">
      <form className="form">
        <p>Cherchez une association :</p>

        <select className="form__select" name="pets" id="pet-select">
          <option value="">Régions</option>
        </select>

        <select className="form__select" name="pets" id="pet-select">
          <option value="">Départements</option>
        </select>
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
