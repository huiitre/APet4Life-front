import './style.scss';
import Header from 'src/components/AppHeader/Header';
import Nav from 'src/components/AppHeader/Nav';

// import { useEffect } from 'react';

const AppHeader = () => (
  <header className="app-header">
    <Header />
    <Nav />
  </header>
);
export default AppHeader;
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
