import './style.scss';

//* composant TextArea : élément HTML *textarea* réutilisable via les props
// todo
const TextArea = ({
  className, placeholder, name, onChange, value,
}) => {

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <textarea
      name={name}
      className={`textarea ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  )
};

export
default TextArea;
