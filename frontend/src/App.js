import React, { useEffect , useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import AddUser from './components/addUsers/AddUser'
import ProfileCardContainer from './components/profileCardContainer/ProfileCardContainer'
import ProfilesContext from './context/UserContext'


function App() {

 const {getAllProfiles}= useContext(ProfilesContext)

  useEffect(()=>{
    getAllProfiles();
  },[getAllProfiles])

  return (
    <div>
      <Navbar />
      <div className='main-section flex'>
        <ProfileCardContainer/>
        <AddUser />
      </div>
      {/* <button onClick={()=>{console.log(users)}}>Show USers Array</button> */}
      <div className='spacer'></div>
    </div>
  )
}

export default App