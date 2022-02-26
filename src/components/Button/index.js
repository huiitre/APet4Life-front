import './style.scss';
import PropTypes from 'prop-types';

const Button = ({ name, className }) => {
  const preventDefault = (evt) => {
    evt.preventDefault();
  };
  return (
    <a onClick={preventDefault} href="" className={`btn ${className}`}><span>{name}</span></a>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
