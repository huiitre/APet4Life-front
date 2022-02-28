import './style.scss';
import PropTypes from 'prop-types';

const Button = ({ type, name, className }) =>
  // const preventDefault = (evt) => {
  //   evt.preventDefault();
  // };
  (
    <button type={type} className={`btn ${className}`}><span>{name}</span></button>
  );
Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: '',
};

export default Button;
