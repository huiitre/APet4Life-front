import "./style.scss";
// import React from 'react';

//* import composants
import Page from "src/components/Page";
import FormSearch from "src/components/Forms/FormSearch";
import Separator from "src/components/Separator";
import AssocList from "src/components/AssocList";
import Spinner from "src/components/Spinner";

//* import gérant les hooks de react
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

//* composant SearchResult : page des résultats
//* incluant le formulaire de recherche et la liste de résultats
const SearchResult = () => {
  const location = useLocation();

  //* on récupère la liste des associations depuis le state
  const assocList = useSelector((state) => state.associations.assocList);

  //* on récupère l'état du spinner dans le state
  const loading = useSelector((state) => state.associations.loading);

  //* on compte le nombre de résultats
  const count = assocList.length;

  //* on génère le message de résultat
  const countMessage = `${count} association${count >= 2 ? "s" : ""} proche${count >= 2 ? "s" : ""} de chez toi`;

  return (
    <Page>
      <section className="home__search">
        <FormSearch />
      </section>
      <Separator className="home_separator" />
      {loading && <Spinner />}
      {!loading && (
        <>
          <section className="search__list">
            <h2 className="result-number">{countMessage}</h2>
            {/* si il y a 1 résultat ou +, on affiche le composant assocList (liste des résultats) */}
            {/* opérateur && servant ici à l'affichage conditionnel */}
            {/* s'affiche si la condition count > 0 est true */}
            {count > 0 && <AssocList assocList={assocList} location={location.pathname} />}
          </section>
        </>
      )}
    </Page>
  );
};

export default SearchResult;
