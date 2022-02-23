import './style.scss';

const Button = ({ name, className }) => (
  <button type="button" className={className}>{name}</button>
);

export default Button;
