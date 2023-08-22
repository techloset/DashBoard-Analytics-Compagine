import React from 'react'
import { Chart } from "react-google-charts";


export const data = [
  ["top ", " "],
  ["10", 42000],
  ["11", 42000],
  ["12", 62000],
  ["14", 42000],
  ["15", 56000],
  ["16", 82000],
  ["17", 44000],
  ["18", 46000],
  ["19", 65000],
  ["20", 63000],
  ["21", 46000],
  ["22", 61000],
  ["23", 48000],
  ["24", 60000]
];

export const options = {
  // title: "Sales Funnel",
  // hAxis: { titleTextStyle: { color: "#3D37F133" } },
  vAxis: { minValue: "100000" },
  
  // backgroundColor: "#3D37F133",
  // is3D: "no",
  chartArea: { width: "80%", height: "80%" }
};

const SalesFunnel = () => {
  return (
    <div className='xl:w-[1082px] flex xl:mt-[27px]  '  >

      <div className='xl:w-[759px] xl:h-[334px] bg-[#ffffff]   border-2 border-solid border-[#ecedf6] shadow-2xs rounded-[20px]'> 
      

      <div className='flex font-BOLD'>
        <div className='xl:ml-[30px] xl:mt-[28px] xl:mr-[450px]  xl:w-[130px]'>
          <p className='text-[22.4px] font-[700] '> Sales Funnel</p>
        </div>
        <div className='xl:w-[119px] xl:h-[37px] rounded-[12px] bg-[#f6f6f6] xl:mt-[28px] xl:mr-[30px] flex justify-center items-center '>
          <p className='xl:text-[14px] font-[700]  text-[#1a2b88]'>This Month</p> 
          <img src="/images/down.svg" alt="" />
        </div>
      </div>

      <div className='xl:ml-[35px] mt-[25px]  xl:mb-[30px] '>
      <Chart
      chartType="AreaChart"
      // width="100%"
      height="210px"
      data={data}
      options={options}
    />
      </div>
      
      
      </div>



      {/* devies category */}
      <div className='xl:h-[334px]  xl:w-[287px] bg-[#ffffff] xl:ml-[36px] border-2 border-solid border-[#ecedf6] shadow-2xs rounded-[20px]' >

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