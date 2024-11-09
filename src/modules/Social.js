import React from "react";
import telegram from "../assets/telegram.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import tiktok from "../assets/tiktok.svg";

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
        
        </>
    );
}

export default Social;