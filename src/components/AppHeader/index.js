import './style.scss';
import Nav from 'src/components/AppHeader/Nav';
import Header from 'src/components/AppHeader/Header';

const AppHeader = () => (
  <header className="head">
    <Header />
    <Nav />
  </header>
);

export default AppHeader;
