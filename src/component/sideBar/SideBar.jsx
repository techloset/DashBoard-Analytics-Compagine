import React from 'react'
// import React, { useState } from 'react'


const SideBar = () => {
    // const [navbar, setNavbar] = useState(false)
    return (
        <div className="xl:w-[266px] bg-blue-400">

            <div className=' items-center flex  xl:ml-[51px]  '>

                <div className=' xl:mt-[33px]'>
                    <img src="/images/icon.svg" alt="" />
                </div>

                <div className=' xl:text-[35.4px] text-[#001dc0] xl:mt-[37px] xl:ml-[8px] '>
                    <span className='font-Regular foont-[400]  xl:tracking-[0.35px]'> Ads </span>
                    <span className=' font-BOLD  font-[700] '> litics </span>

                </div>
            </div>


          <div className='xl:w-[231px]  xl:ml-[35px] xl:h-[557px] xl:mt-[56px] '>

          <ul className="    ">
                
               

              <div className=''>

               <li className=' flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px] hover:text-[#1a2b88] xl:text-[19px] font-[700]  hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
               <img src="/images/dashboard.png" alt="" className='w-[28px] h-[28px]' />
                   Dashboard
                </li>
             

                <li className='xl:mt-[20px] flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px]   hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
                <img src="/images/compaign.png" alt="" className='xl:ml-[-8px] w-[29px] h-[29px]' />
                    Compaign
                 </li>
               
                 <li className='xl:mt-[20px] flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700]  hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
                 <img src="/images/audience.png" alt="" className='xl:ml-[-10px] w-[28px] h-[28px]' />
                     Audience
                  </li>

                  <li className='xl:mt-[20px] flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700]  hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
               <img src="/images/performance.png" alt="" className='xl:ml-[21px] w-[28px] h-[28px]' />
                   performance
                </li>

                <li className='xl:mt-[20px] flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
               <img src="/images/like.png" alt="" className='xl:ml-[-15px] w-[30px] h-[30px]' />
                   Promote
                </li>


                <div className='xl:mt-[10px]'>
                    <img src="/images/line.png" alt="" className=' w-[231px]'/>
                </div>

                <li className='xl:mt-[20px] flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
               <img src="/images/profile.png" alt="" className='xl:ml-[-35px] w-[28px] h-[28px]' />
                   profile
                </li>
 
                <li className='xl:mt-[20px] flex justify-center items-center gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] border-1.36 border-solid ' >
               <img src="/images/setting.png" alt="" className='xl:ml-[-26px] w-[28px] h-[28px]' />
                   setting
                </li>
                </div>

{/* 
               <div className='xl:h-[61.6px] bg-violet-300 flex justify-center items-center' >


               </div>

               <div className='xl:h-[61.6px] bg-violet-400 flex justify-center items-center' >


               </div>

               <div className='xl:h-[61.6px] bg-violet-500 flex justify-center items-center' >

               

               </div>

               <div className='xl:h-[61.6px] bg-violet-600 flex justify-center items-center' >

               

               </div>

               <div className='xl:h-[61.6px] bg-violet-700 flex justify-center items-center' >

               

               </div>

               <div className='xl:h-[61.6px] bg-violet-800 flex justify-center items-center' >

              

               </div> */}

                

            </ul>
          </div>




































            {/* <button onClick={() => setNavbar(!navbar)} class="md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>

            {
                navbar ? (
                    <ul className="">
                        <li className="text-gray-600 hover:text-blue-600">

                            Dashboard

                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            compaign
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">

                            Audience

                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            performance
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            promote
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            profile
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            setting
                        </li>
                    </ul>
                ) : (
                    <p></p>
                )
            } */}


        </div>
    )
}

export default SideBar