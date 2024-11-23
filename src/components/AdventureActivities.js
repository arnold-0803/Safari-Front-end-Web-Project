import React from 'react';

const activitiesData = [
  {
    id: 0,
    icon: "fa-solid fa-person-hiking",
    heading: "Activities",
    activities: ["swimming", "Dance", "Hiking"]
  },
  {
    id: 1,
    icon: "fa-solid fa-burger",
    heading: "Healthy Rich Food",
    activities: ["Cost effective foods", "World's delicacies", "Healthy foods"]
  },
  {
    id: 2,
    icon: "fa-solid fa-compass",
    heading: "Tools & Equipments",
    activities: ["Compass & Map", "Dance", "Hiking"]
  }
];

function AdventureActivities() {
  return (
    <div className='bg-[#01959a91] p-[0_30px_20px] w-full'>
      <h1 className='mb-[80px] md:text-[3rem] max-[767px]:text-[1.5rem] text-[#fff] font-thin'>
        Adventure Overview
      </h1>
      <div className='bg-[#01959a] pb-[20px]'>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] bg-[#01959a]
          gap-[1.5rem] gap-y-[5rem] lg:px-[150px] max-[1024px]:px-[20px]'>
          {activitiesData.map(item => (
            <li className='list-card p-[15px] mt-[-50px] bg-[whitesmoke] rounded-[20px]' 
              key={item.id}>
              <div className='flex flex-col items-center'>
                <i className={`${item.icon} w-[80px] h-[80px] flex bg-[#01959a]
                  justify-center items-center md:text-[3rem] text-[#fff] rounded-[50px]
                  max-[767px]:text-[1.5rem] max-[767px]:w-[50px] max-[767px]:h-[50px]`}></i>
                <h4 className='text-[1.1rem] font-extrabold text-[#01959a]'>
                  {item.heading}
                </h4>
              </div>
              <ul className='list-inside px-[20px]'>
                {item.activities.map((activity, idx) => (
                  <li className='text-start marker:content-["★"] marker:text-[1.1rem] 
                    marker:text-[#01959aa4] font-semibold text-[#01959a]'
                    key={idx}>
                    {activity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdventureActivities;
