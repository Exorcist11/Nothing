import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full rounded-xl"
      >
        <SwiperSlide className="bg-white text-center">
          <img
            className="w-full h-1/2 object-cover bg-cover bg-center"
            src="https://images6.alphacoders.com/926/926723.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-white ">
          <img
            className="w-full h-full object-cover bg-cover bg-center"
            src="https://images7.alphacoders.com/928/928728.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
