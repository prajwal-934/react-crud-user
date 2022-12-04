import React from "react";
import ProfileCard from './ProfileCard'
import './ProfileCardContainer.css'
const ProfileCardContainer=({users})=>{
    
    const renderUser = users.map((user)=>{
        return (
            <ProfileCard key={user._id} user={user}/>
        ) 
    })

    return(
        <div className="profile-container">
            <h1> Profile Section</h1>
            <div className="profiles">
                {renderUser}
            </div>
        </div>
    )
}

export default ProfileCardContainer