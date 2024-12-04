import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Foofer';
import { useFavourite } from '../context/favourite-context-provider';
import Destinations from '../components/Destinations';

function FavouritePage({scrollToTop}) {

  const {favouriteItems} = useFavourite();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className='favourite'>
      <div>
        <Navbar/>
      </div>
      <div className='cards xl:pt-[8%] max-[1280px]:pt-[10%] 
        max-[952px]:pt-[12%] max-[772px]:pt-[16%] max-[728px]:pt-[20%]
        max-[511px]:pt-[24%] max-[430px]:pt-[28%] max-[370px]:pt-[32%]
        max-[310px]:pt-[36%] max-[260px]:pt-[50%]'>
        <h2 className='heading'>
          Favourite Items
        </h2>
        {favouriteItems.length > 0 ? (
          <Destinations 
            destinations={favouriteItems}
            only="only"
          />
          ) : (
            <p className='text-[#01959a] py-[40px]'>
              No items in the favourite
            </p>
          )
        }
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default FavouritePage;
