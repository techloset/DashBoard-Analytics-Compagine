import React from 'react'
import Header from '../../component/header/Header'
import RevenuPage from '../revenuPage/RevenuPage'
import SalesFunnel from '../salesFunnel/SalesFunnel'
import Compaign from '../compaign/Compaign'

const Main = () => {
  return (
    <div className=' xl:w-full xl:ml-[48px]   md:w-[70%] ml-[15px] sm:ml-[25px] md:ml-[15px] sm:w-[65%] w-[58%] lg:mr-0 lg:w-[72%] '>

      <Header />
      <RevenuPage/>
      <SalesFunnel/>
      <Compaign/>

    </div>
  )
}

export default Main