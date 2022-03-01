import './style.scss';
// import React from 'react';

//* import composants
import Page from 'src/components/Page';
import FormSearch from 'src/components/Forms/FormSearch';
import Separator from 'src/components/Separator';
import AssocList from 'src/components/AssocList';
import { useSelector } from 'react-redux';

const SearchResult = () => {
  const assocList = useSelector((state) => state.associations.assocList);
  const count = assocList.length;
  const countMessage = `${count} association${count >= 2 ? 's' : ''} proche${count >= 2 ? 's' : ''} de chez toi`;
  console.log(assocList);
  return (
    <Page>
      <section className="home__search">
        <FormSearch />
      </section>
      <Separator className="home_separator" />
      <section className="search__list">
        <h2 className="result-number">{countMessage}</h2>
        <AssocList assocList={assocList} />
      </section>
    </Page>
  );
};

export default SearchResult;
