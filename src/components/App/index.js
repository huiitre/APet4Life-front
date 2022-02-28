// == Import
import './style.scss';
import AppHeader from 'src/components/AppHeader';
import AppFooter from 'src/components/AppFooter';
import Home from 'src/components/Home';
import Button from 'src/components/Button';
import { Route, Routes } from 'react-router-dom';
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

      <Routes>
        <Route
          path="/"
          element={(
            <Home />
          )}
        />
        <Route
          path="/search"
          element={(
            <Button />
          )}
        />
        {/* <Route
          path="*"
          element={(
            //<Error /> créer composant error
          )}
        /> */}
      </Routes>

      <AppFooter />

    </div>
  );
};

// == Export
export default App;
