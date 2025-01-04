import React from "react";

import data from "../assets/data/services";
import {LanguageContext} from "./LanguageWrapper";

function Services () {
  const languageContext = React.useContext(LanguageContext);
  let servicesData;
  if (languageContext.locale === 'en') {
    servicesData = data.services_en;
  } else {
    if (languageContext.locale === 'ru') {
      servicesData = data.services_ru;
    } else {
      servicesData = data.services_de;
    }
  }

  let services = servicesData.map ((service, index) => {
      let pstn = 'service row';
      if (index % 2 !== 0) {
        pstn = pstn + ' service-odd';
      }; 
      return(
        <div className="container services-container">
          <div className={pstn} key={service.id} id={service.id}>
            <img className="homeimg col-md-4" src={service.foto} alt={service.id}/>
            <div className="service-text col-md-7">
              <h1>{service.name}</h1>
              <p>{service.description}</p> 
              
              <div>
                <button className="btn btn-primary btn-appointment">APPOINTMENT</button>
                <button className="btn btn-primary btn-appointment">PAYMENT</button>
              </div>
            </div> 
        </div>  
        </div>      
      )
    });

    return(
      <div className="body-section">
        {services}
      </div>
    );
}

export default Services;