import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import banner from "../images/Travel-Banner.png";

const Counter = ({data}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      
      {inView && <CountUp
        start={0}
        end={data.end}
        duration={3}
        suffix={data.suffix} 
      />}
    </div>
  );
};



function CountUpBanner({countUpData}) {
  return (
    <div className='count-up-banner bg-[#01959aa6] xl:p-[20px_120px] sm:h-[40vh]
      max-[639px]:h-[50vh] max-[1279px]:p-[20px_8px] relative'>
      <div className='relative h-full'>
        <img className='w-full h-full object-cover object-fit shadow shadow-[0_0_10px_10px_rgba(0,0,0,0.2)]
          rounded-[8px]'
          src={banner} alt={banner}
        />
        <div className='absolute top-0 left-0 w-full h-full'>
          <h2 className='heading'>
            Milestone Achieved
          </h2>
          <ul className='text-start flex flex-wrap justify-between items-center
            h-full px-3 pb-[100px] gap-y-[20px]'>
            {countUpData.map(item => (
              <li className='md:text-[2rem] max-[767px]:text-[1.5rem] font-light text-[#fff]'
                key={item.id}>
                <div className='flex justify-center items-center gap-1'>
                  <i className={`${item.prefix} block bg-[#fff] text-[#01959a] p-[6px]
                    rounded-[10px]`}></i>
                  <Counter data={item}/>
                </div>
                <p className='md:text-[1.5rem] max-[767px]:text-[1.2rem] font-semibold'>
                  {item.heading}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CountUpBanner;
