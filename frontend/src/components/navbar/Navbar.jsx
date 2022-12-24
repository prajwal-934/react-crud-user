import React from "react";
import './navbar.css'
import companyLogo from "../../assets/images/asset 1.png"

const Navbar = () => {

    return (
        <nav>
            <div className="navbar flex">
                <div className="logo">
                    <img src={companyLogo} alt="company logo"></img>
                </div>
                <div className="navbar-links">
                    <ul className="flex">
                        <li><a href="#" className="nav-link" >Home</a></li>
                        <li><a href="#" className="nav-link" >About</a></li>
                        <li><a href="#" className="nav-link" >Services</a></li>
                        <li><a href="#" className="nav-link" >Contact US</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar