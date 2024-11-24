import React from 'react'

function SubcribeForm() {

  return (
    <div className='absolute top-[100.1%] left-[50%] translate-x-[-50%] pt-[10px]
     flex justify-center items-center'>
      <form className='flex bg-[#01959a] p-[15px] 
        rounded-[15px] text-[#01959a]'>
        <input className='max-[767px]:w-[200px] h-[35px] rounded-[5px] px-[3px]
          outline-none font-semibold'
          type="email" placeholder='Enter email' required
        />
        <input className='text-[#fff] font-bold px-[8px]'
          type="submit" value="submit"
        />
      </form>
    </div>
  )
}

export default SubcribeForm;
