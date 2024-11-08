import React from "react";
import Servicecard from "./Servicecard";

const HomepageServices = function (props) {
    let services = props.services.map ((service) => { 
        let linkService = `${service.linkService}#${service.id}`; 
        return(
          <Servicecard key={service.id} name={service.name} foto={service.foto} linkPortfolio={service.linkPortfolio} linkService={linkService} />
        )
    });

    return(
      <div className="home-services container">
        <div className="row row-gap-3 services-tile">
          {services}
        </div>  
      </div>
    )
}

export default HomepageServices;
