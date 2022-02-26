import './style.scss';
import Button from 'src/components/Button';
import backgroundForm from 'src/assets/img/form-dogs.jpg';

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
    <div className="container__search">

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

        <input className="form__search" type="text" placeholder="06300" />

        <Button type="submit" name="Lancer la recherche" className="btn--search" />

      </form>

      <img className="form__background" src={backgroundForm} alt="test" />

    </div>

  );
};
export default FormSearch;
