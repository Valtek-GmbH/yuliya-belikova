import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Selectpicker from "./Selectpicker";
import Social from "./Social";

// import language from "../assets/lang.svg";

function MenuTop (){
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
                    {/* <img src={language} className="col-md-3 language-image" alt="language" /> */}
                    <Selectpicker />
                </div> 

                <DropdownButton className="menu-button col-1" as={ButtonGroup}>
                    <Dropdown.Item eventKey="1"><NavLink to='/' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>HOME</NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="2"><NavLink to='/about' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>ABOUT ME</NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="3"><NavLink to='/portfolio' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>PORTFOLIO</NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="4"><NavLink to='/services' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>SERVICES</NavLink></Dropdown.Item>
                    <Dropdown.Item eventKey="5"><NavLink to='/tips' className={({ isActive }) => "nav-link" + (isActive ? " nav-link-selected" : "")}>TIPS</NavLink></Dropdown.Item>
                </DropdownButton>
            
            </div>
        </div>
    );
}

export default MenuTop;