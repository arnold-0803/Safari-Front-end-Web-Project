import React from 'react'

function SubcribeButton() {
  return (
    <div className='absolute top-[101%] left-[50%] translate-x-[-50%] p-[10px]
     flex justify-center items-center'>
      <form className='flex bg-[#01959a] p-[30px] max-[340px]:flex-col gap-y-[10px]
        rounded-[15px]'>
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

export default SubcribeButton;
