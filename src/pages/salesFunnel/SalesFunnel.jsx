import { useState } from "react";
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
  hAxis: { titleTextStyle: { color: "#3D37F133" } },
  vAxis: { minValue: "0" },
  
  backgroundColor: "#3D37F133",
  is3D: "no",
  chartArea: { width: "80%", height: "80%" },

  
};






const SalesFunnel = () => {

  return (
    <div className='xl:w-[1082px] flex xl:mt-[27px] md:mt-[30px] xl:mb-0 md:flex-col lg:flex-row  '  >



{/* sales funnel */}
      <div className='  xl:w-[759px] w-[100%] xl:h-[334px] bg-[#ffffff]   border-2 border-solid border-[#ecedf6] shadow-2xs rounded-[20px]'> 
      

      <div className='flex font-BOLD  md:justify-between'>

        <div className='md:mt-[12px]  ml-[30px] xl:mt-[28px] md:mr-[220px] xl:mr-[450px]  xl:w-[130px]'>
          <p className='xl:text-[22.4px] font-[700] '> Sales Funnel</p>

        </div>
        <div className='md:mr-[20px] md:w-[110px] xl:w-[119px] h-[37px] rounded-[12px] bg-[#f6f6f6] xl:mt-[28px] md:mt-[10px] xl:mr-[30px] flex justify-center  items-center '>
          
          <p className='md:text-[12px] xl:text-[14px] xl:font-[700]  text-[#1a2b88]'>This Month</p> 
          <img src="/images/down.svg" alt="" />
          
        </div>
      </div>

{/* chart */}
      <div className='xl:ml-[35px] mt-[25px]  xl:mb-[30px] md:ml-[20px] lg:ml-0 '>
        <img src="/images/Line-red.png" alt="" className="absolute z-10 ml-[293px] xl:mt-[35px]"/>
      <Chart
      chartType="AreaChart"
      width="100%"
      height="220px"
      data={data}
      options={options}
    />
      </div>
      
      
      </div>



      {/* devies category */}
      <div className='w-[50%] mt-[30px] xl:mt-0 mx-auto xl:mx-0 xl:h-[334px]  xl:w-[287px]  xl:bg-[#ffffff] xl:ml-[36px] border-2 border-solid border-[#ecedf6] shadow-2xs rounded-[20px]' >

        {/* heading */}
        <p className=' w-[50%] mr-[75px] mx-auto xl:w-auto xl:mx-0 xl:text-[22.4px] xl:font-[700] font-BOLD xl:ml-[30px] xl:mt-[30px] xl:mr-[81px]  md:mt-[20px]'>Device Category</p>

        {/* mobile row */}
        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[44px] xl:mt-[41px] md:mt-[30px] xl:ml-[30px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px]   xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device1.svg" alt="" className=' xl:w-[19.2px] xl:h-[24px]  md:w-[15px] ' />
            </div>
            <div>
              <p className='xl:text-[16px] xl:font-[400] font-Regular  xl:text-center   '>Mobile</p>
            </div>

          </div>
          <div>
            <p className='xl:text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[47px] '>96.42%</p>
          </div>

        </div>

        {/* desktop */}

        <div className='flex justify-center items-center md:ml-[5px]  xl:w-[215px] xl:h-[44px]  xl:ml-[30px] xl:mr-[42px] xl:my-[20px] md:my-[40px]'>

          <div className='flex  justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px]   xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device2.png" alt="" className=' xl:w-[24px] xl:h-[24px] md:w-[16px]  ' />
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

        <div className='flex justify-center items-center md:mr-[2px]  xl:w-[215px] xl:mb-[64px]  xl:h-[44px]  xl:ml-[30px] xl:mr-[42px] '>

          <div className='flex  justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px]  xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device3.svg" alt="" className=' xl:w-[20px] xl:h-[20px] md:w-[20px] ' />
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