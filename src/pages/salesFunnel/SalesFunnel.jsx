import { useState } from "react";
import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["top", " "],
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
  hAxis: { titleTextStyle: { color: "#ffffff" } },
  vAxis: { minValue: "0" },

  backgroundColor: "#ffffff",
  is3D: "no",
  chartArea: { width: "80%", height: "80%" },


};



const SalesFunnel = () => {

  return (
    <div className='xl:w-[1082px] flex xl:mt-[27px] md:mt-[30px] xl:mb-0 flex-col xl:flex-row  mt-[25px] '  >



      {/* sales funnel */}
      <div className=' relative  xl:w-[759px] w-[100%] xl:h-[334px] bg-[#ffffff]   border-2 border-solid border-[#ecedf6] shadow-[0_20px_50px_rgba(219,224,248,0.5)] rounded-[20px]'>


        <div className=' flex font-BOLD justify-between   px-8 xl:px-0'>

          <div className='mt-[12px]   xl:mt-[28px] xl:ml-[30px] xl:mr-[450px]  xl:w-[130px] '>
            <p className='xl:text-[22.4px] text-[12px] md:text-[18px] lg:text-[20px] font-[700] xl:w-auto '> Sales Funnel</p>

          </div>
          <div className=' mt-[12px] w-[80px] xl:w-[119px] xl:h-[37px] rounded-[12px] bg-[#f6f6f6] xl:mt-[28px] xl:mr-[30px] flex justify-center  items-center '>

            <p className='text-[12px] xl:text-[14px] xl:font-[700]  text-[#1a2b88]'>This Month</p>
            <img src="/images/down.svg" alt="" />

          </div>
        </div>

        {/* chart */}
        <div className=' w-[90%] ml-[7%] sm:ml-0 sm:w-auto sm:h-auto   xl:ml-[35px] mt-[29px]  xl:mb-[30px] md:ml-[20px] lg:ml-0 '>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="220px"
            data={data}
            options={options}
          />


        </div>

        <img src="/images/Line-red.png" alt="" className="absolute z-10 lg:left-[40.7%]    xl:block top-[39%] xl:left-[43.5%] md:left-[42.3%] sm:left-[40.5%] left-[43.3%]" />
        <div className=" absolute  z-10 rounded-[4px] md:top-[31%] top-[31%] lg:left-[37.5%] md:left-[39%] sm:left-[35%] left-[36%]  xl:left-[40%] xl:top-[34%] w-[55px] h-[19px] bg-[#1A2B88] xl:px-[8px] xl:py-[2px]  text-white xl:text-[12px] font-[400] ">
          <p className="font-BOLD  "> 83,234</p>
        </div>
        <img src="/images/arrowdoo.svg" alt="" className="absolute  z-20 lg:left-[39.5%] top-[36%]  sm:left-[38%] left-[40.2%]  md:top-[36%] md:left-[40.8%] xl:left-[41.9%] xl:top-[38.5%] " />

      </div>



      {/* devies category */}
      <div className='py-5 w-[100%] mt-[30px] xl:mt-0 mx-auto xl:mx-0 xl:h-[334px]  xl:w-[287px]  xl:bg-[#ffffff] xl:ml-[36px] border-2 border-solid border-[#ecedf6] shadow-[0_20px_50px_rgba(219,224,248,0.5)] rounded-[20px]' >

        {/* heading */}
        <p className=' w-[50%] mr-[75px] mx-auto  xl:mx-0 xl:text-[22.4px] xl:font-[700] font-BOLD xl:ml-[30px] xl:mt-[30px] xl:mr-[81px]  xl:w-[190px] '>Device Category</p>

        {/* mobile row */}
        <div className='flex justify-center items-center  xl:w-[215px] xl:h-[44px] xl:mt-[41px] md:mt-[30px] mt-[15px] xl:ml-[30px] xl:mr-[42px] '>

          <div className='flex justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px] w-[35px] h-[35px] rounded-[12.22px]  xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device1.svg" alt="" className=' xl:w-[19.2px] xl:h-[24px]  w-[15px] ' />
            </div>
            <div>
              <p className='xl:text-[16px] xl:font-[400] font-Regular  xl:text-center ml-[16px] xl:ml-0  '>Mobile</p>
            </div>

          </div>
          <div>
            <p className='xl:text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[47px]  ml-[16px]  '>96.42%</p>
          </div>

        </div>

        {/* desktop */}

        <div className='flex justify-center items-center md:ml-[5px]  xl:w-[215px] xl:h-[44px]  xl:ml-[30px] xl:mr-[42px] xl:my-[20px] md:my-[40px] my-[20px] '>

          <div className='flex  justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px] w-[35px] h-[35px] rounded-[12.22px]   xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device3.svg" alt="" className=' xl:w-[24px] xl:h-[24px] w-[16px]  ' />
            </div>
            <div>
              <p className='text-[16px] font-[400] font-Regular  text-center  ml-[16px] xl:ml-0  '>Desktop</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[47px]  ml-[16px]  '>2.76%</p>
          </div>

        </div>

        {/* tablet */}

        <div className=' mr-[10px]  flex justify-center items-center md:mr-[2px]  xl:w-[215px] xl:mb-[64px]  xl:h-[44px]  xl:ml-[30px] xl:mr-[42px] '>

          <div className='flex  justify-center items-center'>
            <div className='bg-[#F2F1FF] xl:w-[44px] xl:h-[44px] w-[35px] h-[35px] rounded-[12.22px]  xl:mr-[14px]  flex justify-center items-center '>
              <img src="/images/device2.png" alt="" className=' xl:w-[20px] xl:h-[20px] w-[15px] ' />
            </div>
            <div className="">
              <p className='text-[16px] font-[400] font-Regular text-center  ml-[16px] xl:ml-0 '>Tablet</p>
            </div>

          </div>
          <div>
            <p className='text-[18px] font-[700] font-BOLD text-[#1a2b88]  xl:ml-[55px]  ml-[16px]  '>0.82%</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SalesFunnel