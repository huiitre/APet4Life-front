// == Import
import './style.scss';
import AppHeader from 'src/components/AppHeader';

// == Composant
const App = () => (
  <div className="app">
    <AppHeader />
    <div className="main" />
    <footer />
  </div>
);

// == Export
export default App;
