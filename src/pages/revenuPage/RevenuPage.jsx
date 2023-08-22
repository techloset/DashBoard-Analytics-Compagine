import React from 'react'

const RevenuPage = () => {
  return (
    <div className='  bg-[#ffffff] flex font-Regular   xl:mt-[24px] xl:w-[1082px] xl:h-[169px] border-2 border-solid rounded-[20px] border-[#ecedf6] shadow-2xs'>


{/* 1st */}
      <div className=' xl:w-[211px] xl:h-[94px] xl:ml-[45px] xl:mr-[47px] xl:mt-[38px] xl:mb-[37px] '>

      <div className='xl:flex xl:justify-center xl:items-center'>
          <div className=' text-[16px] font-[400] '>Available to witdraw</div>

          <div className='xl:ml-[17px] xl:flex xl:items-center  xl:justify-center bg-[#f4f6f6] xl:w-[39px] xl:h-[15px] '>
            <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' text-[12px] font-[400]  '>10.0%</div>
          </div >
        </div>

        <p className='text-[28px] font-[700] text-[#1a2b88] font-BOLD '>$1,567.99</p>
        <p className=' text-[14px] font-[400] text-[#061148]'>Wed, Jul 20</p>

      </div>

{/* vertical line line */}
      <div className=' '>
        <img src="/images/Line-vertical.png" alt="" className='xl:mt-[39px]' />
      </div>

{/* 2nd  */}
      <div className='bxl:w-[169px] xl:h-[96px] xl:ml-[47px] xl:mr-[47px]  xl:mt-[36px] xl:mb-[37px]  '>

       
      <div className='xl:flex xl:justify-center xl:items-center'>
          <div className=' text-[16px] font-[400] '>Today Revenue</div>

          <div className='xl:ml-[17px] xl:flex xl:items-center  xl:justify-center bg-[#ff00001a] xl:w-[39px] xl:h-[15px] '>
            <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' text-[12px] font-[400] text-[#ff0000]  '>3.2%</div>
          </div >
        </div>

        <p className='text-[28px] font-[700] text-[#1a2b88] font-BOLD '> $2,868.99</p>
        <p className='text-[14px] font-[400] '>143 Orders</p>

      </div>

      {/* vertical line line */}
      <div className=' '>
        <img src="/images/Line-vertical.png" alt="" className='xl:mt-[39px]' />
      </div>

{/* 3rd */}
      <div className=' xl:w-[168px] xl:h-[96px] xl:ml-[47px] xl:mr-[47px]  xl:mt-[36px] xl:mb-[37px] '>

      <div className='xl:flex xl:justify-center xl:items-center'>
          <div className=' text-[16px] font-[400] '>Today Sessions</div>

          <div className='xl:ml-[17px] xl:flex xl:items-center  xl:justify-center bg-[#f4f6f6] xl:w-[39px] xl:h-[15px] '>
            <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' text-[12px] font-[400] text-[#3d37f1]  '>3.2%</div>
          </div >
        </div>

        <p className='text-[28px] font-[700] text-[#1a2b88] font-BOLD '>156k</p>
        <p className='text-[14px] font-[400] '>32k Visitors</p>

      </div>

      {/* vertical line line */}
      <div className=' '>
        <img src="/images/Line-vertical.png" alt="" className='xl:mt-[39px]' />
      </div>

{/* 4th */}
      <div className='   xl:w-[145px] xl:h-[96px] xl:ml-[47px] xl:mr-[66px] xl:mt-[36px] xl:mb-[37px]  '>

        <div className='xl:flex xl:justify-center xl:items-center'>
          <div className=' text-[16px] font-[400] '>Subscribers</div>

          <div className='xl:ml-[17px] xl:flex xl:items-center  xl:justify-center bg-[#f4f6f6] xl:w-[39px] xl:h-[15px] '>
            <img src="/images/arrowup.png" alt="" className='w-[10px] h-[10px] ' />

            <div className=' text-[12px] font-[400] text-[#3d37f1]  '>8.3%</div>
          </div>
        </div>



        <p className='text-[28px] font-[700] text-[#1a2b88] font-BOLD ' >3,422</p>
        <p className='text-[14px] font-[400] '>$34.28 Average Order</p>

      </div>

    </div>
  )
}

export default RevenuPage