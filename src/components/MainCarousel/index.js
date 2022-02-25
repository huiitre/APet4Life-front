import './style.scss';

//* import data temporaire pour les images
import pictures from 'src/data/pictures';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const MainCarousel = () => (
  <div className="swiper-div">
    <Swiper
      className="mySwipper2 swiper-v"
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {/* <SwiperSlide><img src="" alt="random" /></SwiperSlide> */}
      {pictures.map((item) => (
        <SwiperSlide>
          <img src={item} alt="random" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default MainCarousel;
