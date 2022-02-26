/* eslint-disable spaced-comment */
import './style.scss';
import PropTypes from 'prop-types';

const Select = ({
  array, defaultOption, name, classNames, onChange,
}) => {
  const handleChange = (evt) => {
    const codeRegion = evt.target.selectedOptions[0].dataset.region;
    onChange(evt.target.value, codeRegion);
  };
  return (
    <select className={classNames} name={name} onChange={handleChange}>
      <option value="">{defaultOption}</option>
      {
      array.map(
        (item) => (
          <option
            key={item.nom}
            value={item.nom}
            data-region={item.code}
            name={item.nom}
          >
            {item.nom}
          </option>
        ),
      )
    }
    </select>
  );
};

Select.propTypes = {
  array: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  //? non requis car certains select ne génère pas forcément d'event
};

export default Select;
