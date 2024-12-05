import React from "react";

  import makeupImage from "../assets/makeup.jpg";
  import makeupCouchingImage from "../assets/makeup-couching.jpg";
  import lash from "../assets/lash.jpg";
  import curls from "../assets/curls.jpg";
  import straightening from "../assets/straightening.jpg";
  import styling from "../assets/styling.jpg";
  import collaboration from "../assets/collaboration.jpg";

import homeimg from "../assets/home.jpg";
import HomepageServices from "./HomepageServices";

let data = {
  "services":[
      {
          "id": "makeup",
          "name": "Make-Up",
          "foto": makeupImage,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "makeup-couching",
          "name": "Make-Up Coaching",
          "foto": makeupCouchingImage,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "lash",
          "name": "Lash application",
          "foto": lash,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "curls",
          "name": "Winding Curls",
          "foto": curls,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "straightening", 
          "name": "Hair straightening",
          "foto": straightening,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "styling",
          "name": "Hairstyle",
          "foto": styling,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "collaboration",
          "name": "Partnership",
          "foto": collaboration,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      }
]}

function Homepage () {
  return(
    <div className="body-section">
      <div className="container home-description d-flex flex-row">
        <img className="homeimg col-sm-12" src={homeimg} alt="service foto"/>
        <div className="col-sm-12 home-text">
          <p>If you need a beautiful, modern makeup and hairstyle, you are in the right place!</p> 
          <p>The principles of my work are to emphasize your strengths, to charge you with self—love and self-confidence throughout the day. To provide a high-quality service for a comfortable time and optimal cost.</p>
          <p>To inspire you to further transform.</p>
        </div> 
      </div>
      <HomepageServices services={data.services} />
    </div>
  );
}

export default Homepage;