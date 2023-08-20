import React, { useState } from 'react'


const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div class='bg-blue-500'>
            
            <div className='bg-red-500'>
            <nav className="w-full bg-blue-500 shadow ">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">

                                <div className="lg:col-span-3 my-auto sm:col-span-6">
                                   <img src='/images/icon.svg' alt="sdjfkla" />
                                </div>

                                <div className="">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                           <img src='/images/icon.svg' />
                                        ) : (
                                            <img src='/images/notification.svg' />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-gray-600 hover:text-blue-600">
                                        
                                            Home
                                        
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        About Us
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                       
                                            Blog
                                       
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                       Blog Content
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header