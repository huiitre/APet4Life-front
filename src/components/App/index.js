// == Import
import './style.scss';
import AppHeader from 'src/components/AppHeader';
import FormSearch from 'src/components/Forms/FormSearch';
import AppFooter from 'src/components/AppFooter';
import Home from 'src/components/Home';

// == Composant
const App = () => (
  <div className="app">
    <AppHeader />
    <Home />
    <FormSearch />
    <AppFooter />
  </div>
);

// == Export
export default App;
