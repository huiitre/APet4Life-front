import './style.scss';

//* composant TextArea : élément HTML *textarea* réutilisable via les props
// todo
const TextArea = ({
  className, placeholder, name, onChange,
}) => (
  <textarea name={name} className={`textarea ${className}`} placeholder={placeholder} />
);

export default TextArea;
