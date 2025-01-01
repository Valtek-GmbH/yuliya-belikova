import React from "react";
import { FormattedMessage } from "react-intl";

import logo from '../assets/logo.svg';
import Contacts from "./Contacts";
import MenuFooter from "./MenuFooter";
import RightsFooter from "./RightsFooter";
import Social from "./Social";
import { SelectpickerFooter } from "./Selectpicker";

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
                        <span><FormattedMessage id="footer.language" defaultMessage="Change website language " /><SelectpickerFooter /> </span>
                    </div>
                    <div className="footer-menu-col col-md-4">
                        <span><FormattedMessage id="footer.copyright" defaultMessage="Designed by " /><a className="link" href="https://www.valtek.at" target="_blank" rel="noreferrer">Valtek GmbH</a> </span>
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