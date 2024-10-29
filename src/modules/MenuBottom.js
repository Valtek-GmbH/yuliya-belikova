import React from "react";
import { Link } from "react-router-dom";

function MenuBottom () {
    return (
        <nav className='navbar'>
            <Link to='/' className='nav-item'>HOME</Link>
            <Link to='/about' className='nav-item'>ABOUT ME</Link>
            <Link to='/portfolio' className='nav-item'>PORTFOLIO</Link>
            <Link to='/services' className='nav-item'>SERVICES</Link>
            <Link to='/tips' className='nav-item'>TIPS</Link>
        </nav>
    );
}

export default MenuBottom;