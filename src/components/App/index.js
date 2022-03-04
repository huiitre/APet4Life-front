/* eslint-disable max-len */
// == Import
import './style.scss';
import AppHeader from 'src/components/AppHeader';
import AppFooter from 'src/components/AppFooter';
import Assoc from 'src/components/Assoc';
import Home from 'src/components/Home';
import Spinner from 'src/components/Spinner';
import SearchResult from 'src/components/SearchResults';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDepartmentsFromApi, loadRegionsFromApi } from '../../store/actions/location';

// == Composant
const App = () => {
  //* on récupère useDispatch() de react-redux
  const dispatch = useDispatch();

  //* au tout premier rendu de la page, on charge les api des régions et des départements
  useEffect(
    () => {
      //* on effectue l'action grâce à la méthode associée (load...()) qui est dans le dossier store/actions/...
      dispatch(loadRegionsFromApi());
      dispatch(loadDepartmentsFromApi());
    },
    [],
  );
  return (
    <div className="app">
      {/* //* on affiche en premier le composant Appheader */}
      <AppHeader />
      {/* //* on déclare nos routes */}
      <Routes>
        {/* //* route accueil (url: /) */}
        <Route
          path="/"
          element={(
            <Home />
          )}
        />
        {/* //* route résultat de recherches (url: /search) */}
        <Route
          path="/search"
          element={(
            <SearchResult />
          )}
        />
        <Route
          path="/association/:slug"
          element={(
            <Assoc />
          )}
        />
        {/* <Route
          path="*"
          element={(
            //<Error /> créer composant error
          )}
        /> */}
      </Routes>
      {/* //* on affiche le composant AppFooter à la toute fin */}
      <AppFooter />

    </div>
  );
};

// == Export
export default App;
