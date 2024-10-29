import React from "react";
import telegram from "../assets/telegram.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";

function Social() {
    return (
        <>
            <a href='https://web.telegram.org/' target="_blank" rel="noreferrer">
                <img className="link" src={telegram} alt='Telegram' />
            </a>    
            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                <img className="link" src={facebook} alt='Facebook' />
            </a>    
            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                <img className="link" src={instagram} alt='Instagram' />
            </a>    
            <a href='https://web.whatsapp.com/' target="_blank" rel="noreferrer">
                <img className="link" src={whatsapp} alt='WhatsApp' />
            </a>    
        
        </>
    );
}

export default Social;