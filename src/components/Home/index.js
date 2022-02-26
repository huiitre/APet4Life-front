import './style.scss';

//* import composants
import Page from 'src/components/Page';
import MainCarousel from 'src/components/MainCarousel';
import { Input } from 'semantic-ui-react';

const Home = () => (
  <Page>
    <section className="home__carousel">
      <MainCarousel />
    </section>
    <section>
      <p>
        Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright ! Sun is shining bright !
      </p>
    </section>
  </Page>
);

export default Home;
