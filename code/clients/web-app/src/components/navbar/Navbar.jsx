import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/navbar_logo.svg'
import './Navbar.css' 

const Navbar = () =>{
    return(
        <div className="navbar">
            <img src={Logo} alt="" height={70}/>
            <div className="navbar_login"><NavLink to="/login">Sing in</NavLink></div>
            <div className="navbar_registartion"><NavLink to="/registration">Sing up</NavLink></div>
        </div>
    )   
}

export default Navbar;