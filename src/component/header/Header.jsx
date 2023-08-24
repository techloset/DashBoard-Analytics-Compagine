import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between  xl:w-[1082px] font-BOLD '>

        <div className='xl:text-[32px] xl:font-[700] xl:mt-[40px]  md:text-[30px] md:mt-[10px]' >Good Morning, Gavano !</div>
        <div className='xl:mt-[47.5px] '>
            <img src="/images/notification.svg" alt="" />
        </div>
    </div>
  )
}

export default Header