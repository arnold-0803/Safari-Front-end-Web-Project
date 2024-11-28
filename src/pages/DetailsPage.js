import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import useFetch from '../components/useFetch';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  
  const {id, source} = useParams();
  const { data:data1 } = useFetch("/db/db.json");
  const {data:data2} = useFetch("/db/db2.json");
  const [detailsData, setDetailsData] = useState(null);

  useEffect(() => {
    if(data1 && data2){
      const allData = [
        ...(data1.places || []).map(item => ({...item, source: "data1"})),
        ...(data2.places || []).map(item => ({...item, source: "data2"}))
      ];
      console.log('All Data:', allData);
      const item = allData.find(destination => destination.id === Number(id) && destination.source === source);

      setDetailsData(item);
    }
  }, [data1, data2, id, source]);

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='pt-[100px]'>
        <h1 className='heading'>
          Destination Description
        </h1>
        <div>
          {detailsData && (<div>
            <img src={detailsData.image} alt="" />
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default DetailsPage;
