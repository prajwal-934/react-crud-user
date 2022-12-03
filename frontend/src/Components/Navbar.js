import React from "react";
import './Navbar.css'
import companyLogo from "../Assets/Images/asset 1.png"

const Navbar=()=>{

    return(
        <nav>
            <div className="navbar flex">
                <div className="logo">
                    <img src={companyLogo} alt="company logo"></img>
                </div>
                <div className="navbar-links">
                    <ul className="flex">
                        <li><a href="w" className="nav-link" >Home</a></li>
                        <li><a href="w" className="nav-link" >About</a></li>
                        <li><a href="w" className="nav-link" >Services</a></li>
                        <li><a href="w" className="nav-link" >Contact US</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar