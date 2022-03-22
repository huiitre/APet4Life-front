//* import npm
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/store';

//* import du composant de base : App
import App from 'src/components/App';

//* élément racine permettant d'utiliser le routage de react et le store de redux
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

//* on récupère la div root du fichier HTML
const target = document.getElementById('root');

//* on rend notre élément racine dans le HTML
reactDom.render(rootReactElement, target);
