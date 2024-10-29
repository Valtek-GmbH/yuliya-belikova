import React from "react";
import language from "../assets/lang.svg";
import Selectpicker from "./Selectpicker";
import Social from "./Social";

function MenuTop (){
    return (
        <div className="container menu-top"> 
            <div className="row">
                <div className="social col-md-4">
                    <Social />
                </div> 

                <div className="contact col-md-4">
                    <a href="tel:+436603910171" className="telefon">+43 660 391 01 71</a> 
                </div>

                <div className="row float-right col-md-2 language-selector">
                    <img src={language} className="col-md-3 language-image" alt="language" />
                    <Selectpicker />
                </div>              

                <button className="btn btn-outline-primary col-md-2 btn-appointment">APPOINTMENT</button>

            </div>
        </div>
    );
}

export default MenuTop;