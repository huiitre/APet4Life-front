import './style.scss';
import { Button as ButtonSem } from 'semantic-ui-react';

const Button = ({ name, className }) => (
  // <button type="button" className={className}><span>{name}</span></button>
  <ButtonSem className={className} color="">{name}</ButtonSem>
);

export default Button;
