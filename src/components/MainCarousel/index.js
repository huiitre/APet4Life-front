import './style.scss';

//* import data temporaire pour les images
import pictures from 'src/data/pictures';
import carousel1 from 'src/assets/img/carousel-1.jpg';
import carousel2 from 'src/assets/img/carousel-2.jpg';
import carousel3 from 'src/assets/img/carousel-3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';

//* composant MainCarousel : carousel principal de la page d'accueil
const MainCarousel = () => (
  <div className="swiper">
    <Swiper
      className="mySwipper"
      slidesPerView={1}
      spaceBetween={30}
      loop
      // navigation //* à rajouter pour flèches
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: false, //* à enlever pour flèches
        // clickable: true, //* à rajouter pour flèches
      }}
      modules={[EffectFade, Pagination, Autoplay]} //* à enlever pour flèches
      // modules={[EffectFade, Pagination, Navigation, Autoplay]} //* à rajouter pour flèches
    >
      {/* <SwiperSlide><img src="" alt="random" /></SwiperSlide> */}
      <SwiperSlide>
        <img className="swiper__img" src={carousel1} alt="carousel1" />
        <p className="swiper__content">Le site qui référence les associations animales dans votre région</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__img" src={carousel2} alt="carousel2" />
        <p className="swiper__content">Vous cherchez à adopter un animal en particulier ?</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__img" src={carousel3} alt="carousel3" />
        <p className="swiper__content">Le formulaire de recherche plus bas vous aidera à trouver une association proche de chez vous</p>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default MainCarousel;
