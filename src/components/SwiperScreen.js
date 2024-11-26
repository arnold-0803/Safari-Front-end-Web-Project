import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function SwiperScreen({
  data,
  customClassName,
  slidesPerView=1,
  spaceBetween=20,
  breakpoints={},
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
        breakpoints={breakpoints}
        navigation={navigation}
        pagination={pagination ? {clickable:true} : false}
        loop={loop}
        autoplay={autoplay}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <ul>
          {destintions && (destintions.map(item => (
            <SwiperSlide className='swiper-slide'
              key={item.id}
            >
              <div className='image-wrapper'>
                <img className='w-full h-full'
                  src={item.image} alt={item.heading}
                />
              </div>
              <div className='content-wrapper'>
                <Link className='block w-full h-full'
                  to={"/"}>
                <h3 className='text-[#fff] text-[1.5rem] font-extralight pt-[30px]'>
                  {item.heading}
                </h3>
                <p className='flex justify-center items-center px-[10px]
                  text-[#fff]'>
                  {item.description.slice(0,100)}
                </p>
                </Link>
              </div>
            </SwiperSlide>
          )))}
        </ul>
      </Swiper>
    </div>
  )
}

export default SwiperScreen;
