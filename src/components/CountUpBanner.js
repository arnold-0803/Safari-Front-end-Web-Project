import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import banner from "../images/Travel-Banner.png";

const Counter = ({data}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <i className={data.prefix}></i>
      {inView && <CountUp
        start={0}
        end={1000}
        duration={3}
        suffix={data.suffix} 
      />}
    </div>
  );
};



function CountUpBanner({countUpData}) {
  return (
    <div className='bg-[#01959aa6] lg:p-[20px_120px] sm:h-[60vh] max-[639px]:h-[100vh] 
      relative'>
      <div className='relative h-full'>
        <img className='w-full h-full object-cover'
          src={banner} alt={banner}
        />
        <div className='absolute top-0 left-0 w-full h-full'>
          <h2 className='heading'>
            Milestone Achieved
          </h2>
          <ul className='text-start flex flex-wrap justify-between items-center'>
            {countUpData.map(item => (
              <li className='md:text-[2rem] font-bold text-[#fff]'
                key={item.id}>
                <Counter data={item}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CountUpBanner;
