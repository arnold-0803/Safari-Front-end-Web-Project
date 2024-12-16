import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import useFetch from '../components/useFetch';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Foofer';
import { useFavourite } from '../context/favourite-context-provider';

function DetailsPage() {
  
  const {id, source} = useParams();
  const { data:data1 } = useFetch("/db/db1.json");
  const {data:data2} = useFetch("/db/db2.json");
  const {data:data3} = useFetch("/db/db3.json");
  const [detailsData, setDetailsData] = useState(null);
  const {favouriteItems, addToFavourites, removeFromFavourites} = useFavourite();

  useEffect(() => {
    if(data1 && data2 && data3){
      const allData = [
        ...(data1.places || []).map(item => ({...item, source: "data1"})),
        ...(data2.places || []).map(item => ({...item, source: "data2"})),
        ...(data3.places || []).map(item => ({...item, source: "data3"}))
      ];

      const item = allData.find(destination => destination.id === Number(id) && destination.source === source);

      setDetailsData(item);
    }
  }, [data1, data2, data3, id, source]);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  const isFavourite = detailsData ? favouriteItems.some(item => item.id === detailsData.id && 
    item.source === detailsData.source) : false;

  const handleAddRemoveFavourite = (event) => {
    event.preventDefault();
    if(isFavourite){
      removeFromFavourites(detailsData.id, detailsData.source);
    }else{
      addToFavourites({...detailsData, source: detailsData.source});
    }
  }

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='pt-[100px]'>
        <h1 className='heading'>
          Destination Description
        </h1>
        <div className='xl:px-[160px] max-[1279px]:px-[15px]'>
          {detailsData && 
            <>
              <div className='flex justify-center items-center border-[2px] p-[20px] gap-[2rem]
                max-[600px]:flex-col'>
                <div className="flex-1">
                  <div className='relative'>
                    <img className='w-full rounded-[5px]'
                      src={detailsData.image} alt={detailsData.heading}
                    />
                    <i className={`fa-solid fa-heart absolute top-3 right-3 text-[1.4rem]
                      cursor-pointer ${isFavourite ? "text-red-400" : "text-[#fff]"}`}
                      onClick={handleAddRemoveFavourite}></i>
                  </div>
                  <div className='text-start'>
                    <h3 className='md:text-[2.2rem] font-extralight text-[#01959a]'>
                      {detailsData.heading}
                    </h3>
                    <p className="text-[#01959a] font-semibold text-[1.1rem]">Rating
                      {detailsData.ratings.map((rating, idx) => (
                        <i className={`${rating} ml-[5px] text-yellow-300`} key={idx}></i>
                      ))}
                    </p>
                    <p className="text-[#01959a7c] font-semibold text-[1.1rem]">
                      <i className='fa-solid fa-location-dot mr-[5px] text-[#01959a]'></i>
                      {detailsData.location}
                    </p>
                    <p className="text-[#01959a7c] font-semibold text-[1.1rem]">
                      <i className='fa-solid fa-hourglass-end mr-[5px] text-[#01959a]'></i>
                      {detailsData.days} Day(s)
                    </p>
                    <p className="text-[#01959a] font-semibold md:text-[1.8rem]
                      max-[767px]:text-[1.3rem]">Payment:
                      <span className='ml-[5px] text-[#01959a7c]'>
                        Kes {detailsData.price}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <BookingForm/>
                </div>
              </div>
              <div className='pt-[20px]'>
                <p className='border-[2px] p-[15px] text-gray-500 shadow-lg'>
                  {detailsData.description}
                </p>
              </div>
            </>
          }
        </div>
      </div>
      <div className='mt-[30px]'>
        <Footer/>
      </div>
    </div>
  )
}

export default DetailsPage;
