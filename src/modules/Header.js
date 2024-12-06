import React from "react";
import { Link } from "react-router-dom";

import MenuBottom from "./MenuBottom";
import MenuTop from "./MenuTop";

import logo from '../assets/logo.svg';

function Header(props){
    return(
        <div className="header">
            <div className='row'>
                <Link to='/' className='col-md-4'>
                    <img className='logo' src={logo} alt='Logo' />
                </Link>
                <div className="menu col-md-8">
                    <MenuTop onChangeLanguage={(value) => props.onChangeLanguage(value)}/>
                    <MenuBottom />
                </div>
    
            </div>
        </div>  
    );
}

export default Header;
