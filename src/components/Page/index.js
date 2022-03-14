import './style.scss';
import PropTypes from 'prop-types';

//* imports react
import { useEffect } from "react";
import { useLocation } from "react-router";

//* composant Page : container réutilisable avec un props children (style CSS : marge de 2 rem)
const Page = ({ children, className }) => {

  //* à chaque fois que la location (page) change, on scroll en haut de page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
  <main className={`page ${className}`}>
    {children}
  </main>
  )
  };

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Page.defaultProps = {
  className: '',
}

export default Page;
