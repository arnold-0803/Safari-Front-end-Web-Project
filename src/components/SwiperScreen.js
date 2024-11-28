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
                  to={`/details/data1/${item.id}`}>
                <h3 className='text-[#fff] text-[1.5rem] font-extralight pt-[15px]'>
                  {item.heading}
                </h3>
                <p className='flex justify-center items-center px-[30px]
                  text-[#fff] text-start'>
                  {item.description.slice(0,60)}...
                </p>
                <div className='absolute bottom-0 pb-[16px]'>
                  <p className='text-start text-[#fff] px-[30px] text-[1.2rem]'>
                    <i className='fa-solid fa-location-dot'></i>
                    {item.location}
                  </p>
                  <ul className='w-full flex text-yellow-300 px-[30px]'>
                    {item.ratings.map((rating, idx) => (
                      <li key={idx}>
                        <i className={`${rating} inline-block`}></i>
                      </li>
                    ))}
                  </ul>
                </div>
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
