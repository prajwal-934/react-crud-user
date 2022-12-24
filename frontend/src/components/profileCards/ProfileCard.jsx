import React, { useContext } from "react";
import ProfilesContext from "../../context/UserContext";
import profileImage from '../../assets/images/img_avatar.png'
import './ProfileCard.css'

const ProfileCard = ({ user }) => {

    const { deleteUserById } = useContext(ProfilesContext)

    const handleDelete = () => {
        deleteUserById(user._id)
    }

    const { userName, email, occupation, age, password } = user || {}
    return (
        <div className="card">
            <div className="image-container">
                <img src={profileImage} alt="Avatar" className="card-img"></img>
            </div>
            <div className="card-container">
                <h4><b>{userName}</b></h4>
                <p><span className="card-key" >Email :</span> {email}</p>
                <p><span className="card-key">Age :</span> {age}</p>
                <p><span className="card-key">Occupation :</span> {occupation}</p>
                <p><span className="card-key">Password :</span> {password}</p>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </div>

    )
}

export default ProfileCard