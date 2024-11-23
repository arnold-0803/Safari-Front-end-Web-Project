import React from 'react'

function SubcribeButton() {
  return (
    <div className='absolute top-[101%] left-[50%] translate-x-[-50%] p-[10px]'>
      <form className='flex bg-[#01959a] p-[30px]'>
        <input type="email" placeholder='Enter email' required/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default SubcribeButton;
