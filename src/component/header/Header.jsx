import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between  xl:w-[1082px] bg-pink-500 '>

        <div className='text-[36px] bg-cyan-50 xl:mt-[40px] '>Good Morning, Gavano !</div>
        <div className='bg-blue-500 xl:mt-[47.5px] '>
            <img src="/images/notification.svg" alt="" />
        </div>
    </div>
  )
}

export default Header