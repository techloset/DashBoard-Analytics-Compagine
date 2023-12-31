import React from 'react'

const RevenuPage = () => {
  return (
    <div className=' w-[100%] mt-[30px]  mx-auto xl:mx-0  flex flex-col justify-around items-center  xl:flex-row  xl:bg-[#ffffff] xl:flex font-Regular   xl:mt-[24px] xl:w-[1082px] xl:h-[169px]  border-2 border-solid rounded-[20px] border-[#ecedf6] shadow-[0_20px_50px_rgba(219,224,248,0.5)]'>


      {/* 1st */}

      <div className='flex w-full mt-[10px] xl:mt-0   xl:static'>

        <div className=' w-[50%] inline py-4 xl:py-0  mb-[10px] xl-mb-0  xl:p-0  xl:w-[211px] xl:h-[94px] xl:ml-[45px] xl:mr-[47px] xl:mt-[38px] xl:mb-[37px] '>

          <div className='flex items-center  justify-center  '>
            <div className='text-[9px] sm:text-[11px] w-[109px] sm:w-auto  xl:text-[16px] font-[400] text-[#7d7d7d]  mx-3 xl:mx-0 '>Available to witdraw</div>

            <div className='    xl:ml-[13px] flex items-center justify-center xl:w-[54px] xl:h-[21px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px] '>
              <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

              <div className=' xl:text-[12px] font-[400]  sm:text-[12px] text-[10px]'>10.0%</div>
            </div >
          </div>

          <p className='xl:text-[28px] flex justify-center items-center xl:block font-[700] text-[#1a2b88] font-BOLD  sm:text-[22px] text-[15px]'>$1,567.99</p>
          <p className=' xl:text-[14px] flex justify-center items-center xl:block  font-[400] text-[#061148] font-Regular sm:text-[10px] text-[8px]'>Wed, Jul 20</p>

        </div>

        {/* vertical line line */}
        <div className=''>
          <img src="/images/Line-vertical.png" alt="" className=' xl:my-[39px] xl:h-[91px] md:mb-[10px] md:mt-[12px] md:h-[25px] hidden xl:block   ' />
        </div>

        {/* 2nd  */}
        <div className=' w-[50%] py-4 xl:py-0 mb-[10px] xl-mb-0  xl:p-0  xl:w-[169px] xl:h-[96px] xl:ml-[47px] xl:mr-[47px]  xl:mt-[36px] xl:mb-[37px]  '>


          <div className='flex items-center  justify-center  '>
            <div className='text-[9px] sm:text-[11px] xl:text-[16px] font-[400] xl:w-[107px]   md:text-[16px]  mx-3 xl:mx-0'>Today Revenue</div>

            <div className='md:w-[50px] xl:ml-[13px] flex items-center  justify-center  xl:w-[40px] xl:h-[15px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px]  '>
              <img src="/images/arrow-down.png" alt="" className='w-[10px] h-[10px] ' />

              <div className=' xl:text-[12px] font-[400] text-[#ff0000]  md:text-[10px] sm:text-[12px] text-[10px] '>3.2%</div>
            </div >
          </div>

          <p className='xl:text-[28px]  flex justify-center items-center xl:block font-[700] text-[#1a2b88] font-BOLD sm:text-[22px] text-[15px]'> $2,868.99</p>
          <p className='xl:text-[14px]  flex justify-center items-center xl:block font-[400] text-[#000000] sm:text-[10px] text-[8px]'>143 Orders</p>

        </div>

      </div>



    


      <div className='flex w-full  xl:static'>


        {/* vertical line line */}
        <div className=' '>
          <img src="/images/Line-vertical.png" alt="" className=' xl:my-[39px] xl:h-[91px] md:mb-[10px] md:mt-[12px] md:h-[25px] hidden xl:block ' />
        </div>

        {/* 3rd */}
        <div className='  mb-[10px] py-4 xl:py-0  w-[100%]  xl:p-0  xl:w-[168px] xl:h-[96px] xl:ml-[47px] xl:mr-[47px]  xl:mt-[36px] xl:mb-[37px] '>

          <div className='flex items-center  justify-center '>
            <div className='text-[9px] sm:text-[11px] xl:text-[16px] xl:w-[115px] font-[400] md:text-[16px]   mx-3 xl:mx-0 '>Today Sessions</div>

            <div className='w-[50px] xl:ml-[13px] flex items-center  justify-center  xl:w-[47px] xl:h-[21px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px]  '>
              <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

              <div className=' xl:text-[12px] font-[400] text-[#000000]   text-[10px]'>3.2%</div>
            </div >
          </div>

          <p className='xl:text-[28px]  flex justify-center items-center xl:block font-[700] text-[#1a2b88] font-BOLD sm:text-[22px] text-[15px]'>156k</p>
          <p className='xl:text-[14px]  flex justify-center items-center xl:block text-[#000000]  font-[400]  sm:text-[10px] text-[8px]'>32k Visitors</p>

        </div>

        {/* vertical line line */}
        <div className=' '>
          <img src="/images/Line-vertical.png" alt="" className='xl:my-[39px] xl:h-[91px] md:mb-[10px] md:mt-[12px] md:h-[25px] hidden xl:block ' />
        </div>

        {/* 4th */}
        <div className='  w-[100%] py-4 xl:py-0 mb-[10px] xl:p-0    xl:w-[145px] xl:h-[96px] xl:ml-[47px] xl:mr-[66px] xl:mt-[36px] xl:mb-[37px]  '>

          <div className='flex items-center  justify-center '>
            <div className='text-[9px] sm:text-[11px] xl:text-[16px] font-[400] md:text-[16px]  mx-3 xl:mx-0'>Subscribers</div>

            <div className='md:w-[50px] xl:ml-[13px] flex items-center justify-center  xl:w-[47px] xl:h-[21px] py-[3px] px-[4px] gap-[3px] bg-[#f4f6f6]  rounded-[50px]  '>
              <img src="/images/arrow-blue.png" alt="" className='w-[10px] h-[10px]  ' />

              <div className=' xl:text-[12px] font-[400] text-[#3d37f1]   text-[10px] '>8.3%</div>
            </div>

          </div>



          <p className='xl:text-[28px]  flex justify-center items-center xl:block font-[700] text-[#1a2b88] font-BOLD sm:text-[22px] text-[15px]' >3,422</p>
          <p className='xl:text-[14px] flex justify-center items-center xl:block  font-[400]  text-[#000000] sm:text-[10px] text-[8px]'>$34.28 Average Order</p>

        </div>

      </div>

    </div>
  )
}

export default RevenuPage