import './style.scss';

//* import composants
import Page from 'src/components/Page';
import MainCarousel from 'src/components/MainCarousel';
import FormSearch from 'src/components/Forms/FormSearch';
import Separator from 'src/components/Separator';

const Home = () => (
  <Page>
    <section className="home__carousel">
      <MainCarousel />
    </section>
    <Separator />
    <section className="home__search">
      <FormSearch />
    </section>
  </Page>
);

export default Home;
