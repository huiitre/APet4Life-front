import './style.scss';
import PropTypes from 'prop-types';

const Separator = ({ className }) => (
  <section className={`separator ${className}`} />
);

Separator.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Separator;
