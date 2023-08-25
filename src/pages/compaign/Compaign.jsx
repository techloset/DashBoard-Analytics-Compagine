import React from 'react'

const Compaign = () => {
  return (
    <div className=' xl:w-[1082px] flex xl:mt-[30px] '>


{/* compaign performance pannel */}
      <div className='xl:w-[759px] xl:h-[326px]  border-2 border-solid rounded-[20px] bg-[#ffffff] border-[#ecedf6] shadow-2xs'>

        {/* heading */}

        <div className='flex justify-between font-BOLD'>
         
          <div className='xl:text-[22.4px] font-[700] xl:mt-[30px] xl:ml-[30px]   '>Campaign Performance</div>
         
          <div className='flex justify-center items-center  xl:w-[80px] xl:h-[37px] bg-[#f6f6f6] xl:mt-[27px] xl:mr-[33px] '>
            <p className='xl:text-[14px] font-[700]  '>See All</p>
          </div>

        </div>

        {/* 2nd row */}
        <div className=' font-Regular flex xl:text-[16px] font-[400] text-[#939393] '>
         
          <div className=' xl:ml-[30px] xl:mt-[27px] xl:mr-[183px] '>
            <p>Campaign</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[59px]'>
            <p>Impressions</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[64px]'>
            <p>Clicks</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[94px]'>
            <p>CPC</p>
          </div>

          <div className='xl:mt-[27px] xl:mr-[49px]'>
            <p>Spend</p>
          </div>

        </div>

        <img src="/images/Line-19.png" alt="" className='xl:w-[696px] xl:mt-[18px] xl:ml-[30px] xl:mr-[33px] '/>
        {/* Google */}

        <div className='xl:mt-[20px] flex  xl:ml-[38px]  items-center     xl:text-[16px] font-[700] font-BOLD'>

          <div className='  xl:mr-[16px] xl:w-[35px] xl:h-[35px] rounded-[17.5px] bg-[#253174] shadow-3xc flex justify-center items-center'>
            <img src="/images/insta.svg" alt="" />
          </div>

          <div className=' xl:mr-[137px] '>
            <p className=' xl:w-[86px]'>Google Ads</p>
          </div>

          <div className=' xl:mr-[97px]'>
            <p className=''>189k</p>
          </div>

          <div className='xl:mr-[74px]'>
            <p>9k</p>
          </div>

          <div className='xl:mr-[62px]'>
            <p>$8.12</p>
          </div>

          <div className=' xl:mr-[49px]'>
            <p>$56,123.12</p>
          </div>
        </div>

        {/* tiktok */}

        <div className=' flex items-center xl:ml-[38px] xl:mt-[20px]  xl:text-[16px] font-[700] font-BOLD '>

          <div className='  xl:w-[35px] xl:h-[35px]   rounded-[17.5px] bg-[#253174] shadow-3xc flex justify-center items-center'>
            <img src="/images/tiktok.svg" alt="" className='w-[17.5px] h-[20px] '/>
          </div>

          <div className=' xl:mr-[171px] xl:ml-[16px]'>
            <p className='xl:w-[51px] xl:h-[19px]'>Tik Tok</p>
          </div>

          <div className=' xl:mr-[93px]'>
            <p >287k</p>
          </div>

          <div className=' xl:mr-[67px]'>
            <p>15k</p>
          </div>

          <div className=' xl:mr-[58px]'>
            <p>$12.12</p>
          </div>

          <div className=' xl:mr-[48px]'>
            <p>$40,123.12</p>
          </div>
        </div>

        {/* Insta */}

        <div className='flex items-center xl:mt-[20px] xl:ml-[38px]  xl:text-[16px] font-[700] font-BOLD '>

          <div className='  xl:mr-[16px] xl:w-[35px] xl:h-[35px] rounded-[17.5px] bg-[#253174] shadow-3xc flex justify-center items-center'>
            <img src="/images/google.svg" alt="" />
          </div>

          <div className=' xl:mr-[148px] '>
            <p className='xl:w-[75px]'>Instagram</p>
          </div>

          <div className=' xl:mr-[94px]'>
            <p >156k</p>
          </div>

          <div className=' xl:mr-[70px]'>
            <p>12k</p>
          </div>

          <div className=' xl:mr-[62px]'>
            <p>$5.12</p>
          </div>

          <div className=' xl:mr-[50px]'>
            <p>$39,123.12</p>
          </div>
        </div>


      </div>


      {/* Top Countries  pannel*/}
      <div className='xl:h-[326px]  xl:w-[287px]  xl:ml-[36px] border-2 bg-[#ffffff] border-solid rounded-[20px] border-[#ecedf6] shadow-2xs'>

        {/* heading */}
        <p className='text-[22.4px] font-[700] font-BOLD xl:ml-[30px] xl:mt-[30px] xl:mr-[111px] xl:w-[146px]  '>Top Countries</p>

        {/* united states*/}
        <div className=' flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[39px] xl:mr-[42px] '>

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
        <div className=' flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[39px] xl:mr-[42px] '>

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
        <div className=' flex justify-center items-center  xl:w-[215px] xl:h-[49px] xl:mt-[27px] xl:ml-[39px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>

            <div className='   xl:mr-[16px]  flex justify-center items-center xl:w-[49px] xl:h-[49px]  '>
              <img src="/images/sweat.png" alt="" className='  ' />
            </div>

            <div>
              <p className='text-[16px] font-[700] font-BOLD  text-center xl:w-[89px]   '>Switzerland</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[35px] '>9%</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Compaign