// import React from 'react'
import React, { useState } from 'react'


const SideBar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className="xl:w-[266px]   ">



            {/* logo and Name */}
            <div className=' xl:items-center xl:flex  xl:ml-[51px] xl:mt-[33px]  hidden'>

                <div className=' '>
                    <img src="/images/icon.svg" alt="" />
                </div>

                <div className=' xl:text-[35.4px] text-[#001dc0]  xl:ml-[8px]  '>
                    <span className='font-Regular xl:font-[400]    xl:tracking-[0.35px]'> Ads </span>
                    <span className=' font-BOLD xl:font-[700] xl:ml-[-5px] '> litics </span>

                </div>
            </div>


            {/* side bar content */}
            <div className='xl:w-[231px]  xl:ml-[35px] xl:h-[557px] xl:mt-[56px] hidden xl:block  font-Regular'>

                <ul className="    ">

                    <div className=''>

                        <li className=' xl:flex xl:items-center xl:gap-2 xl:h-[61.6px]  xl:mx-auto hover:text-[#1a2b88] xl:text-[19px] xl:font-[700]  hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] xl:border-1.36 xl:border-solid border-[#efeeeb] ' >
                            <img src="/images/dashboard.png" alt="" className='xl:w-[28.43px] xl:h-[28.43px] xl:ml-[33.17px] ' />
                            Dashboard
                        </li>


                        <li className=' xl:mt-[20px] xl:flex  xl:items-center xl:gap-2 xl:mx-auto xl:h-[61.6px]   hover:bg-white hover:text-[#1a2b88] xl:text-[19px] xl:font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] xl:border-1.36 xl:border-solid ' >
                            <img src="/images/compaign.png" alt="" className=' xl:w-[29px] xl:h-[29px] xl:ml-[33.17px]' />
                            Compaign
                        </li>

                        <li className='xl:mt-[20px] xl:flex  xl:items-center xl:gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] xl:font-[700]  hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb] xl:border-1.36 xl:border-solid ' >
                            <img src="/images/audience.png" alt="" className='xl:ml-[33.17px] xl:w-[28px] xl:h-[28px]' />
                            Audience
                        </li>

                        <li className='xl:mt-[20px] xl:flex  xl:items-center xl:gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700]  hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb] xl:border-1.36 xl:border-solid ' >
                            <img src="/images/performance.png" alt="" className='xl:ml-[33.17px] xl:w-[28.43px] xl:h-[28.43px]' />
                            performance
                        </li>

                        <li className='xl:mt-[20px] xl:flex  xl:items-center xl:gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb] xl:border-1.36 xl:border-solid ' >
                            <img src="/images/like.png" alt="" className='xl:ml-[33.17px] xl:w-[30px] xl:h-[30px]' />
                            Promote
                        </li>


                        <div className='xl:mt-[10px]'>
                            <img src="/images/line.png" alt="" className=' xl:w-[231px]' />
                        </div>

                        <li className='xl:mt-[20px] xl:flex  xl:items-center xl:gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb] xl:border-1.36 xl:border-solid ' >
                            <img src="/images/profile.png" alt="" className='xl:ml-[33.17px] w-[27.1px] h-[27.1px]' />
                            Profile
                        </li>

                        <li className='xl:mt-[20px] xl:flex  xl:items-center xl:gap-2 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] xl:text-[19px] font-[700] hover:xl:shadow-3xl  xl:rounded-2xl  xl:hover:bg-[#ffffff] xl:border-1.36 xl:border-solid ' >
                            <img src="/images/setting.png" alt="" className='xl:ml-[33.17px] xl:w-[27.1px] xl:h-[27.1px]' />
                            Setting
                        </li>
                    </div>
                </ul>
            </div>


            {/* avatar */}
            <div className='xl:flex xl:w-[190px] xl:h-[40px] xl:mt-[240.06px] xl:ml-[61px] xl:mb-[44px]  hidden'>

                <div className='xl:w-[40px] xl:h-[40px] '>
                    <img src="/images/imagee.png" alt="" />
                </div>
                <div className=' xl:font-BOLD xl:flex xl:items-center xl:ml-[16px]'>
                    <p className='xl:text-[18px] font-[700]  '>Gavano</p>
                </div>
                <div className='xl:flex xl:justify-center xl:items-center xl:w-[30.54] xl:h-[30.54]  xl:ml-[38px]'>
                    <img src="/images/more.svg" alt="" />
                </div>

            </div>

























            <div className=' lg:hidden w-[25%] '>


                {/* onClick={() => setNavbar(!navbar)} */}

                <img src='/images/icon.svg' onClick={() => setNavbar(!navbar)} class=" hover:bg-blue-300 ml-[50px] mt-[20px] " />
                {
                    navbar ? (

                        <div className=' translate-x-[10%]   '>
                            <ul className="    ">

                                <div className=''>

                                    <li className='w-[150px] mt-[20px]  flex justify-center items-center gap-1.5 mx-auto h-[30.6px] hover:text-[#1a2b88] hover:bg-white text-[14px] font-[700]  hover:shadow-3xl  rounded-2xl   border-1.6 border-solid ' >
                                        <img src="/images/dashboard.png" alt="" className='w-[18px] h-[18px]' />
                                        Dashboard
                                    </li>


                                    <li className='w-[150px]  mt-[20px] flex justify-center items-center gap-1.5 mx-auto h-[40.6px]   hover:bg-white hover:text-[#1a2b88] text-[14px] font-[700] hover:shadow-3xl  rounded-2xl   border-1.36 border-solid ' >
                                        <img src="/images/compaign.png" alt="" className='ml-[-8px] w-[19px] h-[19px]' />
                                        Compaign
                                    </li>

                                    <li className='w-[150px] mt-[20px] flex justify-center items-center gap-1.5 mx-auto h-[30.6px]  hover:bg-white hover:text-[#1a2b88] text-[14px] font-[700]  hover:shadow-3xl  rounded-2xl   border-1.36 border-solid ' >
                                        <img src="/images/audience.png" alt="" className='ml-[-10px] w-[18px] h-[18px]' />
                                        Audience
                                    </li>

                                    <li className='w-[150px] mt-[20px] flex justify-center items-center gap-1.5 mx-auto h-[30.6px]  hover:bg-white hover:text-[#1a2b88] text-[14px] font-[700]  hover:shadow-3xl  rounded-2xl   border-1.36 border-solid ' >
                                        <img src="/images/performance.png" alt="" className='ml-[11px] w-[18px] h-[28px]' />
                                        performance
                                    </li>

                                    <li className='w-[150px] mt-[20px] flex justify-center items-center gap-1.5 mx-auto h-[30.6px]  hover:bg-white hover:text-[#1a2b88] text-[14px] font-[700] hover:shadow-3xl  rounded-2xl  border-1.36 border-solid ' >
                                        <img src="/images/like.png" alt="" className='ml-[-15px] w-[20px] h-[20px]' />
                                        Promote
                                    </li>


                                    <div className='w-[150px] mt-[10px] ml-[20px]'>
                                        <img src="/images/line.png" alt="" className=' w-[231px]' />
                                    </div>

                                    <li className='w-[150px] mt-[20px] flex justify-center items-center gap-1.5 mx-auto h-[30.6px]  hover:bg-white hover:text-[#1a2b88] text-[14px] font-[700] hover:shadow-3xl  rounded-2xl   border-1.36 border-solid ' >
                                        <img src="/images/profile.png" alt="" className='ml-[-35px] w-[18px] h-[18px]' />
                                        profile
                                    </li>

                                    <li className='w-[150px] mt-[20px] flex justify-center items-center gap-1.5 mx-auto h-[30.6px]  hover:bg-white hover:text-[#1a2b88] text-[14px] font-[700] hover:shadow-3xl  rounded-2xl  border-1.36 border-solid ' >
                                        <img src="/images/setting.png" alt="" className='ml-[-26px] w-[18px] h-[18px]' />
                                        setting
                                    </li>
                                </div>
                            </ul>
                            <button onClick={() => setNavbar(!navbar)} className='w-[70px] mt-[10px] flex justify-center items-center m-auto bg-red-500 hover:bg-green-300'>close</button>
                        </div>

                    ) : (
                        <p></p>
                    )
                }

            </div>
        </div>
    )
}

export default SideBar