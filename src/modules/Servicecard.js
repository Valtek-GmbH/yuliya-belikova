import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Servicecard = function (props) {
    return(
      <div className="home-service text-center col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <img className="home-service-image" src={props.foto} alt={props.name} onClick={(event) => {
          event.preventDefault();
          document.getElementById(props.serviceId).scrollIntoView(false);
        }}/>
        <span className="service-caption">{props.name}</span>
        <div className="container">
          <div className="service-buttons row">
            <Link to={props.linkPortfolio} className="btn col-6">
              <FormattedMessage id="menu.portfolio" defaultMessage="Portfolio" />
            </Link>
            <Link to={{pathname: props.linkService, hash: "#"+props.serviceId}} className="btn col-6">
              <FormattedMessage id="menu.services" defaultMessage="Services" />
            </Link>
          </div>
        </div>
      </div>

    );
}

export default Servicecard;