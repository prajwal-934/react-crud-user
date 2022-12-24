import React, { useContext } from "react";
import ProfileCard from '../profileCards/ProfileCard'
import './ProfileCardContainer.css'
import ProfilesContext from "../../context/UserContext";

const ProfileCardContainer = () => {

    const { users } = useContext(ProfilesContext)

    const renderUser = users.map((user) => {
        return (
            <ProfileCard key={user._id} user={user} />
        )
    })

    return (
        <div className="profile-container">
            <h1> Profile Section</h1>
            <div className="profiles">
                {renderUser}
            </div>
        </div>
    )
}

export default ProfileCardContainer