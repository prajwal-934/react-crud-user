import React, { useEffect , useContext } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import AddUser from './Components/AddUser'
import ProfileCardContainer from './Components/ProfileCardContainer'
import ProfilesContext from './Context/UserContext'


function App() {

 const {getAllProfiles}= useContext(ProfilesContext)

  useEffect(()=>{
    getAllProfiles();
  },[])

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