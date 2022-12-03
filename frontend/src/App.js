import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import AddUser from './Components/AddUser'
import ProfileCardContainer from './Components/ProfileCardContainer'
import Footer from './Components/Footer'

function App(){
  return (
    <div>
      <Navbar />
      <div className='main-section flex'>
        <ProfileCardContainer />
        <AddUser />
      </div>
      <div className='spacer'></div>
    </div>
  )
}

export default App