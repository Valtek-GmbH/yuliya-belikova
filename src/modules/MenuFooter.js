import React from "react";
import { Link } from "react-router-dom";

function MenuFooter () {
    return(
        <div className="footer-menu-col col-md-2">
            <ul className="nav flex-column">
                <li className="footer-item">
                    <Link to='/' className='nav-item'>HOME</Link>
                </li>
                <li className="footer-item">
                    <Link to='/about' className='nav-item'>ABOUT ME</Link>
                </li>
                <li className="footer-item">
                    <Link to='/portfolio' className='nav-item'>PORTFOLIO</Link>
                </li>
                <li className="footer-item">
                    <Link to='/services' className='nav-item'>SERVICES</Link> 
                </li>
                <li className="footer-item">
                    <Link to='/tips' className='nav-item'>TIPS</Link> 
                </li>
            </ul>
            <div className="divider divider-short"></div>
        </div>
    );
}

export default MenuFooter;