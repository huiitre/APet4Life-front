import './style.scss';
// import { useEffect } from 'react';
import Nav from 'src/components/AppHeader/Nav';
import Header from 'src/components/AppHeader/Header';
import Burger from 'src/components/AppHeader/Burger';

const AppHeader = () =>
// const state = {
//   width: 0,
// };
// function handleResize() {
//   state.width = window.innerWidth;
// }
// useEffect(
//   () => {
//     window.addEventListener('resize', handleResize);
//   },
// );

// console.log(state.width);

//* je stocke le résultat de la var "test" dans le state
//* ensuite, je récupère ce state et j'affiche le composant voulu selon certaines conditions

  (
    <header className="app-header">
      {/* {state.width > 600 && (
        <>
          <Header />
          <Nav />
        </>
      )}
      {state.width <= 600 && (
        <Burger />
      )} */}
      <Header />
      <Nav />
      <Burger />

    </header>
  );
export default AppHeader;
