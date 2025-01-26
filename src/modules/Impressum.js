import React from "react";

import {FormattedMessage} from 'react-intl';

function Impressum () {
    return(
      <div className="container body-section">
        <h1><FormattedMessage id="menu.impressum" defaultMessage="Impressum" /></h1>
        <div className="impressum-data">
            <h2><FormattedMessage id="impressum.name.title" defaultMessage="Name" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.name.content" defaultMessage="Yuliya Belikova" /></p>
            <h2><FormattedMessage id="impressum.address.title" defaultMessage="Address" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.address.content" defaultMessage="Kartäuserweg 7, 2500 Baden, Österreich" /></p>
            <h2><FormattedMessage id="impressum.phone.title" defaultMessage="Phone" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.phone.content" defaultMessage="+43 660 3910171" /></p>
            <h2><FormattedMessage id="impressum.email.title" defaultMessage="Email" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.email.content" defaultMessage="belikova2022@icloud.com" /></p>
            <h2><FormattedMessage id="impressum.gisa.title" defaultMessage="GISA-Zahl" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.gisa.content" defaultMessage="37147235" /></p>
            <h2><FormattedMessage id="impressum.vatid.title" defaultMessage="Steuernummer (VAT ID)" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.vatid.content" defaultMessage="16 374/8007" /></p>
            <h2><FormattedMessage id="impressum.responsible.title" defaultMessage="Responsible for Content" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.name.content" defaultMessage="Yuliya Belikova" /></p>
            <h2><FormattedMessage id="impressum.activity.title" defaultMessage="Professional Activity" /></h2>
            <p className='impressum-text'><FormattedMessage id="impressum.activity.content" defaultMessage="Color, type, style and image consulting regarding colors, clothing and accessories according to taste and visual aspects with regard to effect and appearance." /></p>
        </div>
      </div>  
    );
}

export default Impressum;