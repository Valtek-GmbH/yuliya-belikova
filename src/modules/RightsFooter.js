import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function RightsFooter () {
    return (
        <div className="footer-menu-col col-md-4">
            <ul className="nav flex-column">
                <li className="footer-item">
                    <Link to='/' className='nav-item'>
                        <FormattedMessage id="menu.impressum" defaultMessage="Impressum" />
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to='/' className='nav-item'>
                        <FormattedMessage id="menu.privacy" defaultMessage="Privacy Policy" />
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to='/' className='nav-item'>
                        <FormattedMessage id="menu.agb" defaultMessage="AGB" />
                    </Link>
                </li>
           </ul>
        </div>
    );
}

export default RightsFooter;