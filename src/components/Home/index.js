import './style.scss';

//* import composants
import Page from 'src/components/Page';
import MainCarousel from 'src/components/MainCarousel';
import FormSearch from 'src/components/Forms/FormSearch';
import Separator from 'src/components/Separator';

//* composant Home : page d'accueil recevant le composant Page (container)
const Home = () => (
  <Page>
    <section className="home__carousel">
      <MainCarousel />
    </section>
    <Separator className="home__separator" />
    <section className="home__search">
      <FormSearch />
    </section>
  </Page>
);

export default Home;
