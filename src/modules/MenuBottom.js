import React from "react";
import { NavLink } from "react-router-dom";

import {FormattedMessage} from 'react-intl';

function MenuBottom () {
    return (
        <nav className='navbar navbar-expand-md'>
            <NavLink to='/' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>
              <FormattedMessage id="menu.home" defaultMessage="Home" /> 
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>
              <FormattedMessage id="menu.about" defaultMessage="About me" /> 
            </NavLink>
            <NavLink to='/portfolio' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>
              <FormattedMessage id="menu.portfolio" defaultMessage="Portfolio" />            
            </NavLink>
            <NavLink to='/services' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>
              <FormattedMessage id="menu.services" defaultMessage="Services" />
            </NavLink>
            <NavLink to='/tips' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>
              <FormattedMessage id="menu.tips" defaultMessage="Tips" />
            </NavLink>
        </nav>
    );
}

export default MenuBottom;
