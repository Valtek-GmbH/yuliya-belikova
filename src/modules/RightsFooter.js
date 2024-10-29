import React from "react";
import { Link } from "react-router-dom";

function RightsFooter () {
    return (
        <div className="col-md-4">
            <ul className="nav flex-column">
                <li className="footer-item">
                    <Link to='/' className='nav-item'>IMPRESSUM</Link>
                </li>
                <li className="footer-item">
                    <Link to='/' className='nav-item'>PRIVACY POLICY</Link>
                </li>
                <li className="footer-item">
                    <Link to='/' className='nav-item'>AGB</Link>
                </li>
           </ul>
        </div>
    );
}

export default RightsFooter;