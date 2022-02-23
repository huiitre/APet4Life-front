import './style.scss';
import Header from 'src/components/AppHeader/Header';
import Nav from 'src/components/AppHeader/Nav';

// import { useEffect } from 'react';

const AppHeader = () => (
  <header className="app-header">
    <Header />
    <Nav />
  </header>
);
export default AppHeader;
