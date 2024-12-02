import React from 'react'
import { Link } from 'react-router-dom';
import { useFavourite } from '../context/favourite-context-provider';

function FavouriteButton() {

  const {favouriteItems} = useFavourite();

  return (
    <span className='sm:absolute right-[2%] bottom-[2px] p-[0_10px_0_25px]'>
      <Link to={"/favourite"}>
        <i className='fa-solid fa-heart relative text-[1.5rem] text-[#01959ad8]'>
          <span className='absolute top-[-40%] inline w-[20px] h-[20px] bg-red-500 
            text-[#fff] font-normal rounded-[50px] right-[-10px] flex justify-center
            items-center text-[1rem]'>
            {favouriteItems.length}
          </span>
        </i>
      </Link>
    </span>
  )
}

export default FavouriteButton;