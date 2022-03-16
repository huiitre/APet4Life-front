import "./style.scss";
import Page from "src/components/Page";
import AssocList from "src/components/AssocList";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAllAssociationsFromApi } from "../../store/actions/associations";
import { useLocation } from "react-router";
import Spinner from 'src/components/Spinner';

const Associations = () => {
  //! possiblement inutile car le dispatch est déjà fait dans App
  const dispatch = useDispatch();
  useState(
    () => {
      console.log('appel de toute les associations');
      dispatch(setAllAssociationsFromApi());
    },
    [],
  );

  //* récupère la localisation actuelle de la page
  const location = useLocation();

  //* on récupère la liste de toute les associations
  const assocList = useSelector((state) => state.associations.allAssociations);

  //* on récupère le nombre d'associations depuis le tableau
  const count = assocList.length;

  //* on génère le message de résultat
  const countMessage = `${count} association${count >= 2 ? "s" : ""} au total`;
  
  const loading = useSelector((state) => state.associations.loading);

  return (
    <Page>
      {loading && <Spinner />}
      {!loading && (
        <section className="associations">
          <h2 className="result-message">{countMessage}</h2>
          <AssocList assocList={assocList} location={location.pathname} />
        </section>
      )}
    </Page>
  );
};

export default Associations;
