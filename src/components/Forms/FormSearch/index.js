import './style.scss';
import Button from 'src/components/Button';

const FormSearch = () => {
  const arrayReg = [];
  for (let i = 1; i < 20; i++) {
    arrayReg.push(`Régioooooooooo ooooooo oooooon ${i}`);
  }

  const arrayDept = [];
  for (let i = 1; i < 100; i++) {
    arrayDept.push(`Départem eeeeeeeeee eeeeeent ${i}`);
  }

  return (
    <div className="form-search">

      <form className="form">

        <p>Cherchez une association :</p>

        <select className="form__select" name="pets" id="pet-select">
          <option value="">Régions</option>
          {
            arrayReg.map(
              (value) => <option value={value}>{value}</option>,
            )
          }
        </select>

        <select className="form__select" name="pets" id="pet-select">
          <option value="">Départements</option>
          {
            arrayDept.map(
              (value) => <option value={value}>{value}</option>,
            )
          }
        </select>
        <p>ou<br />Entrez votre code postal :</p>

        <input className="form__search" type="text" placeholder="Search..." />

        <Button type="submit" name="Lancer la recherche" className="form__button" />
        {/* <input className="form__submit" type="submit" value="Lancer la recherche" /> */}

      </form>

    </div>
  );
};
export default FormSearch;
