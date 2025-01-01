import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function MenuFooter () {
    return(
        <div className="footer-menu-col col-md-2">
            <ul className="nav flex-column">
                <li className="footer-item">
                    <Link to='/' className='nav-item'>
                        <FormattedMessage id="menu.home" defaultMessage="Home" /> 
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to='/about' className='nav-item'>
                        <FormattedMessage id="menu.about" defaultMessage="About me" />
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to='/portfolio' className='nav-item'>
                        <FormattedMessage id="menu.portfolio" defaultMessage="Portfolio" />
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to='/services' className='nav-item'>
                        <FormattedMessage id="menu.services" defaultMessage="Services" />
                    </Link> 
                </li>
                <li className="footer-item">
                    <Link to='/tips' className='nav-item'>
                        <FormattedMessage id="menu.tips" defaultMessage="Tips" />
                    </Link> 
                </li>
            </ul>
            <div className="divider divider-short"></div>
        </div>
    );
}

export default MenuFooter;