import './style.scss';
import PropTypes from 'prop-types';

//* composant Separator : élément HTML *section* réutilisable
//* avec un props className afin de pouvoir être stylisé spécifiquement
//* il y aura une classe de base (separator) avec un style commun à tous les separators
const Separator = ({ className }) => (
  <section className={`separator ${className}`} />
);

Separator.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Separator;
