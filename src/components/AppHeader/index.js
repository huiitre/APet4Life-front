/* eslint-disable max-len */
import './style.scss';
//* on importe les composants Header et Nav car on en a besoin ici
import Header from 'src/components/AppHeader/Header';
import Nav from 'src/components/AppHeader/Nav';

//* AppHeader return automatiquement (avec les parenthèses ()) le html, avec le composants Header suivi de Nav
const AppHeader = () => (
  <header className="app-header">
    <Header />
    <Nav />
  </header>
);
export default AppHeader;
