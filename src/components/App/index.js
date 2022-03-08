/* eslint-disable max-len */
// == Import
import './style.scss';

//* import components
import AppHeader from 'src/components/AppHeader';
import AppFooter from 'src/components/AppFooter';
import Assoc from 'src/components/Assoc';
import Home from 'src/components/Home';
import ProfilePage from 'src/components/ProfilePage';
import SearchResult from 'src/components/SearchResults';
import Error from 'src/components/Error';
import Signup from 'src/components/Signup';
import Associations from 'src/components/Associations';

//* import react reduc
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* import actions
import {
  loadDepartmentsFromApi,
  loadRegionsFromApi
} from '../../store/actions/location';
import {
  setCurrentUser,
} from '../../store/actions/user';
import {
  setAllAssociationsFromApi,
  setLoadingSpinner
} from '../../store/actions/associations';


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
      dispatch(setAllAssociationsFromApi());

      // const { data: stateData, token: stateToken } = useSelector((state) => state.user.currentUser);

      const userData = localStorage.getItem('userData');
      if (userData) {
        const JSuserData = JSON.parse(userData)
        dispatch(setCurrentUser('data', JSuserData));
        console.log(JSuserData);
      }
      
      const TOKEN = localStorage.getItem('TOKEN');
      if (TOKEN) {
        dispatch(setCurrentUser('token', TOKEN));
        console.log(TOKEN);
      }
    },
    [],
  );

  const { userLogged } = useSelector((state) => state.user)
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
        //* route vers la page de l'association (par son slug)
        <Route
          path="/association/:slug"
          element={(
            <Assoc />
          )}
        />
        {/* //* route vers le formulaire d'inscription */}
        <Route
          path="/inscription"
          element={(
            <Signup />
            // <ModalSuccess />
          )}
        />

        { userLogged && 
          <Route
            path="/profil"
            element={(
              <ProfilePage />
            )}
          />
        }

        <Route
          path="/associations"
          element={(
            <Associations />
          )}
        />

        <Route
          path="*"
          element={(
            <Error />
          )}
        />

      </Routes>
      {/* //* on affiche le composant AppFooter à la toute fin */}
      <AppFooter />

    </div>
  );
};

// == Export
export default App;
