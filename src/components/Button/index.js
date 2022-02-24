import './style.scss';
import PropTypes from 'prop-types'
import { Button as ButtonSem } from 'semantic-ui-react';

const Button = ({ name, className }) => (
  <button type="button" className={className}><span>{name}</span></button>
  // <ButtonSem className={className} color="">{name}</ButtonSem>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
