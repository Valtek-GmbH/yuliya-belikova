import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import MenuBottom from "./MenuBottom";
import MenuTop from "./MenuTop";

function Header(){
    return(
        <div className="header">
            <div className='row'>
                <Link to='/' className='col-md-3'>
                    <img className='logo col-md-12' src={logo} alt='Logo' />
                </Link>
                <div className="menu col-md-9">
                    <MenuTop />
                    <MenuBottom />
                </div>
            </div>
        </div>  
    );
}

export default Header;