import React from "react";
import { FormattedMessage } from "react-intl";

import homeimg from "../assets/home.jpg";
import HomepageServices from "./HomepageServices";

import data from "../assets/data/services";
import {LanguageContext} from "./LanguageWrapper";

function Homepage () {
  const languageContext = React.useContext(LanguageContext);
  let services;
  if (languageContext.locale === 'en') {
    services = data.services_en;
  } else {
    if (languageContext.locale === 'ru') {
      services = data.services_ru;
    } else {
      services = data.services_de;
    }
  }
  return(
    <div className="container body-section">
      <div className="row d-flex flex-row home-description">
        <img className="homeimg col-md-6" src={homeimg} alt="service foto"/>
        <div className="home-text col-md-6">
          <p><FormattedMessage id="home.text.p1" defaultMessage="If you need a beautiful, modern makeup and hairstyle, you are in the right place!" /></p>
          <p><FormattedMessage id="home.text.p2" defaultMessage="The principles of my work are to emphasize your strengths, to charge you with self-love and self-confidence throughout the day. To provide a high-quality service for a comfortable time and optimal cost." /></p>
          <p><FormattedMessage id="home.text.p3" defaultMessage="To inspire you to further transform." /></p>
        </div> 
      </div>
      <HomepageServices services={services} />
    </div>
  );
}

export default Homepage;