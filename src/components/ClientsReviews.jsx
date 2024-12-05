import React, { useRef } from 'react'

function ClientsReviews({reviewsData}) {

  const scrollContainerRef = useRef(null);

  const handleDrag = (e) => {
    const container = scrollContainerRef.current;
    container.scrollLeft -= e.movementX;
  };

  return (
    <div className='reviews'>
      <div className='xl:px-[60px] max-[1279px]:px-[15px] py-[30px]'>
        <h1 className='heading'>
          What Our Clients Are Saying
        </h1>
        <ul className='flex gap-[20px] overflow-x-scroll sroll-b pb-[10px] pt-[20px]'
          ref={scrollContainerRef}
          onMouseMove={(e) => {if(e.buttons === 1) handleDrag(e)}}>
          {reviewsData.map(review => (
            <li className='border-[2px] flex max-[527px]:flex-col max-[481px]:w-[250px]
              min-[481px]:p-[15px] max-[481px]:pt-[15px] gap-[1rem] gap-y-0'
              key={review.id}>
              <div className='flex-1 max-[481px]:px-[15px]'>
                <div className='w-[100px] h-[100px] rounded-[50px] overflow-hidden border-l-[7px]
                  border-l-[#01959a]'>
                  <img className='w-full h-full'
                    src={review.image} alt={review.name}
                  />
                </div>
                <h3 className='pt-[8px] text-[#01959a9c] font-semibold text-[1.2rem]'>
                  {review.name}
                </h3>
              </div>
              <div className='flex-1'>
                <p className='min-[481px]:min-w-[350px] max-[481px]:w-[250px]
                  max-[481px]:px-[15px] max-[481px]:pb-[15px] text-gray-500'>
                  <i className='fa-solid fa-quote-left text-[1.5rem] text-[#01959a]'></i>
                  {review.testimony}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClientsReviews;