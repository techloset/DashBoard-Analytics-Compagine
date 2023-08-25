import React from 'react'
import Header from '../../component/header/Header'
import RevenuPage from '../revenuPage/RevenuPage'
import SalesFunnel from '../salesFunnel/SalesFunnel'
import Compaign from '../compaign/Compaign'

const Main = () => {
  return (
    <div className=' xl:w-full xl:ml-[48px]  w-[75%] md:ml-[48px]'>

      <Header />
      <RevenuPage/>
      <SalesFunnel/>
      <Compaign/>

    </div>
  )
}

export default Main