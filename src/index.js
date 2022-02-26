//* import npm
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/store';

//* import composants
import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const target = document.getElementById('root');

reactDom.render(rootReactElement, target);
