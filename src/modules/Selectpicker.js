import React from "react";
import {LanguageContext} from "./LanguageWrapper";

function Selectpicker (props) {
    const context = React.useContext(LanguageContext);
    return(
        <select className="selectpicker" data-width="fit" onChange={context.selectLanguage} value = {context.locale}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="de">DE</option>
        </select>  
    );
}

export function SelectpickerFooter (props) {
    const context = React.useContext(LanguageContext);
    return(
        <select className="dropbtn" data-width="fit" onChange={context.selectLanguage} value = {context.locale}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="de">Deutsch</option>
        </select>  
    );
}

export default Selectpicker;