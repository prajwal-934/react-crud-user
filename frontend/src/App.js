import React, { useState , useEffect } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import AddUser from './Components/AddUser'
import ProfileCardContainer from './Components/ProfileCardContainer'
import Footer from './Components/Footer'
import getAge from 'get-age'
import axios from 'axios'

function App() {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([])

  const getAllProfiles = async () => {
    const response = await axios.get(`user`)
    setUsers(response.data)
  }

  useEffect(()=>{
     getAllProfiles()   
  },[])


  const createUser = async (newUser) => {
    newUser = ({ ...newUser, age: getAge(newUser.age) })
    await axios.post('user', newUser).then((res) => {
      if (res.status === 200) {
        console.log("User Created Successfully")
      }
    }).catch((e) => { console.log("something went wrong") })

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
  }



  return (
    <div>
      <Navbar />
      <div className='main-section flex'>
        <ProfileCardContainer users={users}/>
        <AddUser onCreate={createUser} />
      </div>
      {/* <button onClick={()=>{console.log(users)}}>Show USers Array</button> */}
      <div className='spacer'></div>
    </div>
  )
}

export default App