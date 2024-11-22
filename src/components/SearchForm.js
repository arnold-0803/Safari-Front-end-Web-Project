import React from 'react'

function SearchForm() {
  return (
    <div className="search-form flex justify-center items-center pb-1">
      <form className='relative w-[500px] flex justify-center 
        items-center'>
        <input className='w-[60%] h-[40px] outline-none border-[3px] px-3
          font-semibold rounded-[10px_0_0_10px]'
          type="text" placeholder='Search destination...'
        />
        <input className='w-[40%] h-[40px] bg-[#01959a] text-[#fff]
          font-bold rounded-[0_10px_10px_0] hover:bg-[#01959aad]'
          type="submit" value="search"
        />
      </form>
    </div>
  )
}

export default SearchForm;
