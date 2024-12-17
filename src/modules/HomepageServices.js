import React from "react";
import Servicecard from "./Servicecard";

const HomepageServices = function (props) {
    let services = props.services.map ((service) => { 
        return(
          <Servicecard key={service.id} name={service.name} foto={service.foto} linkPortfolio={service.linkPortfoliolinkService} linkService={service.linkService} serviceId={service.id} />
        )
    });

    return(
      <div className="home-services container">
        <div className="row services-tile">
          {services}
        </div>  
      </div>
    )
}

export default HomepageServices;
