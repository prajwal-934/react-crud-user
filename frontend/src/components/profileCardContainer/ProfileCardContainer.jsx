import React, { useContext } from "react";
import ProfileCard from '../profileCards/ProfileCard'
import './ProfileCardContainer.css'
import ProfilesContext from "../../context/UserContext";

const ProfileCardContainer = () => {

    const { users } = useContext(ProfilesContext)
    console.log(users)
    const renderUser = users.map((user) => {
        return (
            <ProfileCard key={user._id} user={user} />
        )
    })

    const emptyUsers = <h1>No users to render</h1>

    return (
        <div className="profile-container">
            <h1> Profile Section</h1>
            {
                users.length ? renderUser : emptyUsers       
            }

        </div>
    )
}

export default ProfileCardContainer