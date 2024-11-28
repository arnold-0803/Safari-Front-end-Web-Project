import  { useEffect, useState } from 'react';

export default function useFetch(url) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try{
        const res = await fetch(url);
        if(!res.ok){
          throw new Error(`HTTP error: Status:${res.status}`);
        }
        const result = await res.json();
        if(isMounted){
          setData(result);
        }
      }catch(err){
        if(isMounted){
          setError(err.message);
        }
      }finally{
        if(isMounted){
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    }
  }, [url]);
  return {data, loading, error}
}
