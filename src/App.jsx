import React from 'react'
import SideBar from './component/sideBar/SideBar.jsx'
import Main from './pages/main/Main.jsx'

const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Main />
    </div>
  )
}

export default App