import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MenuUp } from "react-bootstrap-icons";

import {FormattedMessage} from 'react-intl';

import Selectpicker from "./Selectpicker";
import Social from "./Social";

function MenuTop (props){
    return (
        <div className="container menu-top"> 
            <div className="row">
                <div className="social col-lg-4 col-md-6 col-7">
                    <Social />
                </div> 

                <div className="contact col-xl-4 col-3">
                    <a href="tel:+436603910171" className="telefon">+43 660 391 01 71</a>  
                </div>

                <div className="appointment col-xl-2 col-lg-3 col-md-4 col-2">
                    <button className="btn btn-primary btn-appointment">APPOINTMENT</button>
                </div>

                <div className="float-right col-2 language-selector">
                    <Selectpicker />
                </div> 
                
                <DropdownButton className="menu-button col-2" as={ButtonGroup} title={<MenuUp />}>
                    <Dropdown.Item eventKey="1"><NavLink to='/' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}><FormattedMessage id="menu.home" defaultMessage="Home" /></NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="2"><NavLink to='/about' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}><FormattedMessage id="menu.about" defaultMessage="About me" /></NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="3"><NavLink to='/portfolio' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}><FormattedMessage id="menu.portfolio" defaultMessage="Portfolio" /></NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="4"><NavLink to='/services' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}><FormattedMessage id="menu.services" defaultMessage="Services" /></NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="5"><NavLink to='/tips' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}><FormattedMessage id="menu.tips" defaultMessage="Tips" /></NavLink></Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
}

export default MenuTop;