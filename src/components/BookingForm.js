import React from 'react'

function BookingForm() {
  return (
    <div>
      <h1 className='text-[#01959a] text-[2rem] font-medium'>
        Book Now!
      </h1>
      <form className='flex justify-center items-center flex-col gap-[10px] p-[20px]'>
        <input className='w-[100%] h-[45px] bg-gray-100 px-2 hover:outline-[#01959a]'
          type="text" placeholder='enter full name' required
        />
        <input className='w-[100%] h-[45px] bg-gray-100 px-2 hover:outline-[#01959a]'
          type="email" placeholder='enter email' required
        />
        <input className='w-[100%] h-[45px] bg-gray-100 px-2 hover:outline-[#01959a]'
          type="tel" placeholder='Phone (+254)' required
        />
        <div className='flex gap-[8px] pt-3'>
          <input className='w-[100%] h-[45px] bg-gray-100 px-2 hover:outline-[#01959a]'
            type="date" required
          />
          <input className='w-[100%] h-[45px] bg-gray-100 px-2 hover:outline-[#01959a]'
            type="number" placeholder='day(s)' required
          />
        </div>
        <button className='w-[100%] bg-[#01959a] mt-[40px] py-[15px] text-[#fff] font-semibold text-[1.2rem]'>
          Book
        </button>
      </form>
    </div>
  )
}

export default BookingForm;
