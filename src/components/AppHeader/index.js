import './style.scss';
import Nav from 'src/components/AppHeader/Nav';
import Header from 'src/components/AppHeader/Header';

const AppHeader = () => (
  <header className="app-header">
    <Header />
    <Nav />
  </header>
);

export default AppHeader;
