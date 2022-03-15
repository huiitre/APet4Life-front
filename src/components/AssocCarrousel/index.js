import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import Swiper React components
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AssocCarrousel = ({ array }) => {
  return (
    <div className="assoc-carrousel">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="assoc-carrousel__mySwiper"
      >
        {array.map((item) => (
          <SwiperSlide>
            <img
              src={item.picture}
              alt={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AssocCarrousel;
