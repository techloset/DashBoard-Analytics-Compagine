import React from 'react'

const RevenuPage = () => {
  return (
    <div className='bg-orange-500 w-[50%] mt-[30px]  mx-auto  flex flex-col justify-around items-center  xl:flex-row  xl:bg-[#ffffff] xl:flex font-Regular   xl:mt-[24px] xl:w-[1082px] xl:h-[169px]  border-2 border-solid rounded-[20px] border-[#ecedf6] shadow-[0_20px_50px_rgba(219,224,248,0.5)]'>


      {/* 1st */}
      <div className='bg-green-500 w-[80%]   xl:p-0  xl:w-[211px] xl:h-[94px] xl:ml-[45px] xl:mr-[47px] xl:mt-[38px] xl:mb-[37px] '>

        <div className='flex items-center  md:justify-center  '>
          <div className='text-[11px] xl:text-[16px] xl:font-[400] text-[#7d7d7d]  mx-3 lg:mx-0'>Available to witdraw</div>

          <div className='    xl:ml-[13px] flex items-center justify-center xl:w-[54px] xl:h-[21px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px] '>
            <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' xl:text-[12px] font-[400]  md:text-[10px] lg:text-[12px]'>10.0%</div>
          </div >
        </div>

        <p className='xl:text-[28px] md:flex md:justify-center md:items-center xl:block font-[700] text-[#1a2b88] font-BOLD  md:text-[22px]'>$1,567.99</p>
        <p className=' xl:text-[14px] md:flex md:justify-center md:items-center xl:block  font-[400] text-[#061148] font-Regular md:text-[10px]'>Wed, Jul 20</p>

      </div>

      {/* vertical line line */}
      <div className=' '>
        <img src="/images/Line-vertical.png" alt="" className='xl:my-[39px] xl:h-[91px] md:mb-[10px] md:mt-[12px] md:h-[25px]  ' />
      </div>

      {/* 2nd  */}
      <div className='  md:w-[80%]  xl:p-0  xl:w-[169px] xl:h-[96px] xl:ml-[47px] xl:mr-[47px]  xl:mt-[36px] xl:mb-[37px]  '>


        <div className='flex items-center  md:justify-center  '>
          <div className=' xl:text-[16px] font-[400] xl:w-[107px]  text-[11px]  md:mx-3 lg:mx-0'>Today Revenue</div>

          <div className='md:w-[50px] xl:ml-[13px] flex items-center  justify-center  xl:w-[40px] xl:h-[15px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px]  '>
            <img src="/images/arrow-down.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' xl:text-[12px] font-[400] text-[#ff0000]  md:text-[10px] lg:text-[12px]'>3.2%</div>
          </div >
        </div>

        <p className='xl:text-[28px]  md:flex md:justify-center md:items-center xl:block font-[700] text-[#1a2b88] font-BOLD md:text-[22px]'> $2,868.99</p>
        <p className='xl:text-[14px]  md:flex md:justify-center md:items-center xl:block font-[400] md:text-[10px] text-[#000000]'>143 Orders</p>

      </div>

      {/* vertical line line */}
      <div className=' '>
        <img src="/images/Line-vertical.png" alt="" className='xl:my-[39px] xl:h-[91px] md:mb-[10px] md:mt-[12px] md:h-[25px]' />
      </div>

      {/* 3rd */}
      <div className='  md:mb-[10px]  md:w-[80%]  xl:p-0  xl:w-[168px] xl:h-[96px] xl:ml-[47px] xl:mr-[47px]  xl:mt-[36px] xl:mb-[37px] '>

        <div className='flex items-center  md:justify-center '>
          <div className=' xl:text-[16px] font-[400] text-[11px]  md:mx-3 lg:mx-0'>Today Sessions</div>

          <div className='md:w-[50px] xl:ml-[13px] flex items-center  justify-center  xl:w-[47px] xl:h-[21px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px]  '>
            <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' xl:text-[12px] font-[400] text-[#000000]   md:text-[10px]'>3.2%</div>
          </div >
        </div>

        <p className='text-[28px]  md:flex md:justify-center md:items-center xl:block font-[700] text-[#1a2b88] font-BOLD md:text-[22px]'>156k</p>
        <p className='xl:text-[14px]  md:flex md:justify-center md:items-center xl:block text-[#000000]  font-[400]  md:text-[10px]'>32k Visitors</p>

      </div>

      {/* vertical line line */}
      <div className=' '>
        <img src="/images/Line-vertical.png" alt="" className='xl:my-[39px] xl:h-[91px] md:mb-[10px] md:mt-[12px] md:h-[25px]' />
      </div>

      {/* 4th */}
      <div className='  md:w-[80%]  xl:p-0    xl:w-[145px] xl:h-[96px] xl:ml-[47px] xl:mr-[66px] xl:mt-[36px] xl:mb-[37px]  '>

        <div className='flex items-center  md:justify-center '>
          <div className=' xl:text-[16px] font-[400] text-[11px] md:mx-3 lg:mx-0'>Subscribers</div>

          <div className='md:w-[50px] xl:ml-[13px] flex items-center justify-center  xl:w-[47px] xl:h-[21px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px]  '>
            <img src="/images/arrow-blue.png" alt="" className='w-[10px] h-[10px]  ' />

            <div className=' xl:text-[12px] font-[400] text-[#3d37f1]   md:text-[10px] '>8.3%</div>
          </div>

        </div>



        <p className='text-[28px]  md:flex md:justify-center md:items-center xl:block font-[700] text-[#1a2b88] font-BOLD md:text-[22px] ' >3,422</p>
        <p className='xl:text-[14px] md:flex md:justify-center md:items-center xl:block  font-[400] md:text-[10px] text-[#000000] '>$34.28 Average Order</p>

      </div>

    </div>
  )
}

export default RevenuPage