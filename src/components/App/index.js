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
import Signin from 'src/components/Signin';
import Associations from 'src/components/Associations';
import ContactUs from 'src/components/ContactUs';

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
import Adopted from '../Adopted';


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

      //! en commentaire car on préfère faire l'appel directement depuis la page /associations
      // dispatch(setAllAssociationsFromApi());

      // const { data: stateData, token: stateToken } = useSelector((state) => state.user.currentUser);

      const userData = localStorage.getItem('userData');
      if (userData) {
        const JSuserData = JSON.parse(userData)
        dispatch(setCurrentUser('data', JSuserData));
      }
      
      const TOKEN = localStorage.getItem('TOKEN');
      if (TOKEN) {
        dispatch(setCurrentUser('token', TOKEN));
      }

      const roleUser = localStorage.getItem('roleUser');
      if (roleUser) {
        dispatch(setCurrentUser('roleUser', roleUser));
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
        {/* //* route vers la page de connexion (mobile only) */}
        <Route
          path="/connexion"
          element={(
            <Signin />
            // <ModalSuccess />
          )}
        />

        {/* //* route vers la page de profil seulement si user connecté */}
        { userLogged && 
          <Route
            path="/profil"
            element={(
              <ProfilePage />
            )}
          />
        }

        {/* //* route vers la liste des associations */}
        <Route
          path="/associations"
          element={(
            <Associations />
          )}
        />

        {/* //* route vers la page des animaux adoptés */}
        <Route
          path="/adoptes"
          element={(
            <Adopted />
          )}
        />

        {/* //* route vers la page de contact */}
        <Route
          path="/contact"
          element={(
            <ContactUs />
          )}
        />

        {/* //* route vers la 404 */}
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
