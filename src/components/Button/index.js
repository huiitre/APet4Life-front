import './style.scss';
import PropTypes from 'prop-types';

//* composant button réutilisable, en lui passant diverses informations en props
const Button = ({
  type, name, className, onClick,
}) =>
  // const preventDefault = (evt) => {
  //   evt.preventDefault();
  // };
  (
    <button onClick={onClick} type={type} className={`btn ${className}`}><span>{name}</span></button>
  );
Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: '',
  className: '',
  onClick: null,
};

export default Button;
