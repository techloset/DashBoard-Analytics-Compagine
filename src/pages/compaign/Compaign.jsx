import React from 'react'

const Compaign = () => {
  return (
    <div className=' flex flex-col xl:flex-row  xl:w-[1082px] mb-[20px] xl:mb-0 xl:flex xl:mt-[30px] mt-[30px] '>


      {/* compaign performance pannel */}
      <div className='xl:w-[759px] w-[100%] xl:h-[326px] h-[280px]  border-2 border-solid rounded-[20px] bg-[#ffffff] border-[#ecedf6] shadow-[0_20px_50px_rgba(219,224,248,0.5)]'>

        {/* heading */}

        <div className='  flex justify-between font-BOLD '>

          <div className='xl:text-[22.4px] font-[700] xl:mt-[30px] xl:ml-[30px] sm:mt-[30px] mt-[38px] ml-[25px] text-[13px]   sm:text-[16px]  '>Campaign Performance</div>

          <div className='flex justify-center items-center font-BOLD  xl:w-[80px] xl:h-[37px] bg-[#f6f6f6] mt-[27px]  mr-[33px] rounded-[12px]  w-[70px] h-[35px] '>
            <p className='xl:text-[14px] font-[700] text-[#1A2B88]  '>See All</p>
          </div>

        </div>

        {/* 2nd row */}
        <div className='text-[10px] sm:text-[16px] xl:font-Regular xl:flex  justify-evenly flex  xl:text-[16px] xl:font-[400] text-[#939393] '>

          <div className=' xl:ml-[30px] xl:mt-[27px] xl:mr-[183px]  mt-[27px] lg:mr-[183px]'>
            <p>Campaign</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[59px] mt-[27px] '>
            <p>Impressions</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[64px] mt-[27px] '>
            <p>Clicks</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[94px] mt-[27px] '>
            <p>CPC</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[49px] mt-[27px] '>
            <p>Spend</p>
          </div>

        </div>

        <img src="/images/Line-19.png" alt="" className='w-full xl:w-[696px] xl:mt-[18px] xl:ml-[30px] xl:mr-[33px] bg-black ' />
        {/* Google */}

        <div className='text-[10px] sm:text-[16px] xl:mt-[20px] mt-[20px] flex   xl:ml-[38px]   items-center justify-evenly    xl:text-[16px] font-[700] font-BOLD'>

          <div className='  xl:mr-[16px] lg:mr-[5px] lg:ml-[-10px] xl:ml-0  xl:w-[35px] xl:h-[35px]  rounded-[17.5px] bg-[#253174] shadow-3xc sm:w-[25px] sm:h-[25px] w-[18px] h-[18px] flex justify-center items-center'>
            <img src="/images/insta.svg" alt="" className='sm:w-[14px] w-[10px]  xl:w-auto' />
          </div>

          <div className=' xl:mr-[137px] lg:mr-[137px] lg:ml-[-40px] md:ml-[-40px] ml-[-10px] xl:ml-0'>
            <p className=' xl:w-[86px]  '>Google Ads</p>
          </div>

          <div className=' xl:mr-[97px] '>
            <p className=''>189k</p>
          </div>

          <div className='xl:mr-[74px] '>
            <p>9k</p>
          </div>

          <div className='xl:mr-[62px] '>
            <p>$8.12</p>
          </div>

          <div className=' xl:mr-[49px] '>
            <p>$56,123.12</p>
          </div>
        </div>

        {/* tiktok */}

        <div className='text-[10px] sm:text-[16px] flex items-center justify-evenly  xl:ml-[38px] xl:mt-[20px]  mt-[20px]  xl:text-[16px] font-[700] xl:font-BOLD  '>

          <div className='lg:ml-[-3px] md:ml-[4px] md:mr-[-35px] lg:mr-0  xl:mr-[16px] xl:w-[35px] xl:h-[35px] xl:ml-0 ml-[10px] sm:h-[25px] w-[18px] h-[18px]    rounded-[17.5px] bg-[#253174] shadow-3xc  sm:w-[25px] sm:h-[25px] flex justify-center items-center '>
            <img src="/images/tiktok.svg" alt="" className='sm:w-[14px] w-[10px] xl:w-auto' />
          </div>

          <div className=' xl:mr-[171px] lg:mr-[171px] md:ml-[0px] lg:ml-[-28px]  xl:w-[55px]   mr-[20px]   xl:ml-0 '>
            <p className='     '>Tik Tok</p>
          </div>

          <div className=' xl:mr-[93px]  '>
            <p >287k</p>
          </div>

          <div className=' xl:mr-[67px] '>
            <p>15k</p>
          </div>

          <div className=' xl:mr-[58px] '>
            <p>$12.12</p>
          </div>

          <div className=' xl:mr-[48px] '>
            <p>$40,123.12</p>
          </div>
        </div>

        {/* Insta */}

        <div className='   xl:flex xl:items-center mt-[20px] xl:ml-[38px]  xl:text-[16px] font-[700] font-BOLD hidden'>

          <div className=' xl:mr-[16px]  xl:w-[35px] xl:h-[35px] rounded-[17.5px] bg-[#253174] xl:flex xl:justify-center xl:items-center'>
            <img src="/images/google.svg" alt="" className='' />
          </div>

          <div className=' xl:mr-[148px]'>
            <p className='xl:w-[75px] w-[75px]'>Instagram</p>
          </div>

          <div className=' xl:mr-[94px] '>
            <p >156k</p>
          </div>

          <div className=' xl:mr-[70px]  '>
            <p>12k</p>
          </div>

          <div className=' xl:mr-[62px]  '>
            <p>$5.12</p>
          </div>

          <div className=' xl:mr-[50px]  '>
            <p>$39,123.12</p>
          </div>
        </div>






        {/* mobile insta */}

        <div className=' text-[10px] sm:text-[16px] xl:mt-[20px] mt-[20px] flex   xl:ml-[38px]   items-center justify-evenly    xl:text-[16px] font-[700] font-BOLD xl:hidden'>

          <div className='  xl:mr-[16px] lg:mr-[5px] lg:ml-[-6px] ml-[4px] xl:ml-0  xl:w-[35px] xl:h-[35px]  rounded-[17.5px] bg-[#253174] shadow-3xc sm:w-[25px] sm:h-[25px] sm:h-[25px] w-[18px] h-[18px]  flex justify-center items-center'>
            <img src="/images/google.svg" alt="" className='sm:w-[14px] w-[11px] xl:w-auto' />
          </div>

          <div className=' xl:mr-[137px] lg:mr-[155px] lg:ml-[-40px] mr-[10px] md:ml-[-40px] ml-[-10px] xl:ml-0'>
            <p className=' xl:w-[86px] '>Instagram</p>
          </div>

          <div className=' xl:mr-[97px] '>
            <p className=''>156k</p>
          </div>

          <div className='xl:mr-[74px] '>
            <p>12kk</p>
          </div>

          <div className='xl:mr-[62px] '>
            <p>$5.12</p>
          </div>

          <div className=' xl:mr-[49px] '>
            <p>$39,123.12</p>
          </div>
        </div>



      </div>


      {/* Top Countries  pannel*/}
      <div className='py-5 xl:py-0 w-[100%] mx-auto  mt-[30px] xl:mt-0 xl:h-[326px]  xl:w-[287px]  xl:ml-[36px] border-2 bg-[#ffffff] border-solid rounded-[20px] border-[#ecedf6] shadow-[0_20px_50px_rgba(219,224,248,0.5)]'>

        {/* heading */}
        <p className=' xl:text-[22.4px] text-[18px] font-[700] font-BOLD xl:ml-[30px] xl:mt-[30px] xl:mr-[111px] xl:w-[146px] xl:mx-0  w-[80%] flex justify-center items-center mx-auto '>Top Countries</p>

        {/* united states*/}
        <div className=' flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[30px] xl:mr-[42px] mt-[25px] '>

          <div className='flex justify-center items-center'>

            <div className=' mr-[15px]  xl:mr-[16px]  flex justify-center items-center '>
              <img src="/images/amrika.png" alt="" className=' xl:w-[49px] xl:h-[49px] w-[25px] h-[25px] ' />
            </div>

            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:w-93px   '>United State</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[20px] ml-[10px] '>48%</p>
          </div>

        </div>

        {/* united kingdom*/}
        <div className=' flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[18px] xl:ml-[30px] xl:mr-[42px] mt-[25px] '>

          <div className='flex justify-center items-center'>
            <div className=' mr-[15px]  xl:mr-[16px]  flex justify-center items-center '>
              <img src="/images/angrez.png" alt="" className=' xl:w-[49px] xl:h-[49px] w-[25px] h-[25px] ' />
            </div>
            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:w-[101px ]  '>United King...</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[16px] ml-[10px] '>12%</p>
          </div>

        </div>

        {/* swizerland states*/}
        <div className='hidden  xl:flex xl:justify-center xl:items-center  xl:w-[215px] xl:h-[49px] xl:mt-[18px] xl:ml-[30px] xl:mr-[42px] mt-[25px] '>

          <div className='flex justify-center items-center'>

            <div className='   xl:mr-[16px]  flex justify-center items-center xl:w-[49px] xl:h-[49px] w-[25px] h-[25px]  '>
              <img src="/images/sweat.png" alt="" className='  ' />
            </div>

            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:mx-0 xl:w-[89px] mx-[18px]  '>Switzerland</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[35px] ml-[10px] '>9%</p>
          </div>

        </div>


        {/* mobile swizerland */}


        <div className=' flex justify-center items-center   mt-[25px] xl:hidden'>

          <div className='flex justify-center items-center'>
            <div className=' mr-[15px]  xl:mr-[16px]  flex justify-center items-center '>
              <img src="/images/sweat.png" alt="" className='  w-[25px] h-[25px] ' />
            </div>
            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center   '>Switzerland</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[16px] ml-[30px] '>9%</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Compaign