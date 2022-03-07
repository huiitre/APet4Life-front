import './style.scss';

//* composant TextArea : élément HTML *textarea* réutilisable via les props
// todo
const TextArea = ({
  className, placeholder, name, onChange, value,
}) => (
  <textarea
    name={name}
    className={`textarea ${className}`}
    placeholder={placeholder}
    onChange={onChange}
  >
    {value}
  </textarea>
);

export
default TextArea;
