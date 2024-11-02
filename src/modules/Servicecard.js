import React from "react";
import { Link } from "react-router-dom";

const Servicecard = function (props) {
    return(
      <div className="home-service text-center col-xlg-3 col-lg-4 col-md-6 col-sm-12">
        <img className="home-service-image" src={props.foto} alt={props.name} />
        <span className="service-caption">{props.name}</span>
        <div className="container">
          <div className="service-buttons row">
            <Link to={props.linkPortfolio} className="btn col-sm-6">Portfolio</Link>
            <Link to={props.linkService} className="btn col-sm-6">Service</Link>
          </div>
        </div>
      </div>

    );
}

export default Servicecard;