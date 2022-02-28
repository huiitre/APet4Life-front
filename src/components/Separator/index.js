import './style.scss';
import PropTypes from 'prop-types';

const Separator = ({ className }) => (
  <section className={className} />
);

Separator.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Separator;
