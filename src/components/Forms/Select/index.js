/* eslint-disable spaced-comment */
import './style.scss';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

//* composant Select : élément HTML *input* réutilisable via les props
//* prend en props un array afin d'en faire un menu déroulant
const Select = ({
  array, name, classNames, onChange, placeholder, value,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <>
      <Input
        className={classNames}
        list={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <datalist id={name}>
        {
          array.map(
            (item) => (
              <option key={item.nom} data-region={item.code} value={item.item}>{item.nom}</option>
            ),
          )
        }
      </datalist>
    </>
  );
};

Select.propTypes = {
  array: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
