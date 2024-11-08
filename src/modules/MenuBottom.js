import React from "react";
import { NavLink } from "react-router-dom";

function MenuBottom () {
    return (
        <nav className='navbar'>
            <NavLink to='/' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>HOME</NavLink>
            <NavLink to='/about' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>ABOUT ME</NavLink>
            <NavLink to='/portfolio' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>PORTFOLIO</NavLink>
            <NavLink to='/services' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>SERVICES</NavLink>
            <NavLink to='/tips' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>TIPS</NavLink>
        </nav>
    );
}

export default MenuBottom;