import React from "react";
import profileImage from '../Assets/Images/img_avatar.png'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className="card">
            <div className="image-container">
            <img src={profileImage} alt="Avatar" style={{width : "100%" , height : "100%"}}></img>
            </div>
            <div className="card-container">
                <h4><b>Prajwal Patil</b></h4>
                <p><span style={{fontWeight:"1000"}}>Email :</span> patilprajwal982@gmail.com</p>
                <p><span style={{fontWeight:"1000"}}>Age :</span> 16</p>
                <p><span style={{fontWeight:"1000"}}>Occupation :</span> Software Engg</p>
                <p><span style={{fontWeight:"1000"}}>Password :</span> Cs@12345</p>
            </div>
        </div>
        
    )
}

export default ProfileCard