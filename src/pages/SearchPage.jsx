import React from 'react';
import Navbar from "../components/Navbar";
import useFetch from '../components/useFetch';
import { useLocation } from 'react-router-dom';
import Destinations from '../components/Destinations';

function SearchPage() {
const {data, loading, error} = useFetch("/db/db.json");
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const lowercasedQuery = query.toLowerCase().trim();

  const destinations = data.places || [];
  const filteredDestinations = destinations.filter(item =>
    item.heading.toLowerCase().includes(lowercasedQuery)
  );

  if (loading) 
    return <p className='text-[#01959a] mt-[20%] text-[2rem] font-thin'>Loading...</p>;
  
  if (error) 
    return <p className='text-[#01959a] mt-[20%] text-[2rem] font-thin'>Error: {error}</p>;
  
  return (
    <div className='search'>
      <div>
        <Navbar/>
      </div>
      <div className='cards xl:pt-[8%] max-[1280px]:pt-[10%] 
        max-[952px]:pt-[12%] max-[772px]:pt-[16%] max-[728px]:pt-[20%]
        max-[511px]:pt-[24%] max-[430px]:pt-[28%] max-[370px]:pt-[32%]
        max-[310px]:pt-[36%] max-[260px]:pt-[50%]'>
          <h2 className='heading'>
            Searched Destination(s)
          </h2>
          <p className='text-[1.3rem] text-[#01959a]'>
            ({filteredDestinations.length})
          </p>
        <div>
          {filteredDestinations.length > 0 ? (
            <Destinations destinations={filteredDestinations}/>
          ) : (
            <p className='mt-[5%] flex justify-center items-center text-[1.5rem]'>
              No result found
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage;
