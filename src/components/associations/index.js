import "./style.scss";
import Page from "src/components/Page";
import AssocList from "src/components/AssocList";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAllAssociationsFromApi } from "../../store/actions/associations";

const Associations = () => {
  const dispatch = useDispatch();
  useState(
    () => {
      console.log('appel de toute les associations');
      dispatch(setAllAssociationsFromApi());
    },
    [],
  );
  const assocList = useSelector((state) => state.associations.allAssociations);
  return (
    <Page>
      <section className="associations">
        <AssocList assocList={assocList} />
      </section>
    </Page>
  );
};

export default Associations;
