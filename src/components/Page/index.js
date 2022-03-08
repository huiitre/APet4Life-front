import './style.scss';
import PropTypes from 'prop-types';

//* composant Page : container réutilisable avec un props children (style CSS : marge de 2 rem)
const Page = ({ children, className }) => (
  <main className={`page ${className}`}>
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
