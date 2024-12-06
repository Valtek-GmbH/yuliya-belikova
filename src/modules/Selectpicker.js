import React from "react";

function Selectpicker (props) {
    return(
        <select className="selectpicker" data-width="fit" onChange={(event)=>props.onChangeLanguage(event.target.value)} value="EN">
            <option>EN</option>
            <option>RU</option>
            <option>DE</option>
        </select>  
    );
}

export default Selectpicker;