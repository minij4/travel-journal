import React from "react";
import logo from "../images/logo.png"


export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={logo}></img>
            <p className="nav-title">my travel journal.</p>
        </nav>
    ) 
}   