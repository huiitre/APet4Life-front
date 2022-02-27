import './style.scss';
import PropTypes from 'prop-types';

const Field = ({
  className,
  type,
  placeholder,
  name,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <input
      className={`form__search ${className}`}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
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
