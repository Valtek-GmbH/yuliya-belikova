import React from "react";
import logo from '../assets/logo.svg';
import Contacts from "./Contacts";
import MenuFooter from "./MenuFooter";
import RightsFooter from "./RightsFooter";
import Social from "./Social";

function Footer () {
    return(
        <div className="footer">
            <div className="divider"></div>
            <div className="logo-section">
                <img className='logo-footer' src={logo} alt='Logo' />
            </div>
            <div className="container footer-menu-section">
                <div className="row">
                    <Contacts />
                    
                    <MenuFooter />
                    
                    <RightsFooter />
                </div>
                <div className="divider"></div>
                <div className="footer-bottom row">
                    <div className="footer-menu-col col-md-4">
                        <p>Change website language <span className="dropbtn" href='#'>Englisch</span> </p>
                        <ul className="dropmenu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Русский</a></li>
                            <li><a href="#">Deutsch</a></li>        
                        </ul>
                    </div>
                    <div className="footer-menu-col col-md-4">
                        Copyright
                    </div>
                    <div className="footer-menu-col col-md-4">
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;