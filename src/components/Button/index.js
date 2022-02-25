import './style.scss';
import PropTypes from 'prop-types';
import { Button as ButtonSem } from 'semantic-ui-react';

const Button = ({ type, name, className }) => (
  <button type={type} className={className}><span>{name}</span></button>
  // <ButtonSem className={className} color="">{name}</ButtonSem>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
