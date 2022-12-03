import React from "react";
import ProfileCard from './ProfileCard'
import './ProfileCardContainer.css'
const ProfileCardContainer=()=>{
    return(
        <div className="profile-container">
            <h1> Profile Section</h1>
            <div className="profiles">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    )
}

export default ProfileCardContainer