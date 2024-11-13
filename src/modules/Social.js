import React from "react";
import { Link } from "react-router-dom";

import telegram from "../assets/telegram.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import tiktok from "../assets/tiktok.svg";

import phone from "../assets/phone-top.svg";
import appointment from "../assets/appointment.svg";

function Social() {
    return (
        <>
            <a href='https://www.tiktok.com/@yuliya.belikova8' target="_blank" rel="noreferrer">
                <img className="link" src={tiktok} alt='Tiktok' />
            </a>    
            <a href='https://t.me/+436603910171' target="_blank" rel="noreferrer">
                <img className="link" src={telegram} alt='Telegram' />
            </a>    
            <a href='https://www.facebook.com/profile.php?id=100078831198652' target="_blank" rel="noreferrer">
                <img className="link" src={facebook} alt='Facebook' />
            </a>    
            <a href='https://www.instagram.com/belikova.beauty/' target="_blank" rel="noreferrer">
                <img className="link" src={instagram} alt='Instagram' />
            </a>    
            <a href='https://wa.me/436603910171' target="_blank" rel="noreferrer">
                <img className="link" src={whatsapp} alt='WhatsApp' />
            </a>           

            <a href='tel:+436603910171' target="_blank" rel="noreferrer">
                <img className="link telefon-img" src={phone} alt='Phone' />
            </a> 
            <Link to='/' >
                <img src={appointment} className="link img-appointment" alt="appointment" />
            </Link> 
   
        </>
    );
}

export default Social;