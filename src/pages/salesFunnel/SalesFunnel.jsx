import React from 'react'

const SalesFunnel = () => {
  return (
    <div className='xl:w-[1082px] flex xl:mt-[27px]  '  >
      <div className='xl:w-[759px] xl:h-[334px] bg-gray-500'> sales pannel </div>



      {/* devies category */}
      <div className='xl:h-[334px]  xl:w-[287px] bg-white xl:ml-[36px] border-2 border-solid border-[#ecedf6] shadow-2xs rounded-[20px]' >

        {/* heading */}
        <p className='text-[22.4px] font-[700] font-BOLD xl:ml-[30px] xl:mt-[30px] xl:mr-[81px]  '>Device Category</p>

        {/* mobile row */}
        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[44px] xl:mt-[41px] xl:ml-[30px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px]   xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device1.svg" alt="" className=' xl:w-[19.2px] xl:h-[24px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[400] font-Regular  text-center   '>Mobile</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[47px] '>96.42%</p>
          </div>

        </div>

        {/* desktop */}

        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[44px]  xl:ml-[30px] xl:mr-[42px] xl:my-[20px]'>

          <div className='flex  justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px]   xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device2.png" alt="" className=' xl:w-[24px] xl:h-[24px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[400] font-Regular  text-center   '>Desktop</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[47px]  '>2.76%</p>
          </div>

        </div>

        {/* tablet */}

        <div className='flex justify-center items-center  xl:w-[215px] xl:mb-[64px]  xl:h-[44px]  xl:ml-[30px] xl:mr-[42px] '>

          <div className='flex  justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px]  xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device3.svg" alt="" className=' xl:w-[20px] xl:h-[20px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[400] font-Regular text-center '>Tablet</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[55px]  '>0.82%</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SalesFunnel