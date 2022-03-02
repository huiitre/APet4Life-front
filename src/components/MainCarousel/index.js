import './style.scss';

//* import data temporaire pour les images
import pictures from 'src/data/pictures';
import carousel1 from 'src/assets/img/carousel1.jpg';
import carousel2 from 'src/assets/img/carousel2.jpg';
import carousel3 from 'src/assets/img/carousel3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectFade } from 'swiper';

//* composant MainCarousel : carousel principal de la page d'accueil
const MainCarousel = () => (
  <div className="swiper">
    <Swiper
      className="mySwipper"
      slidesPerView={1}
      spaceBetween={30}
      loop
      navigation
      effect="fade"
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Pagination, Navigation]}
    >
      {/* <SwiperSlide><img src="" alt="random" /></SwiperSlide> */}
      <SwiperSlide>
        <img className="swiper__img" src={carousel1} alt="carousel1" />
        <p className="swiper__content">Le site qui référence les associations animales dans ta région</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__img" src={carousel2} alt="carousel2" />
        <p className="swiper__content">Tu cherches à adopter un animal en particulier ?</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper__img" src={carousel3} alt="carousel3" />
        <p className="swiper__content">Le formulaire de recherche plus bas t'aidera à trouver l'association la plus proche de chez toi</p>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default MainCarousel;
