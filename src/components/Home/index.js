import './style.scss';

//* import composants
import Page from 'src/components/Page';
import MainCarousel from 'src/components/MainCarousel';
import FormSearch from 'src/components/Forms/FormSearch';
import Separator from 'src/components/Separator';

//* import react
import { useRef } from 'react';

//* composant Home : page d'accueil recevant le composant Page (container)
const Home = () => {

  //* hook de react
  const refSearch = useRef(null);

  //* scroll au formulaire de recherche quand clic sur chevron
  const handleClick = () => {
    window.scrollTo(0, refSearch.current.offsetTop)
  }

  return (
  <Page>
    <section className="home__carousel">
    <div className="home__carousel-filter"></div>
      <MainCarousel />
    </section>
    <section className="home__description">
        <p className="home__description-intro">
        <span>A Pet 4 Life</span> : Le site qui référence les associations animales dans votre région</p><br/>
        <p>
        Vous cherchez à adopter un animal en particulier ?
        </p><br/>
        <p>
        Le <span>formulaire de recherche</span> plus bas vous aidera à trouver une association proche de chez vous
        </p><br/>
        <p
          className="home__description-chevron"
          onClick={handleClick}
        >&#8964;</p>
    </section>
    <Separator className="home__separator" />
    <section className="home__search" ref={refSearch}>
      <FormSearch />
    </section>
  </Page>
  )
};

export default Home;
