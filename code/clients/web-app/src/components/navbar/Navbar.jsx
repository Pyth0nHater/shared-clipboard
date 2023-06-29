import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/navbar_logo.png'
import './Navbar.css' 
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

const Navbar = () =>{
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return(
        <div className="navbar">
            <NavLink to="/"><img className="logo" src={Logo} alt=""/></NavLink>
            {!isAuth &&<div className="navbar_login">
                <NavLink to="/login" style={{ textDecoration: 'none', color:"black"}}>Sign in</NavLink>
            </div>}
            {!isAuth &&<div className="navbar_registartion">
                <NavLink to="/registration" style={{ textDecoration: 'none', color:"black"}}>Sign up</NavLink>
            </div>}
            {isAuth &&<div onClick={()=> dispatch(logout())} className="navbar_login">Sign out</div>}
            <div className="line"></div>
        </div>
    )   
}

export default Navbar;