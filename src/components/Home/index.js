import './style.scss';
import Page from 'src/components/Page';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

//* import data temporaire pour les images
import pictures from 'src/data/pictures';

const Home = () => (
  <Page>
    <section>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <SwiperSlide><img src="" alt="random" /></SwiperSlide> */}
        {
          pictures.map(
            (item) => <SwiperSlide><img src={item} alt="random" /></SwiperSlide>,
          )
        }
      </Swiper>
    </section>
    <section>
      <p>
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ? salut ça va ?
        salut ça va ? salut ça va ? salut ça va ? salut ça va ?
      </p>
    </section>
  </Page>
);

export default Home;
