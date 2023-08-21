import React from 'react'
import Header from '../../component/header/Header'
import RevenuPage from '../revenuPage/RevenuPage'
import SalesFunnel from '../salesFunnel/SalesFunnel'
import Compaign from '../compaign/Compaign'

const Main = () => {
  return (
    <div className=' w-full xl:ml-[48px] '>

      <Header />
      <RevenuPage/>
      <SalesFunnel/>
      <Compaign/>

    </div>
  )
}

export default Main