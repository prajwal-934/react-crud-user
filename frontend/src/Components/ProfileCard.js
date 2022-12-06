import React ,{useContext} from "react";
import ProfilesContext from "../Context/UserContext";
import profileImage from '../Assets/Images/img_avatar.png'
import './ProfileCard.css'

const ProfileCard = ({user}) => {

    const {deleteUserById}=useContext(ProfilesContext)

    const handleDelete=()=>{
        deleteUserById(user._id)
    }



    const {userName,email,occupation,age,password}=user
    return (
        <div className="card">
            <div className="image-container">
            <img src={profileImage} alt="Avatar" style={{width : "100%" , height : "100%"}}></img>
            </div>
            <div className="card-container">
                <h4><b>{userName}</b></h4>
                <p><span style={{fontWeight:"1000"}}>Email :</span> {email}</p>
                <p><span style={{fontWeight:"1000"}}>Age :</span> {age}</p>
                <p><span style={{fontWeight:"1000"}}>Occupation :</span> {occupation}</p>
                <p><span style={{fontWeight:"1000"}}>Password :</span> {password}</p>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </div>
        
    )
}

export default ProfileCard