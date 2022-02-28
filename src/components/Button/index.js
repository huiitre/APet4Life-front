import './style.scss';
import PropTypes from 'prop-types';

const Button = ({ type, name, className, onClick }) =>
  // const preventDefault = (evt) => {
  //   evt.preventDefault();
  // };
  (
    <button onClick={onClick} type={type} className={`btn ${className}`}><span>{name}</span></button>
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
