import './style.scss';
// import React from 'react';

//* import composants
import Page from 'src/components/Page';
import FormSearch from 'src/components/Forms/FormSearch';
import Separator from 'src/components/Separator';
import AssocList from 'src/components/AssocList';

const SearchResult = () => (
  <Page>
    <section className="home__search">
      <FormSearch />
    </section>
    <Separator className="home_separator" />
    <section className="search__list">
      <h2 className="result-number">3 associations proches de toi</h2>
      <AssocList />
    </section>
  </Page>
);

export default SearchResult;
