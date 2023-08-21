import React from 'react'

const Compaign = () => {
  return (
    <div className=' xl:w-[1082px] flex xl:mt-[30px] '>
      <div className='xl:w-[759px] xl:h-[334px] bg-orange-500'> sales pannel </div>


      {/* Top Countries */}
      <div className='xl:h-[326px]  xl:w-[287px]  xl:ml-[36px] border-2 border-solid rounded-[20px] border-[#ecedf6] shadow-2xs'>

        {/* heading */}
        <p className='text-[22.4px] font-[700] font-BOLD xl:ml-[30px] xl:mt-[30px] xl:mr-[111px] xl:w-[146px]  '>Top Countries</p>

        {/* united states*/}
        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[39px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>
            <div className='   xl:mr-[16px]  flex justify-center items-center '>
              <img src="/images/amrika.png" alt="" className=' xl:w-[49px] xl:h-[49px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:w-93px   '>United State</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[20px] '>48%</p>
          </div>

        </div>

        {/* united kingdom*/}
        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[39px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>
            <div className='   xl:mr-[16px]  flex justify-center items-center '>
              <img src="/images/angrez.png" alt="" className=' xl:w-[49px] xl:h-[49px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:w-[101px ]  '>United King...</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[16px] '>12%</p>
          </div>

        </div>

        {/* swizerland states*/}
        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[39px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>
            <div className='   xl:mr-[16px]  flex justify-center items-center '>
              <img src="/images/sweat.png" alt="" className=' xl:w-[49px] xl:h-[49px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:w-[89px]   '>Switzerland</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[35px] '>48%</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Compaign