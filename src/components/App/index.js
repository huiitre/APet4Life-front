// == Import
import './style.scss';
import AppHeader from 'src/components/AppHeader';
import AppFooter from 'src/components/AppFooter';
import Home from 'src/components/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDeptsFromApi, loadRegionsFromApi } from '../../store/actions/location';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(loadRegionsFromApi());
      dispatch(loadDeptsFromApi());
    },
    [],
  );
  return (
    <div className="app">
      <AppHeader />
      <Home />
      <AppFooter />
    </div>
  );
};

// == Export
export default App;
