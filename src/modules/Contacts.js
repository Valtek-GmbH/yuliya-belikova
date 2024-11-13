import React from "react";
import email from "../assets/email.svg";
import phone from "../assets/phone-top.svg";
import whatsapp from "../assets/whatsapp.svg";

function Contacts () {
    return (
        <div className="footer-menu-col col-md-6">
            <ul className="nav flex-column">
                <li className="nav-item footer-item">
                    <img className="contact-image" src={email} alt='email' />
                    <a className="contact-link" href="mailto:belikova2022@icloud.com">belikova2022@icloud.com</a>
                </li>
                <li className="nav-item footer-item">
                    <img className="contact-image" src={phone} alt='phone' />
                    <a className="contact-link" href="tel:+436603910171">+43 660 391 01 71</a>
                </li>
                <li className="nav-item footer-item">
                    <img className="contact-image" src={whatsapp} alt="whatsapp" />
                    <a className="contact-link" href="https://wa.me/436603910171" target="_blank" rel="noreferrer">WhatsApp</a>
                </li>
            </ul>
            <div className="divider divider-short"></div>
        </div>
    );
}

export default Contacts;