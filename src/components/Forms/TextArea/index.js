import './style.scss';

const TextArea = ({
  className, placeholder, name, onChange,
}) => (
  <textarea name={name} className={`textarea ${className}`} placeholder={placeholder} />
);

export default TextArea;
