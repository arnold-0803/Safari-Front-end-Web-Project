import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


function SwiperScreen({
  data,
  customClassName,
  slidesPerView=1,
  spaceBetween=20,
  breakPoints={},
  navigation,
  pagination,
  loop,
  autoplay,
}) {

  const destintions = data.places;

  return (
    <div>
      <Swiper
        className={customClassName}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakPoints={breakPoints}
        navigation={navigation}
        pagination={pagination ? {clickable:true} : false}
        loop={loop}
        autoplay={autoplay}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <ul>
          {destintions && (destintions.map(item => (
            <li key={item.id}>
              <SwiperSlide key={item.id}>
                <div>
                  <img src={item.image} alt={item.heading} />
                </div>
                <div>
                  <h3>
                    {item.heading}
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          )))}
        </ul>
      </Swiper>
    </div>
  )
}

export default SwiperScreen;
