import './style.scss';
import PropTypes from 'prop-types';

//* composant Field : élément HTML *input* réutilisable via les props
const Field = ({
  className,
  type,
  placeholder,
  name,
  onChange,
  value,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <input
      className={`form__input ${className}`}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  className: '',
};

export default Field;
